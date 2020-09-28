"use strict";

jQuery(document).ready(function ($) {
  var scroll_start = 0;
  var startchange = $(".start-change");
  var offset = startchange.offset();

  if (startchange.length && window.matchMedia('(min-width: 767px)').matches) {
    $(document).scroll(function () {
      scroll_start = $(this).scrollTop();

      if (scroll_start > offset.top) {
        $("header").css({
          'background-color': 'rgba(25,25,25,1)'
        });
        $('#logo-michaelblaizot').css({
          'width': '3.815rem'
        });
        $(".label-menu").css('top', '1.953rem');
      } else {
        $('header').css({
          'background-color': 'rgba(0,0,0,0)',
          'transition': 'all 0.25s ease-in'
        });
        $('#logo-michaelblaizot').css({
          'width': '4.75rem',
          'transition': 'all 0.25s ease-in',
          'display': 'block'
        });
        $('#logo-michaelblaizot .st0').css({
          'fill': '#FFFFFF'
        });
        $('#logo-michaelblaizot .st1').css({
          'fill': '#333333'
        });
        $(".label-menu").css({
          'top': '1.953rem',
          'transition': 'all 0.25s ease-in'
        });
      }
    });
  } else if (startchange.length && window.matchMedia('(max-width: 767px)').matches) {
    $(document).scroll(function () {
      scroll_start = $(this).scrollTop();

      if (scroll_start > offset.top) {
        $("header").css({
          'background-color': 'rgba(25,25,25,1)'
        });
        $('#logo-michaelblaizot').css({
          'width': '3.052rem'
        });
        $(".label-menu").css('top', '1.953rem');
      } else {
        $('header').css({
          'background-color': 'rgba(0,0,0,0)',
          'transition': 'all 0.25s ease-in'
        });
        $(".label-menu").css('top', '1.953rem');
        $('#logo-michaelblaizot').css({
          'width': '3.052rem',
          'transition': 'all 0.25s ease-in'
        });
        $('#logo-michaelblaizot .st0').css({
          'fill': '#FFFFFF'
        });
        $('#logo-michaelblaizot .st1').css({
          'fill': '#333333'
        });
      }
    });
  } else {
    $("header").css('background-color', 'rgba(25,25,25,0)');
    $('#logo-michaelblaizot').css({
      'width': '3.052rem',
      'display': 'block'
    });
    $(".label-menu").css('top', '3.953rem');
  } // init AOS for front animation : fade-up, fade-down.... 


  AOS.init({
    easing: 'ease-out-back',
    duration: 1000,
    disable: window.innerWidth < 1024
  }); // init the loading bar

  $(window).load(function () {
    $('#preloader').fadeOut('slow', function () {
      $(this).remove();
    });
    NProgress.start();
    NProgress.done();
  });
  /* Every time the window is scrolled ... */

  $(window).scroll(function () {
    /* Check the location of each desired element */
    $('.hideme').each(function (i) {
      var bottom_of_object = $(this).offset().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */

      if (bottom_of_window > bottom_of_object) {
        $(this).animate({
          'opacity': '1'
        }, 500);
      }
    });
  });
});

(function () {
  // Back to Top 
  var backTop = document.getElementsByClassName('js-cd-top')[0],
      // browser window scroll (in pixels) after which the "back to top" link is shown
  offset = 300,
      //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
  offsetOpacity = 1200,
      scrollDuration = 700;
  scrolling = false;

  if (backTop) {
    //update back to top visibility on scrolling
    window.addEventListener("scroll", function (event) {
      if (!scrolling) {
        scrolling = true;
        !window.requestAnimationFrame ? setTimeout(checkBackToTop, 250) : window.requestAnimationFrame(checkBackToTop);
      }
    }); //smooth scroll to top

    backTop.addEventListener('click', function (event) {
      event.preventDefault();
      !window.requestAnimationFrame ? window.scrollTo(0, 0) : scrollTop(scrollDuration);
    });
  }

  function checkBackToTop() {
    var windowTop = window.scrollY || document.documentElement.scrollTop;
    windowTop > offset ? addClass(backTop, 'cd-top--show') : removeClass(backTop, 'cd-top--show', 'cd-top--fade-out');
    windowTop > offsetOpacity && addClass(backTop, 'cd-top--fade-out');
    scrolling = false;
  }

  function scrollTop(duration) {
    var start = window.scrollY || document.documentElement.scrollTop,
        currentTime = null;

    var animateScroll = function animateScroll(timestamp) {
      if (!currentTime) currentTime = timestamp;
      var progress = timestamp - currentTime;
      var val = Math.max(Math.easeInOutQuad(progress, start, -start, duration), 0);
      window.scrollTo(0, val);

      if (progress < duration) {
        window.requestAnimationFrame(animateScroll);
      }
    };

    window.requestAnimationFrame(animateScroll);
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }; //class manipulations - needed if classList is not supported


  function hasClass(el, className) {
    if (el.classList) return el.classList.contains(className);else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
  }

  function addClass(el, className) {
    var classList = className.split(' ');
    if (el.classList) el.classList.add(classList[0]);else if (!hasClass(el, classList[0])) el.className += " " + classList[0];
    if (classList.length > 1) addClass(el, classList.slice(1).join(' '));
  }

  function removeClass(el, className) {
    var classList = className.split(' ');
    if (el.classList) el.classList.remove(classList[0]);else if (hasClass(el, classList[0])) {
      var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
      el.className = el.className.replace(reg, ' ');
    }
    if (classList.length > 1) removeClass(el, classList.slice(1).join(' '));
  }
})();