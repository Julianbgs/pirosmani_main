$(document).ready(function () {

    // mobile-menu

    $(document).on('click', '#mobile-menu-button', function (event){
        event.preventDefault();
        var menu = $(".header__menu ul");

        if ($(this).hasClass("js-hide-menu")){
            $(this).removeClass("js-hide-menu");
            menu.css("display","none");
        } else {
            $(this).addClass("js-hide-menu");
            menu.css("display","block");
        };

    });


    $('.top-slider__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false
    });



    //табы  для меню

    $('.menu-body__wrapper').each(function (i) {
        if (i != 0) {
            $(this).hide(0)
        }
    });
    $(document).on('click', '.menu-position a', function (event) {
        event.preventDefault();
        var tabId = $(this).attr('href');
        $('.menu-position a').removeClass('active');
        $(this).addClass('active');
        $('.menu-body__wrapper').hide(0);
        $(tabId).fadeIn();
    });

// табы на слайдер

    $('.gallery-tab').each(function (i) {
        if (i != 0) {
            $(this).hide(0)
        }
    });
    $(document).on('click', '.gallery-buttons a', function (event) {
        event.preventDefault();
        var tabId = $(this).attr('href');
        $('.gallery-buttons a').removeClass('active');
        $(this).addClass('active');
        $('.gallery-tab').hide(0);
        $(tabId).fadeIn(function () {
            $('.top-slider__slider').slick('refresh');
        });
    });

// табы для ланчей

    $('.buisness-menu').each(function (i) {
        if (i != 0) {
            $(this).hide(0)
        }
    });
    $(document).on('click', '.buisness-tabs a', function (event) {
        event.preventDefault();
        var tabId = $(this).attr('href');
        $('.buisness-tabs a').removeClass('active');
        $(this).addClass('active');
        $('.buisness-menu').hide(0);
        $(tabId).fadeIn();
    });



});


