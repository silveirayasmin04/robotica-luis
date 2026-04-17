/* =========================
   MENU HAMBURGUER
========================= */
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}

// Fecha o menu ao clicar em um link (mobile)
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('nav a');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      const menu = document.getElementById('menu');
      menu.classList.remove('active');
    });
  });
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', function (e) {
  const menu = document.getElementById('menu');
  const toggle = document.querySelector('.menu-toggle');
  if (menu && toggle && !menu.contains(e.target) && !toggle.contains(e.target)) {
    menu.classList.remove('active');
  }
});

/* =========================
   HEADER — SCROLL
========================= */
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 40) {
    header.style.background = 'rgba(0, 0, 0, 0.92)';
  } else {
    header.style.background = 'rgba(0, 0, 0, 0.6)';
  }
});