$(document).ready(function() {
  $('.modal_open').click( function(event){
    event.preventDefault();
    $('.modal_overlay').fadeIn(400,
      function(){
        $('.modal_box') 
          .css('display', 'block')
          .animate({opacity: 1, top: '10%'}, 200);
    });
  });
  $('.modal_close, .modal_overlay').click( function(){
    $('.modal_box')
      .animate({opacity: 0, top: '10%'}, 200,
        function(){
          $(this).css('display', 'none');
          $('.modal_overlay').fadeOut(400);
        }
      );
  });
});

$(document).ready(function() {
  $('.modal_open_review').click( function(event){
    event.preventDefault();
    $('.modal_overlay').fadeIn(400,
      function(){
        $('.modal_box') 
          .css('display', 'block')
          .animate({opacity: 1, top: '10%'}, 200);
    });
  });
  $('.modal_close, .modal_overlay').click( function(){
    $('.modal_box')
      .animate({opacity: 0, top: '10%'}, 200,
        function(){
          $(this).css('display', 'none');
          $('.modal_overlay').fadeOut(400);
        }
      );
  });
});

$(document).ready(function() {
  $(".gifts_carousel").owlCarousel({
    items: 3,
    autoplay: true,
    margin: 40,
    autoplayTimeout: 7000,
    autoplayHoverPause: true,
    loop: true,
    nav: true,
    dots: false,
    lazyLoad: true,
    mouseDrag: false
  });


  $(".reviews_carousel").owlCarousel({
    items: 2,
    stagePadding: 120,
    loop: true,
    autoplay: true,
    margin: 40,
    autoplayTimeout: 7000,
    autoplayHoverPause: true,
    loop: true,
    nav: false,
    dots: true,
    lazyLoad: true,
    mouseDrag: false
  });
});