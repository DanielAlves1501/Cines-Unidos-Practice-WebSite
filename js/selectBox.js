var selectBox = $('#selectBox');
var currentCity = $('#current-city');
var citiesContainer = $('#cities');
var city = $('.city');
var myAccountBtn = $('#my-account-btn'); 
var myAccountContainer = $('#my-account-container');

selectBox.on('click', function(){
    citiesContainer.slideToggle(300);
    citiesContainer.toggleClass('cities--show');
    currentCity.toggleClass('current-city--active');
});

city.on('click', function(){
    currentCity.text($(this).text());
    citiesContainer.slideToggle(300);
    citiesContainer.toggleClass("cities--show");
    currentCity.toggleClass('current-city--active');
});

myAccountBtn.on('mouseenter', function(e){
    myAccountContainer.remove("my-account--show");
    myAccountContainer.slideDown();
});

$(window).on('click', function(e){
    var myAccountContainerElements = [
        document.querySelector('#my-account-container'),
        document.querySelector('#my-account-btn'),
        document.querySelector('#sign-in'),
        document.querySelector('#sign-up')];

    if(e.target != myAccountContainerElements[0] &&
       e.target != myAccountContainerElements[1] &&
       e.target != myAccountContainerElements[2] &&
       e.target != myAccountContainerElements[3]){

        myAccountContainer.slideUp();
    }

});