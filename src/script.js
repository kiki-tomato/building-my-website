"use strict";
import * as bootstrap from "bootstrap";
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

// ELEMENTS
const btnScrollToTop = document.querySelector("#scroll-to-top");
const btnToAbout = document.querySelector(".btn-to-about");
const myOffcanvas = document.querySelector(".offcanvas");
const bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
const offcanvasItem = document.querySelectorAll(".nav-link");
const locationOfAbout = document.querySelector("#about").offsetTop;
const menuHeight = document.querySelector(".navbar").offsetHeight;

//FUNCTIONS
const showBtn = function () {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    btnScrollToTop.style.opacity = 100;
  } else {
    btnScrollToTop.style.opacity = 0;
  }
};

const scrollToTop = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const scrollToAbout = function () {
  window.scrollTo({ top: locationOfAbout - menuHeight, behavior: "smooth" });
};

const hideOffcanvas = function (element) {
  element.addEventListener("click", function () {
    bsOffcanvas.hide();
  });
};

btnScrollToTop.addEventListener("click", scrollToTop);
btnToAbout.addEventListener("click", scrollToAbout);
offcanvasItem.forEach(hideOffcanvas);
window.onscroll = function () {
  showBtn();
};
