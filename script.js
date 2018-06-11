$(document).ready(function(){
    $('.materialboxed').materialbox();
    
     $('.slider').slider();
     
     $(".display").click(function() {
         $(".white").fadeIn("slow");
         $(".shown").css("display","none");
         $(".hidden").css("display","block");
     });
     
      $(".hidden").click(function() {
         $(".white").fadeOut("slow");
         $(".shown").css("display","block");
         $(".hidden").css("display","none");
     });
     
  });