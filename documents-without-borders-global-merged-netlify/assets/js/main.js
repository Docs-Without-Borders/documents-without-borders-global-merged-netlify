/* Progressive enhancement only: the content remains readable without JavaScript. */
(() => {
  'use strict';
  // Hide the mobile menu with CSS only after JavaScript has loaded.
  document.documentElement.classList.add('js-ready');
  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-navigation]');
  if (toggle && nav) {
    const closeMenu = () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    };
    toggle.addEventListener('click', () => {
      const willOpen = !nav.classList.contains('is-open');
      nav.classList.toggle('is-open', willOpen);
      toggle.setAttribute('aria-expanded', String(willOpen));
      toggle.setAttribute('aria-label', willOpen ? 'Close menu' : 'Open menu');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        closeMenu(); toggle.focus();
      }
    });
    document.addEventListener('click', event => {
      if (!nav.contains(event.target) && !toggle.contains(event.target)) closeMenu();
    });
    window.addEventListener('resize', () => { if (window.innerWidth > 1010) closeMenu(); });
  }
  document.querySelectorAll('[data-year]').forEach(node => { node.textContent = new Date().getFullYear(); });
})();
