// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require wow
//= require particles.js
//= require particulas.js
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(document).ready(function(){
  // if(location.href == "http://www.espinozabrand.com/" || location.href == "http://espinozabrand.com/")
  // {
  //   $('.navbar-brand').addClass('animated flipInX')
  // }

  animateHover('.navbar-brand', 'flipInX');
  animateHover('.fa-twitter', 'hinge');
  animateHover('.fa-facebook', 'hinge');
  animateHover('.fa-google-plus', 'hinge');
  animateHover('.fa-linkedin-square', 'hinge');
  animateHover('.fa-github', 'hinge');

  //Animate on hover Function
  function animateHover(element, animation){
    element = $(element);
    element.hover(
      function() {
        element.addClass('animated ' + animation);
      },
      function(){
        //wait for animation to finish before removing classes
        window.setTimeout( function(){
          element.removeClass('animated ' + animation);
        }, 1600);
      }
    );
  };

  //for WOW.js
  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();

})


