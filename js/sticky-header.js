$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $(".start-change");
    var offset = startchange.offset();

    if (startchange.length && window.matchMedia('(min-width: 767px)').matches ) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top ){
                $("header").css('background-color', 'rgba(25,25,25,1)');
                $('#logo-michaelblaizot').css('width', '3.815rem');
                $(".label-menu").css('top', '1.953rem');
            } else {
                $('header').css({
                    'background-color': 'rgba(0,0,0,0)',
                    'transition': 'all 0.25s ease-in',
                });

                $('.header--bg_black').css('background-color', 'rgba(25,25,25,1)');

                $('#logo-michaelblaizot').css({
                    'width': '4.75rem', 
                    'transition': 'all 0.25s ease-in',
                });

                $(".label-menu").css({
                    'top': '2.441rem', 
                    'transition': 'all 0.25s ease-in',
                });
            }
        });

    } else if (startchange.length && window.matchMedia('(max-width: 767px)').matches){
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top ){
                $("header").css({
                    'background-color': 'rgba(25,25,25,1)',
                });
                $('#logo-michaelblaizot').css('width', '3.052rem');
                $(".label-menu").css('top', '1.953rem');
            } else {
                $('header').css({
                    'background-color': 'rgba(0,0,0,0)',
                    'transition': 'all 0.25s ease-in',
                });

                $('.header--bg_black').css({
                    'background-color': 'rgba(25,25,25,1)',
                    'transition': 'all 0.25s ease-in',
                });
                $(".label-menu").css('top', '1.953rem');
                $('#logo-michaelblaizot').css({
                    'width': '3.052rem',
                    'transition': 'all 0.25s ease-in',
                });
            }
        });
    } else {
        $("header").css('background-color', 'rgba(25,25,25,0)');
        $('#logo-michaelblaizot').css('width', '3.052rem');
        $(".label-menu").css('top', '1.953rem');
    }