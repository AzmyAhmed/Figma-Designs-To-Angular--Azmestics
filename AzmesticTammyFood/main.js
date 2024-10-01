const menu_icon = document.querySelector(".menu-icon");
const close_icon = document.querySelector(".close-icon");
const mobile_container = document.querySelector(".mobile-container");
const desktop_nav = document.querySelector("nav.desktop-nav");
const mobile_nav = document.querySelector("nav.mobile-nav");

menu_icon.addEventListener("click", () => {
  mobile_container.classList.add("active");
});
close_icon.addEventListener("click", () => {
  mobile_container.classList.remove("active");
});
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 80) {
    desktop_nav.classList.add("scrolled");
    mobile_nav.classList.add("scrolled");
  } else {
    desktop_nav.classList.remove("scrolled");
    mobile_nav.classList.remove("scrolled");
  }
});
