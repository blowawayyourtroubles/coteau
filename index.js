
const barras = document.getElementById('barras');
const navMenu = document.querySelector('.navbar-list');   
const body = document.body;                         


barras.addEventListener('click', () => {
  
  barras.classList.toggle('fa-bars');
  barras.classList.toggle('fa-xmark');
  navMenu.classList.toggle('active');
  body.classList.toggle('no-scroll);
});


