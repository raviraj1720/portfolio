const homeContainer = document.querySelector('.home-container')

$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
       var target = $(this.getAttribute('href'));
       if (target.length) {
          event.preventDefault();
          $('html, body').stop().animate({
             scrollTop: target.offset().top
          }, 1000);
       }
    });
 });

const tl = gsap.timeline({
    defaults: {
        duration: 0.75,
        ease: "power3.out"
    }
})

tl.fromTo('.home-title', {y: -1000, opacity: 0}, {y: 0, opacity: 1, duration: 1})
tl.fromTo('.home-subtitle', {opacity: 0}, {opacity: 1, duration: 1, delay: 0.25})