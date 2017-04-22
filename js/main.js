$(window).load(function(){

    // PORTFOLIO TITLE ON HOVER
    $(".portfolio-item").mouseover(function(){
        $(this).css("border-color", "#2c3e50");
        $(this).children(".portfolio-image").fadeTo(80, 0.15);
    });

    $(".portfolio-item").mouseout(function(){
        $(this).css("border-color", "#f1f1f1");
        $(this).children(".portfolio-image").fadeTo(80, 1);
    });

    // PORTFOLIO FILTERING
    var $container = $('.portfolioContainer');
    console.log($container);
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.portfolioFilter a').click(function(){
        console.log($('.portfolioFilter a'));
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });

    // ANIMATED TYPING ON SUBTITLE
		$(".animated").typed({
			strings: ["Junior software developer ^1000 and ex-cartographer"],
			typeSpeed: 50,
      showCursor: false
		});

    // RANDOM BACKGROUND COLOUR FOR PORTFOLIO ITEMS
    var colours = [
      '#D6606A',
      '#B48EE8',
      '#A9E1FF',
      '#8EE8A2',
      '#FFFB9C',
    ]

    function getRand(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    $('.portfolio-item').css('background-color', colours[getRand(0, 5)]);

});
