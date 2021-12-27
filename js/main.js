"use strict";
"use strict";

console.log('maxgraph');
"use strict";

var menu = document.querySelector('.nav'),
    burger = document.querySelector('.burger'),
    mobileBack = document.querySelector('.mobile-back'),
    overlay = document.querySelector('.overlay');

var lockScroll = function lockScroll() {
  document.body.classList.add('lock');
};

var unlockScroll = function unlockScroll() {
  document.body.classList.remove('lock');
};

var initialMenu = function initialMenu() {
  document.querySelector('.nav__list--dropdown').classList.remove('transformation');
  document.querySelector('.nav').querySelector('.nav__list').classList.remove('transformation');
  scrollTop();
};

var scrollTop = function scrollTop() {
  menu.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

burger.addEventListener('click', function () {
  menu.classList.add('open');
  overlay.classList.add('open');
  lockScroll();
  initialMenu();
});
overlay.addEventListener('click', function () {
  menu.classList.remove('open');
  overlay.classList.remove('open');
  unlockScroll();
});
menu.addEventListener('click', function (e) {
  if (e.target.classList.contains('nav__link--drop')) {
    e.preventDefault();
    e.target.closest('.nav__list').classList.add('transformation');
    e.target.closest('.nav__item').querySelector('.nav__list--dropdown').classList.add('transformation');
    scrollTop();
  }

  if (e.target.classList.contains('mobile-back__link')) {
    e.preventDefault();
    e.target.closest('.nav__list--dropdown').classList.remove('transformation');
    e.target.closest('.nav').querySelector('.nav__list').classList.remove('transformation');
    scrollTop();
  }

  if (e.target.classList.contains('nav__link') && !e.target.classList.contains('nav__link--drop')) {
    e.preventDefault();
    menu.classList.remove('open');
    overlay.classList.remove('open');
    unlockScroll();
  }
});
//# sourceMappingURL=main.js.map
