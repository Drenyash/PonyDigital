var burger = document.querySelector('.burger');
var menu = document.querySelector('.menu');
function toggleBurgerMenu() {
  burger.classList.toggle('burger_active');
  burger.classList.contains('burger_active') ? menu.classList.add('menu_show') : menu.classList.remove('menu_show');
}
burger.addEventListener('click', toggleBurgerMenu);