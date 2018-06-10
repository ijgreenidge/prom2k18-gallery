$(document).ready(function(){
    $('.materialboxed').materialbox();
    
     $('.slider').slider();
     
     $(".display").click(function() {
         $(".white").css("display","block");
         $(".shown").css("display","none");
         $(".hidden").css("display","block");
     });
     
      $(".hidden").click(function() {
         $(".white").css("display","none");
         $(".shown").css("display","block");
         $(".hidden").css("display","none");
     });
     
  });