/*! Main */
jQuery(document).ready(function($) {

    // Fixa navbar ao ultrapassa-lo
    var navbar = $('#navbar-main'),
    		distance = navbar.offset().top,
        $window = $(window);

    $window.scroll(function() {

        if ($window.scrollTop() >= distance) {
            navbar.removeClass('navbar-custom-top').removeClass('navbar-fixed-top').addClass('navbar-custom-top').addClass('navbar-fixed-top');
          	$("body").css("padding-top", "70px");
        } else {
            navbar.removeClass('navbar-custom-top').removeClass('navbar-fixed-top');
            $("body").css("padding-top", "0px");
        }
    });
});
