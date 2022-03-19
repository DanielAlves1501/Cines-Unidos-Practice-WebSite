var sliderMenuContainer = $('#slider-menu-container');
var sliderMenuBtn = $('#top-nav__menu');
var topNav = $('#top-nav');
var bottomNav = $('#bottom-nav');

sliderMenuBtn.on('click', function(){
    sliderMenuContainer.slideToggle(300);
    sliderMenuContainer.css({display:'flex'});
});

$(window).on('scroll', function(){
    if($(window).scrollTop() > 0){
        topNav.css({top: '-35px'});
    } else{
        topNav.css({top: '0'});
    }
});
    
if($(window).width() <= 800 && $(window).width() >=  550){
    $('.main-movies .title').css({fontSize:'16px'});
}
if($(window).width() < 550){
    $('.main-movies .title').css({fontSize:'14px'});
    $('.main-movies-top-left__premieres .title').text('ESTRENOS');
    $('.bottom-nav__city h2, i').css({fontSize: '18px'});
}
