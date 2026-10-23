export function initMotion() {
  let cleanup: (() => void) | undefined;
  let requested = false;
  let generation = 0;
  async function configure() {
    const current = ++generation;
    cleanup?.();
    cleanup = undefined;
    if (
      document.documentElement.dataset.motion === 'off' ||
      (document.documentElement.dataset.motion !== 'on' &&
        matchMedia('(prefers-reduced-motion:reduce)').matches)
    )
      return;
    const [{ gsap }, { ScrollTrigger }] = await Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ]);
    if (current !== generation || document.documentElement.dataset.motion === 'off') return;
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const wave = document.querySelector('.hero .wave-line');
      if (wave instanceof SVGPathElement) {
        const length = wave.getTotalLength();
        gsap.fromTo(
          wave,
          { strokeDasharray: length, strokeDashoffset: length },
          { strokeDashoffset: 0, duration: 1.4, ease: 'power2.out' },
        );
      }
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight * 0.85) return;
        gsap.from(element, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: element, start: 'top 94%', once: true },
        });
      });
      gsap.utils.toArray<HTMLElement>('.process-list li').forEach((element) => {
        gsap.fromTo(
          element,
          { '--process-progress': 0 },
          {
            '--process-progress': 1,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: { trigger: element, start: 'top 90%', once: true },
          },
        );
      });
    });
    cleanup = () => context.revert();
  }
  const begin = () => {
    if (requested) return;
    requested = true;
    void configure();
  };
  if (document.readyState === 'complete') begin();
  else window.addEventListener('load', begin, { once: true });
  document.addEventListener('juliane:motion', () => {
    if (requested) void configure();
  });
  window.addEventListener('pagehide', () => cleanup?.(), { once: true });
}
