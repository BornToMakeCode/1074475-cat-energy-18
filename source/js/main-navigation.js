(function(){

  var pageHeader = document.querySelector('.page-header');
  var menuButton = pageHeader.querySelector('.page-header__menu-toggle');
  var mainNavigation = pageHeader.querySelector('.main-navigation');

  var setDefaultState = function(){
    menuButton.classList.add('page-header__menu-toggle--closed');
    mainNavigation.classList.add('main-navigation--closed');
  }

  var toggleMenu = function(){
    if (mainNavigation.classList.contains('main-navigation--closed')) {
      mainNavigation.classList.remove('main-navigation--closed');
      menuButton.classList.remove('page-header__menu-toggle--closed');
      mainNavigation.classList.add('main-navigation--opened');
      menuButton.classList.add('page-header__menu-toggle--opened');
    } else {
      mainNavigation.classList.add('main-navigation--closed');
      menuButton.classList.add('page-header__menu-toggle--closed');
      mainNavigation.classList.remove('main-navigation--opened');
      menuButton.classList.remove('page-header__menu-toggle--opened');
    }
  }



  menuButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    toggleMenu();
  });


  setDefaultState();


})();

