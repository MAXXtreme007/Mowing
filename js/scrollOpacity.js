var nav = $('.navbar-inverse');
var range = 200;

$(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    var offset = nav.offset().top;
    var height = nav.outerHeight();
    offset = offset + height / 2;
    var calc = (1 - (scrollTop - offset + range) / range) + 100px;

    nav.css({ 'opacity': calc });

    if ( calc > '1' ) {
        nav.css({ 'opacity': 1 });
    } else if ( calc < '0' ) {
        nav.css({ 'opacity': 0 });
    }
});