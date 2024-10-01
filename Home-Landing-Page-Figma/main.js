const nav = document.querySelector("nav");
const mobile_nav = document.querySelector("nav.mobile-nav");
const menu_Icon = document.querySelector(".menu-icon");
const close_Icon = document.querySelector(".mobile-container .close-icon");
const menu_Container = document.querySelector(".mobile-container");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 60) {
    nav.classList.add("scrolled");
    mobile_nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
    mobile_nav.classList.remove("scrolled");
  }

});
menu_Icon.addEventListener("click", () => {
  menu_Container.classList.add("active");
});
close_Icon.addEventListener("click", () => {
  menu_Container.classList.remove("active");
});
