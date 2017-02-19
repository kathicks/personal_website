$(window).load(function(){

  $(".portfolio-item").mouseover(function(){
        $(this).css("border-color", "#2c3e50");
        $(this).children(".portfolio-image").fadeTo(80, 0.15);
    });
    $(".portfolio-item").mouseout(function(){
        $(this).css("border-color", "#f1f1f1");
        $(this).children(".portfolio-image").fadeTo(80, 1);
    });


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

});
