export function initSite() {
  const toggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
  const nav = document.querySelector<HTMLElement>('#main-nav');
  const close = (returnFocus = false) => {
    document.body.classList.remove('menu-open');
    toggle?.setAttribute('aria-expanded', 'false');
    if (returnFocus) toggle?.focus();
  };
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => close()));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') close(true);
  });
  document.addEventListener('click', (event) => {
    if (
      event.target instanceof Node &&
      !nav?.contains(event.target) &&
      !toggle?.contains(event.target)
    )
      close();
  });
  document.addEventListener('focusin', (event) => {
    if (
      toggle?.getAttribute('aria-expanded') === 'true' &&
      event.target instanceof Node &&
      !document.querySelector('.site-header')?.contains(event.target)
    )
      close();
  });
  matchMedia('(min-width:801px)').addEventListener('change', () => close());

  const motionButton = document.querySelector<HTMLButtonElement>('.motion-toggle');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = reduced.matches;
  try {
    const stored = sessionStorage.getItem('juliane-motion');
    paused = stored === 'off' ? true : stored === 'on' ? false : reduced.matches;
  } catch {
    /* Storage may be disabled. */
  }
  const updateMotion = () => {
    document.documentElement.dataset.motion = paused ? 'off' : 'on';
    if (motionButton) {
      motionButton.hidden = false;
      motionButton.textContent = paused ? 'Ativar animações' : 'Pausar animações';
      motionButton.setAttribute('aria-pressed', String(paused));
    }
    document.dispatchEvent(new CustomEvent('juliane:motion', { detail: { paused } }));
  };
  motionButton?.addEventListener('click', () => {
    paused = !paused;
    try {
      sessionStorage.setItem('juliane-motion', paused ? 'off' : 'on');
    } catch {}
    updateMotion();
  });
  reduced.addEventListener('change', (e) => {
    paused = e.matches;
    updateMotion();
  });
  updateMotion();

  const contact = document.querySelector<HTMLElement>('.mobile-contact');
  const footer = document.querySelector('.site-footer');
  if (contact && footer && 'IntersectionObserver' in window) {
    const visible = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        }
        contact.classList.toggle('is-footer-visible', visible.size > 0);
      },
      { threshold: 0 },
    );
    observer.observe(footer);
    const inlineContact = document.querySelector('.hero .button');
    if (inlineContact) {
      observer.observe(inlineContact);
    }
  }
}
