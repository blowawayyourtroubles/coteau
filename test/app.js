const toggle = document.getElementById("toggleDark");
const body = document.body;

toggle.addEventListener('click', function () {
  this.classList.toggle("fa-sun");
  this.classList.toggle("fa-moon");

  if (body.classList.toggle("black-theme")) {
    body.style.transition = "1.4s";
  } else {
    body.style.transition = "1.4s";
  }
});

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