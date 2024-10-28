$(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
$(document).ready(function() {

    var $window = $(window);

    $(window).bind("scroll", function() {
        var top = $("html,body").scrollTop();
        if ($window.width() > 1023) {
            if (top > 100) {
                $('.yukari').show();
                //$('#foott').show();
            } else {
                $('.yukari').hide();
                //$('#foott').hide();	
            }
        }
    });

});
/* ========================================== 
scrollTop() >= 300
Should be equal the the height of the header
========================================== */
/*
$(window).scroll(function() {
    if ($(window).scrollTop() > 1) {
        $('.header').addClass('fixed-header');
        $('.ustmenu').hide(100);
        $('.headertelefon').hide();
        $('.logo').css({
            "margin": "15px",
            "width": "185px"
        });
        $('.menu .mn1').css({
            "padding-top": "30px"
        });
        $('.header').addClass('headeranima');
    } else {
        $('.ustmenu').show(100);
        $('.headertelefon').show();
        $('.header').removeClass('fixed-header');
        $('.logo').css({
            "margin-top": "28px",
            "width": "206px"
        });
        $('.menu .mn1').css({
            "padding-top": "24px"
        });
        $('.header').removeClass('headeranima');
    }
});*/

$(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
        $('.hakresimbir').show();
        $('.haksc').addClass('animate__fadeInDown');
        $('.haksd').addClass('animate__fadeInUp');
    } else {
        $('.hakresimbir').hide();
        $('.haksc').removeClass('animate__fadeInDown');
        $('.haksd').removeClass('animate__fadeInUp');
    }
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 1500) {
        $('.haksc2').addClass('animate__fadeInRight');
        $('.fancgroup').addClass('animate__fadeInUp');
        $('.haksd2').addClass('animate__fadeInLeft');
    } else {
        $('.haksc2').removeClass('animate__fadeInRight');
        $('.fancgroup').addClass('animate__fadeInUp');
        $('.haksd2').removeClass('animate__fadeInLeft');
    }
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 2000) {
        $('.fancgroup').addClass('animate__fadeInUp');
    } else {
        $('.fancgroup').removeClass('animate__fadeInUp');
    }
});


$(document).ready(function() {




    $('.hakilkresim').bind('mouseenter', function() {
        $(this).css('background-image', 'linear-gradient(90deg, rgba(227,175,64,0.9) 0%, rgba(227,175,64,0.9) 100%), url(' + $(this).attr('res') + ')');
    }).bind('mouseleave', function() {
        $(this).css('background-image', 'linear-gradient(90deg, rgba(34,46,87,0.9) 0%, rgba(34,46,87,0.9) 100%), url(' + $(this).attr('res') + ')');
    });


    $('.solmenu').bind("scroll", function() {
        var top = $('.solmenu').scrollTop() + 289;
        $('.solmenu').css('--vmar', top + 'px');

    });




    $('.kat1').click(function() {
        var tf = $(this).parent().children('.ul2:visible').length;

        $('.kat1').css('color', '#323232');
        $('.i1').removeClass('fa-chevron-down');
        $('.i1').addClass('fa-chevron-right');
        $('.ul2').hide();
        if (!tf) {
            $(this).parent().children('.ul2').show();
            $(this).children('.i1').removeClass('fa-chevron-right');
            $(this).children('.i1').addClass('fa-chevron-down');
            $(this).css('color', '#c10e0e');
        } else {
            $('.kat1').css('color', '#323232');
            $('.i1').removeClass('fa-chevron-down');
            $('.i1').addClass('fa-chevron-right');
            $('.ul2').hide();
        }


    });



    $('.i1').click(function() {
        var tf = $(this).parent().parent().children('.ul2:visible').length;
        $('.kat1').css('color', '#323232');
        $('.i1').removeClass('fa-chevron-down');
        $('.i1').addClass('fa-chevron-right');
        $('.ul2').hide();

        if (!tf) {
            $(this).parent().parent().children('.ul2').show();
            $(this).parent().children('.i1').removeClass('fa-chevron-right');
            $(this).parent().children('.i1').addClass('fa-chevron-down');
            $(this).parent().css('color', '#c10e0e');
        } else {
            $('.kat1').css('color', '#323232');
            $('.i1').removeClass('fa-chevron-down');
            $('.i1').addClass('fa-chevron-right');
            $('.ul2').hide();
        }
    });




    $(".mn1").parent("li").bind("mouseenter", function() {
            $(this).children(".mn2").show()
        }).bind("mouseleave", function() {
            $(this).children(".mn2").hide()
        }),
        $(".mn3").bind("mouseenter", function() {
            $(this).children(".mn4").show()
        }).bind("mouseleave", function() {
            $(this).children(".mn4").hide()
        }),
        $(".loc").parent("li").bind("mouseenter", function() {
            $(this).children(".sm1").show()
        }).bind("mouseleave", function() {
            $(this).children(".sm1").hide()
        });
    $('.loc').parent('li').bind('mouseenter', function() {
        $(this).children('.sm1').show();
    }).bind('mouseleave', function() {
        $(this).children('.sm1').hide();
    });


    /*  $('.slideryazi').width(($(document).width() * 251) / 1900);*/


    var mySwiper = new Swiper('#conta1', {
        zoom: true,
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        autoplay: { delay: 4000 },
        navigation: {
            nextEl: '.svcd',
            prevEl: '.svcd2',
        }
    });
    var swiper = new Swiper("#proje", {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            1920: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
        },
    });

    var mySwiper = new Swiper('#conta2', {
        zoom: true,
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        autoplay: { delay: 4000 },
        navigation: {
            nextEl: '.svcd',
            prevEl: '.svcd2',
        }
    });


    var owlh3 = $(".kategoriler2");
    owlh3.owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        margin: 30,
        autoplayTimeout: 5000,
        dots: false,
        responsive: {
            0: {
                items: 1.2
            },
            600: {
                items: 3.5
            },
            1599: {
                items: 4.7
            }
        }
    });




    var owlh3 = $(".galeri");
    owlh3.owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        margin: 20,
        autoplayTimeout: 5000,
        dots: false,
        responsive: {
            0: {
                items: 1.2
            },
            600: {
                items: 3.5
            },
            1599: {
                items: 4.7
            }
        }
    });

    var owlh3 = $(".referanslar");
    owlh3.owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        margin: 20,
        autoplayTimeout: 5000,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 6
            },
            1599: {
                items: 6
            }
        }
    });



    var owlh3 = $(".haberalani");
    owlh3.owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        margin: 20,
        autoplayTimeout: 5000,
        dots: false,
        responsive: {
            0: {
                items: 1.2
            },
            600: {
                items: 2
            },
            1599: {
                items: 2
            }
        }
    });

    var owlh3 = $(".hizmetlerimizmobil");
    owlh3.owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        margin: 20,
        autoplayTimeout: 5000,
        dots: false,
        responsive: {
            0: {
                items: 1.2
            },
            600: {
                items: 2
            },
            1599: {
                items: 2
            }
        }
    });



















});