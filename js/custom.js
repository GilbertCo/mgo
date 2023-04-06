/*============================================================

                            SERVICES

=============================================================*/
$(document).ready(function () {
    // animate on scroll
    new WOW().init();
});
/*============================================================

                            INFLUENCERS

=============================================================*/
$(function () {
    $("#Influencers").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});

$(".img-class").click(function () {
    $('element_to_pop_up').bPopup();
});

/*============================================================

                            TEAM

=============================================================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            // Breakpoin from 0 up
            0: {
                items: 1
            },
            // Breakpoin from 480 up
            480: {
                items: 2
            },
            // Breakpoin from 786 up
            768: {
                items: 3
            }
        }
    });
});

/*============================================================

                     TESTIMONIALS       

=============================================================*/
$(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});
/*============================================================

                        STATS

=============================================================*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000,
    })
});
/*============================================================

                        CLIETS

=============================================================*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            // Breakpoin from 0 up
            0: {
                items: 1
            },
            // Breakpoin from 480 up
            480: {
                items: 3
            },
            // Breakpoin from 786 up
            768: {
                items: 5
            },
            // Breakpoin from 992 up
            992: {
                items: 6
            }
        }
    });

});
/*============================================================

                            NAVIGATION

=============================================================*/
$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            //hide nav
            $("nav").removeClass("gilbert-codes-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            //show nav
            $("nav").addClass("gilbert-codes-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});


//smooth scroll
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        // get/return id lihe #about, #work, #team and etc
        var section = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section).offset().top - 64
        }, 1300, "easeInOutExpo");
    });
});

// header breakpoint
$('#monitor').html($(window).width());

$(window).resize(function () {
    var vieportWidth = $(window).
        $('monitor').html(viewportWidth);
});


// Close mobile menu on click

$(function () {
    $(".navbar-collapse ul li a").on("click", function () {
        $(".navbar-toggle").click();
    });
});














