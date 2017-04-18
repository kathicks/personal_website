// Start Bootstrap - Freelancer v3.3.7+1 (http://startbootstrap.com/template-overviews/freelancer)
// Copyright 2013-2016 Start Bootstrap
// Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)


! function(o) {
    "use strict";
    o(".page-scroll a").bind("click", function(t) {
        var l = o(this);
        o("html, body").stop().animate({
            scrollTop: o(l.attr("href")).offset().top - 50
        }, 1250, "easeInOutExpo"), t.preventDefault()
    }), o("body").scrollspy({
        target: ".navbar-fixed-top",
        offset: 51
    }), o(".navbar-collapse ul li a").click(function() {
        o(".navbar-toggle:visible").click()
    }), o("#mainNav").affix({
        offset: {
            top: 100
        }
    }), o(function() {
        o("body").on("input propertychange", ".floating-label-form-group", function(t) {
            o(this).toggleClass("floating-label-form-group-with-value", !!o(t.target).val())
        }).on("focus", ".floating-label-form-group", function() {
            o(this).addClass("floating-label-form-group-with-focus")
        }).on("blur", ".floating-label-form-group", function() {
            o(this).removeClass("floating-label-form-group-with-focus")
        })
    })
}(jQuery);
