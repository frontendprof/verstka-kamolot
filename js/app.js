'use strict';

// add event on elements
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventOnElem(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

// defining vars
const navbar = document.querySelector('.navbar');
const navTogglers = document.querySelectorAll('[data-nav-toggler]');
const navLinks = document.querySelectorAll('.navbar-item');
const overlay = document.querySelector('.overlay');
const header = docuement.querySelector('.header');

// defininig callbacks
const toggleNav = function () {
  navbar.classList.toggle('active');
  overlay.classList.toggle('active');
};

addEventOnElem(navTogglers, 'click', toggleNav);

const closeNavbar = function () {
  navbar.classList.remove('active');
  overlay.classList.remove('active');
};

addEventOnElem(navLinks, 'click', closeNavbar);

// header active when scroll down 100px
const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
};

addEventOnElem(window, 'scroll', activeElem);
