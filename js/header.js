$(document).ready(function() {
    $(window).scroll(function() {
        if( $(this).scrollTop() > 0 ){
            $('header').addClass('header1');
        } else {
            $('header').removeClass('header1');
        }
    })
})