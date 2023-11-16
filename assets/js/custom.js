$(document).ready(function () {
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#btn-top').fadeIn();
        } else {
            $('#btn-top').fadeOut();
        }
    });

    $('#btn-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});