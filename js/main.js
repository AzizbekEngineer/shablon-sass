let menu = document.querySelector(".header__hamburger");
let navBar = document.querySelector(".header__list");
let Close = document.querySelector(".header__item--close");

menu.addEventListener("click", function () {
    navBar.classList.toggle("header__show__list")
})
Close.addEventListener("click", function () {
    navBar.classList.remove("header__show__list")
})

