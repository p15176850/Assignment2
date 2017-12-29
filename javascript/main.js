/*
  This block of code below makes the navigation bar
  turns grey when you scroll down.
*/
  $(document).ready(function(){
    var scroll_start = 0;
    var navigation = $('.nav');
    var offset = navigation.offset();
    if (navigation.length){
  $(document).scroll(function() {
    scroll_start = $(this).scrollTop();
    if(scroll_start > offset.top) {
    $(".nav").css({
        "background-color":"white",
        "height":"50px",
        "border-bottom":"1px solid #212121"
    });
           $(".nav-link").css('color', '#FF8E00');
           $(".nav-item").css('line-height', '50px');
           $(".nav-brand").css('line-height', '50px');
       } else {
          $(".nav").css({
            "background-color":"transparent",
             "height":"70px",
             "border":"1px solid white"
          });
          $(".nav-link").css/css('color', 'white');
          $(".nav-item").css('line-height', '70px');
          $(".nav-brand").css('line-height', '70px');
       }
   });
};
});
// SLideshow
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
};

$('.menu-icon').click(function(){
      $('.nav-content').slideDown('slow');
});
$('.close-nav').click(function(){
   $('.nav-content').slideUp('slow');
})
// ANIMATION
window.sr = ScrollReveal();

sr.reveal('.icon-container', {
   duration: 2500,
   origin: 'bottom'
});

sr.reveal('.sr1', {
   duration: 2500,
   origin: 'bottom'
});

sr.reveal('.sr2', {
   duration: 2500,
   origin: 'left'
});

sr.reveal('.sr3', {
   duration: 2500,
   origin: 'bottom'
});

sr.reveal('.sr4', {
   duration: 2500,
   origin: 'left'
});

sr.reveal('.sr5', {
   duration: 2500,
   origin: 'bottom'
});

sr.reveal('.sr6', {
   duration: 2500,
   origin: 'left'
});

sr.reveal('.sr7', {
   duration: 2500,
   origin: 'bottom'
});

sr.reveal('.slideshow-container', {
   duration: 2500,
   origin: 'bottom'
});

sr.reveal('.map_container', {
   duration: 2500,
   origin: 'bottom'
});



       function initMap() { 
       var uluru = {lat: 52.630155, lng: -1.139180}; 
	   var uluru = {lat: 52.630155, lng: -1.139180}; 
        var map = new google.maps.Map(document.getElementById('map'), { 
         zoom: 15, 
          center: uluru 
       }); 
         var marker = new google.maps.Marker({ 
          position: uluru, 
           map: map 
         }); 
       } 

