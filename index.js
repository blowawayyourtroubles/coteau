
toggle.addEventListener('click', function () {
    this.classList.toggle("fa-bars");

    if (body.classList.toggle("fa-bars")) {
       
    }
});

const barras = document.getElementById('barras');
const navMenu = document.querySelector('.nav-menu');

barras.addEventListener('click', () => {
  navMenu.classList.toggle('active');
})