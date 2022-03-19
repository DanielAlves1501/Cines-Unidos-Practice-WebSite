var carrousel = $('#carrousel');
var before = $('#before');
var next = $('#next');
var slider = $('#slider');
var sliderImages = $('.slider__movie');

$('#slider .slider__img:last').insertBefore('#slider .slider__img:first');

slider.css({marginLeft:'-100%'});

function moveForward(){
    slider.animate({
        marginLeft: '-200%'
    },700, function(){
        $('#slider .slider__img:first').insertAfter('#slider .slider__img:last');
        slider.css({marginLeft:'-100%'});
    });
}

function moveBackward(){
    slider.animate({
        marginLeft: '0'
    },700, function(){
        $('#slider .slider__img:last').insertBefore('#slider .slider__img:first');
        slider.css({marginLeft:'-100%'});
    });
}

function autoplay(){
    interval = setInterval(function(){
        moveForward();
    }, 3000);
};

next.on('click', function(){
    moveForward();
})

before.on('click', function(){
    moveBackward();
})

// autoplay();


