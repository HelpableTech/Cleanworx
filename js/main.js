(function ($) {
    "use strict";
    
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


   
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    $(".testimonials-carousel2").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

$(".gallery-container1 .slider").on("input change", (e)=>{
    const sliderPos = e.target.value;
    
    $('.gallery-container1 .foreground-img').css('width', `${sliderPos}%`)
  });

  $(".gallery-container1 .slider").on("input change", (e)=>{
    const sliderPos = e.target.value;

    $('.gallery-container1 .foreground-img').css('width', `${sliderPos}%`)
    // Update the position of the slider button
    $('.gallery-container1 .slider-button').css('left', `calc(${sliderPos}% - 18px)`)
  });

  $(".gallery-container2 .slider").on("input change", (e)=>{
    const sliderPos = e.target.value;
    
    $('.gallery-container2 .foreground-img').css('width', `${sliderPos}%`)
  });

  $(".gallery-container2 .slider").on("input change", (e)=>{
    const sliderPos = e.target.value;
    
    $('.gallery-container2 .foreground-img').css('width', `${sliderPos}%`)
  
    $('.gallery-container2 .slider-button').css('left', `calc(${sliderPos}% - 18px)`)
  });

  $(".gallery-container3 .slider").on("input change", (e)=>{
    const sliderPos = e.target.value;
    
    $('.gallery-container3 .foreground-img').css('width', `${sliderPos}%`)
  });

  $(".gallery-container3 .slider").on("input change", (e)=>{
    const sliderPos = e.target.value;
    
    $('.gallery-container3 .foreground-img').css('width', `${sliderPos}%`)
   
    $('.gallery-container3 .slider-button').css('left', `calc(${sliderPos}% - 18px)`)
  });
