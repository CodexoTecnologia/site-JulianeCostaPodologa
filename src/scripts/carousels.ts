export function initCarousels() {
  document.querySelectorAll<HTMLElement>('[data-carousel]').forEach((carousel) => {
    const track = carousel.querySelector<HTMLElement>('.carousel-track');
    const previous = carousel.querySelector<HTMLButtonElement>('[data-previous]');
    const next = carousel.querySelector<HTMLButtonElement>('[data-next]');
    const status = carousel.querySelector<HTMLElement>('.carousel-status');
    const controls = carousel.querySelector<HTMLElement>('.carousel-controls');
    if (!track || !previous || !next || !status || !controls) return;
    const slides = Array.from(track.children) as HTMLElement[];
    const start = (slide: HTMLElement) => slide.offsetLeft - slides[0].offsetLeft;
    const update = () => {
      const position = Math.round(track.scrollLeft);
      previous.disabled = position <= 2;
      next.disabled = position >= track.scrollWidth - track.clientWidth - 2;
      const fullyVisible = slides.flatMap((slide, index) =>
        start(slide) >= position - 4 &&
        start(slide) + slide.offsetWidth <= position + track.clientWidth + 4
          ? [index]
          : [],
      );
      const first =
        fullyVisible[0] ??
        slides.findIndex((slide) => start(slide) + slide.offsetWidth > position + 4);
      const last = fullyVisible.at(-1) ?? first;
      status.textContent = `${first + 1}${last > first ? `–${last + 1}` : ''} de ${slides.length}`;
    };
    const move = (direction: number) => {
      const stride = slides.length > 1 ? start(slides[1]) : track.clientWidth;
      const page = Math.max(1, Math.round(track.clientWidth / stride));
      track.scrollBy({
        left: direction * stride * page,
        behavior:
          document.documentElement.dataset.motion === 'off' ||
          matchMedia('(prefers-reduced-motion: reduce)').matches
            ? 'instant'
            : 'smooth',
      });
    };
    previous.addEventListener('click', () => move(-1));
    next.addEventListener('click', () => move(1));
    track.addEventListener('keydown', (event) => {
      if (event.target !== track) return;
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        move(event.key === 'ArrowRight' ? 1 : -1);
      }
      if (event.key === 'Home' || event.key === 'End') {
        event.preventDefault();
        track.scrollTo({ left: event.key === 'Home' ? 0 : track.scrollWidth, behavior: 'instant' });
      }
    });
    let timer: ReturnType<typeof setTimeout>;
    track.addEventListener(
      'scroll',
      () => {
        clearTimeout(timer);
        timer = setTimeout(update, 120);
      },
      { passive: true },
    );
    new ResizeObserver(update).observe(track);
    controls.hidden = false;
    update();
  });
}
