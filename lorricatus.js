// Egyszerű hamburger menü vezérlés
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    if (open) {
      navMenu.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
    } else {
      navMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  // Bezárás, ha a menüben linkre kattintanak (mobil)
  navMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
});