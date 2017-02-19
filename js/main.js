$( document ).ready(function() {

  $(".portfolio-item").mouseover(function(){
        $(this).css("border-color", "#2c3e50");
        $(this).children(".portfolio-image").fadeTo(80, 0.15);
    });
    $(".portfolio-item").mouseout(function(){
        $(this).css("border-color", "#f1f1f1");
        $(this).children(".portfolio-image").fadeTo(80, 1);
    });

});
