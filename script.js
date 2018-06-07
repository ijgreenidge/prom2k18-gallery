$(document).ready(function(){
    $('.materialboxed').materialbox();
    
     $('.carousel.carousel-slider').carousel({ indicators: true });
    $('.carousel.carousel-slider').carousel({ fullWidth: true });
    autoplay();

    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 4000);
    }
  });