
let menu_open = document.querySelector(".sidebar__hamburger");
let menu_close = document.querySelector(".sidebar__close");
let sidebar = document.querySelector(".sidebar");

menu_open.addEventListener("click", function () {
  sidebar.classList.add("sidebar--opened");
});

menu_close.addEventListener("click", function () {
  sidebar.classList.remove("sidebar--opened");
});

