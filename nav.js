$(window).on('scroll', function() {
    if($(window).scrollTop()) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }
});

$(document).ready(function() {
    var headerHeight = $('nav').outerHeight();

    $('.slide-section').click(function(e) {
        var linkHref = $(this).attr('href');
   
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight
        }, 700);

        e.preventDefault();
    });
});

