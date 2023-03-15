$(function () {
   'use strict';


   $(window).scroll(function () {

      // To Change color Of Navbar when scroll down
      var navbar = $('.navbar');

      if ($(window).scrollTop() >= navbar.height()) {
         navbar.addClass('scrolled');
      } else {
         navbar.removeClass('scrolled');
      }

   });

   // Deal with Tabs

   $('.tab-switch li').click(function () {

      // Add Selected Class To Active Link
      $(this).addClass('selected').siblings().removeClass('selected');

      // Hide All Divs
      $('.tabs-section .tabs-content > div').hide();

      // Show Div Connected With This 
      $($(this).data('class')).show();


   });

   // Scroll To Top Button
   var scrollButton = $("#scroll-top");

   $(window).scroll(function () {

      if ($(this).scrollTop() >= 700) {
         scrollButton.show();
      } else {
         scrollButton.hide();
      }
   });

   // Click On Button To Scroll Top
   scrollButton.click(function () {
      $("html,body").animate({
         scrollTop: 0
      }, 600);
   });


});

// Loading Screen
$(window).load(function () {

   // hide "spinner" Div after 2 second

   $(".loading .spinner").fadeOut(2000, function () {

      // here will hide parent of spinner ("loading")after 2 second and remove it  form Browser inspect 

      $(this).parent().fadeOut(2000,
         function () {
            $(this).remove();
         });

   });


});
// Adding Nice Scroll For Page
$("html").niceScroll();