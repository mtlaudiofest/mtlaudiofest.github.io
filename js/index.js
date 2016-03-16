// /*! Main */
// jQuery(document).ready(function($) {
//
//     // Fixa navbar ao ultrapassa-lo
//     var navbar = $('#navbar-main'),
//     		distance = navbar.offset().top,
//         $window = $(window);
//
//     $window.scroll(function() {
//
//         if ($window.scrollTop() >= distance) {
//             navbar.removeClass('navbar-custom-top').removeClass('navbar-fixed-top').addClass('navbar-custom-top').addClass('navbar-fixed-top');
//           	$("body").css("padding-top", "70px");
//         } else {
//             navbar.removeClass('navbar-custom-top').removeClass('navbar-fixed-top');
//             $("body").css("padding-top", "0px");
//         }
//     });
//
//     $('#map').addClass('scrolloff');                // set the mouse events to none when doc is ready
//
//     $('#overlay').on("mouseup",function(){          // lock it when mouse up
//       $('#map').addClass('scrolloff');
//       //somehow the mouseup event doesn't get call...
//     });
//     $('#overlay').on("mousedown",function(){        // when mouse down, set the mouse events free
//       $('#map').removeClass('scrolloff');
//     });
//
//     $("#map").mouseleave(function () {              // becuase the mouse up doesn't work...
//       $('#map').addClass('scrolloff');            // set the pointer events to none when mouse leaves the map area
//                                                   // or you can do it on some other event
//     });
//
// });
