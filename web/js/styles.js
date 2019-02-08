'use strict';

// Navbar
(function () {
    // Show or hide the navbar menu when icon is clicked
    var navbars = document.getElementsByClassName("js-navbar");
    [].forEach.call(navbars, function (item) {
        item.addEventListener('click', function (e) {
            console.log('clcik')
            e.preventDefault();
            var related_navbar = item;
            related_navbar.classList.toggle('navbar-open');
        });
    });
})();