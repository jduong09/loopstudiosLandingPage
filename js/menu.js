document.addEventListener('DOMContentLoaded', () => {
  const menuHamburger = document.getElementById('menu-hamburger');
  const iconClose = document.getElementById('icon-close');
  const menuList = document.getElementById('menu-list');
  const menuBackground = document.getElementById('menu-background');

  menuHamburger.addEventListener('click', () => {
    menuHamburger.classList.add('hide');
    iconClose.classList.remove('hide');
    menuList.classList.remove('hide');
    menuBackground.classList.remove('hide');
  });

  iconClose.addEventListener('click', () => {
    menuHamburger.classList.remove('hide');
    iconClose.classList.add('hide');
    menuList.classList.add('hide');
    menuBackground.classList.add('hide');
  });
});