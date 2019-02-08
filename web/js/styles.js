'use strict';

// Navbar
(function () {
    // Show or hide the navbar menu when icon is clicked
    var navbars = document.getElementsByClassName("js-navbar");

    [].forEach.call(navbars, function (navbar) {
        var menuButtons = navbar.getElementsByClassName("js-navbar-toggler");

        [].forEach.call(menuButtons, function (menuButton) {
            menuButton.addEventListener('click', function (e) {
                //console.log('click: toggle navbar menu')
                e.preventDefault();
                var related_navbar = navbar;
                related_navbar.classList.toggle('navbar-open');
            });

        });
    });
})();