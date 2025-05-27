const barras = document.getElementById('barras');
const navMenu = document.getElementById('navbar-list');
const body = document.body;

if (barras && navMenu) {
  barras.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    barras.setAttribute('aria-expanded', isOpen);

    // Icon toggle: change between bars and xmark
    const icon = barras.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-bars', !isOpen);
      icon.classList.toggle('fa-xmark', isOpen);
    }

    body.classList.toggle('no-scroll', isOpen);
  });

  // Optional: Close menu with Escape key for accessibility
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      barras.setAttribute('aria-expanded', 'false');
      const icon = barras.querySelector('i');
      if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
      }
      body.classList.remove('no-scroll');
      barras.focus();
    }
  });
}