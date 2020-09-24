// Typed.js sur la première phrase du site "Enfin un bar où l'on ....."
$( document ).ready(function() {
	 // Change la couleur du header au scroll 
    var scroll_start = 0;
    var startchange = $(".start-change");
    var offset = startchange.offset();

    if (startchange.length && window.matchMedia('(min-width: 767px)').matches ) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top ){
                $(".header-head").css('background-color', 'rgba(25,25,25,1)');
                $("#logo-merlesMoqueurs").css({
                	'width': '9rem',
                	'transition': 'all 0.25s ease-in',
                });
            } else {
                $('.header-head').css({
                    'background-color': 'rgba(0,0,0,0)',
                    'transition': 'all 0.25s ease-in',
                });

                $("#logo-merlesMoqueurs").css({
                	'width': '11rem',
                	'transition': 'all 0.25s ease-in',
                });
            }
        });

    } else {
        $(".header-head").css('background-color', 'rgba(25,25,25,0)');
    }


/*  $('.typed-element').typed({
    strings: ["Mange bien...", "Bois bien...^1000", "Rigole bien...", "S'enjaille..."],
    typeSpeed: 30,
    callback: function() {
      $('.element').html('<p>' + $('.element').html() + '</p>')
    }
  });*/

  var typed = new Typed('.typed-element', {
  strings: ["Mange bien...", "Bois bien...^1000", "Rigole bien...", "S'enjaille..."],
  typeSpeed: 30,
   callback: function() {
      $('.element').html('<p>' + $('.element').html() + '</p>')
    }
});

  // init AOS for front animation : fade-up, fade-down.... 
    AOS.init({
        easing: 'ease-out-back',
        duration: 1000,
        //disable: window.innerWidth < 1024
    });


});