let page = window.location.pathname.split('/').pop();

if (page.includes('.html')) {
    location.href = '/';
}

$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('.header-content').removeClass('transparent');
        page == '' ? $('.arrow').addClass('transparent') : false;
    } else {
        $('.header-content').addClass('transparent');
        page == '' ? $('.arrow').removeClass('transparent') : false;
    }
});
