jQuery(document).ready(function($) {

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom - 100;
    };

    function animation() {
        $('.animation').each(function() {
            if ($(this).isInViewport()) {
                $(this).addClass('animation-on');
            } else {
                $(this).removeClass('animation-on');
            }
        });
    }

    animation();

    $(window).scroll(function() {
        animation();
    });

    $("a[href^='#']").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 500);
    });

    /* timer */
    function update() {
        var Now = new Date(),
            Finish = new Date();
        Finish.setHours(23);
        Finish.setMinutes(59);
        Finish.setSeconds(59);
        if (Now.getHours() === 23 && Now.getMinutes() === 59 && Now.getSeconds === 59) {
            Finish.setDate(Finish.getDate() + 1);
        }
        var sec = Math.floor((Finish.getTime() - Now.getTime()) / 1000);
        var hrs = Math.floor(sec / 3600);
        sec -= hrs * 3600;
        var min = Math.floor(sec / 60);
        sec -= min * 60;
        $(".daySH").html('00' + '<span>dias</span>');
        $(".hoursSH").html(pad(hrs) + '<span>horas</span>');
        $(".minutesSH").html(pad(min) + '<span>minutos</span>');
        $(".secondsSH").html(pad(sec) + '<span>segundos</span>');
        setTimeout(update, 200);
    }

    function pad(s) {
        s = ("00" + s).substr(-2);
        return "<b>" + s[0] + "</b><b>" + s[1] + "</b>";
    }
    update();


    $('.reviews-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        items: 1,
        responsive: {
            0: {
                dots: true,
                nav: false,
                autoHeight: true
            },
            768: {
                dots: false,
                nav: true,
                autoHeight: false
            }
        }
    });

    $('.risk-item-open').click(function() {
        $(this).toggleClass('active').prev().slideToggle();
    });


});