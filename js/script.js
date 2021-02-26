// JavaScript Document
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });
     $(".headingData h1").textillate({in:{effect:"fadeInUp"},loop:!0,out:{effect:"fadeOutRight"}});  
  });