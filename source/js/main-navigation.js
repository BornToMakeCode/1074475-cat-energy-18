(function(){

  var pageHeader = document.querySelector(".page-header");
  var menuButton = pageHeader.querySelector(".page-header__menu-toggle");
  var mainNavigation = pageHeader.querySelector(".main-navigation");

  mainNavigation.classList.add("main-navigation--closed");

  menuButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    mainNavigation.classList.toggle("main-navigation--closed");
});

})();

