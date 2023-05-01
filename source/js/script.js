let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let header = document.querySelector('.page-header');

navMain.classList.remove('main-nav--nojs');
header.classList.remove('page-header--nojs');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  }
  else
    if (navMain.classList.contains('main-nav--opened') &! navMain.classList.contains('main-nav--closing')) {
      navMain.classList.add('main-nav--closing');
      timer = setTimeout(() => {
        navMain.classList.remove('main-nav--closing');
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
      }
      , 400);
  }
  else
  if (navMain.classList.contains('main-nav--closing'))
  {
    clearTimeout(timer);
    navMain.classList.remove('main-nav--closing');
    navMain.classList.add('main-nav--opened');
  }
});
