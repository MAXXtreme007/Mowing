$(document).ready(function() {
    var navHeight;
    var link = 'a[href^="#"]';
    if ($(window).width() <= 768) {
        navHeight = 90;
    }
    else {
        navHeight = 120;
    }

    $( 'a[href^="#"]:not(.modal-link)' ).click(function() {
        var target = $(this.hash);
            if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
            if (target.length == 0) target = $('html');
            $('html, body').animate({ scrollTop: target.offset().top-navHeight }, 1000);
            return false;
    });
});