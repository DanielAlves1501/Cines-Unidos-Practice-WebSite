var currentImage = $('#advertising__img--current');
var nextImage = $('#advertising__img--next');

function toggleClass(){
    nextImage.toggleClass('advertising__img--show');
}

function autoplay(){
    interval = setInterval(function(){
        toggleClass();
    }, 7000);
};

autoplay();

// Links PreventDefault

var links = $('a');

links.on('click', function(e){
    e.preventDefault();
});

// Go Up Arrow

$(window).on('scroll', function(){
    if($(window).scrollTop() == 0 ){
        $('#go-up-arrow').css({opacity: '0'});
    } else{
        $('#go-up-arrow').css({opacity: '1'});
    }
});

$('#go-up-arrow').on('click', function(){
    $('html, body').animate({scrollTop: 0});
});

