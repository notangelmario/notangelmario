$(window).on('load', ()=>{
    $('.loader').fadeOut()
    $('html').removeClass('disable-scroll')
    setTimeout(function () {
        window.scrollTo(0, 0);
    },0);
})