
(function() {

  const menuOpen = document.querySelector('.sidebar__hamburger'),
        menuClose = document.querySelector('.sidebar__close'),
        sidebar = document.querySelector('.sidebar');

  menuOpen.addEventListener('click', function () {
    sidebar.classList.add('sidebar--opened');
  });

  menuClose.addEventListener('click', function () {
    sidebar.classList.remove('sidebar--opened');
  });

})();
