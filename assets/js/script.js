
$(function () {

    var header = $('#header'),
        introH = $('#intro').innerHeight(),
        scrolloffset = $(window).scrollTop();


    /*Fixed Header*/
    checkScroll(scrolloffset);

    $(window).on("scroll", function () {

        scrolloffset = $(this).scrollTop();

        checkScroll(scrolloffset);

    });

    function checkScroll(scrolloffset) {
        if (scrolloffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // Slick слайдер с адаптивностью
    $('.card__slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    });
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockoffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockoffset
        }, 500);
    });

    /*Menu nav toggle*/
    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    var b = document.getElementById('overlay');
    function swa() {
        b.style.visibility = 'visible';
        b.style.opacity = '1';
        b.style.transition = 'all 0.7s ease-out 0s';
    }
    function swa2() {
        b.style.visibility = 'hidden';
        b.style.opacity = '0';
    }
});