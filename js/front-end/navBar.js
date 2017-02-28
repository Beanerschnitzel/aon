//nav bar toggles
jQuery(document).ready(function($) {
    $('.navBar_menuToggle').click(function() {
        $(this).toggleClass('is-active');
        $('body').removeClass('search-open');
        $('.navBar_searchToggle').removeClass('is-active');
        $('body').toggleClass('nav-open');
    });

    $('.navBar_searchToggle').click(function() {
        $(this).toggleClass('is-active');
        $('body').removeClass('nav-open');
        $('.navBar_menuToggle').removeClass('is-active');
        $('body').toggleClass('search-open');
         $('#searchMain').focus();
    });

    $('.navBar_overlay').click(function() {
        $('body').removeClass('nav-open');
        $('body').removeClass('search-open');
        $('.navBar_menuToggle').removeClass('is-active');
        $('.navBar_searchToggle').removeClass('is-active');
    });

});
