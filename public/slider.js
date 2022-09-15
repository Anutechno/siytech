// Params
var sliderSelector = '.loading',
    options = {
        init: false,
        loop: true,
        speed: 800,
        slidesPerView: 2, // or 'auto'
        // spaceBetween: 10,
        centeredSlides: true,
        effect: 'coverflow', // 'cube', 'fade', 'coverflow',
        coverflowEffect: {
            rotate: 50, // Slide rotate in degrees
            stretch: 0, // Stretch space between slides (in px)
            depth: 100, // Depth offset in px (slides translate in Z axis)
            modifier: 1, // Effect multipler
            slideShadows: true, // Enables slides shadows
        },
        grabCursor: true,
        parallax: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1023: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            767: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        },
        // Events
        on: {
            imagesReady: function() {
                this.el.classList.remove('loading');
            }
        }
    };
var mySwiper = new Swiper(sliderSelector, options);
// Initialize slider
mySwiper.init();


var swiper1 = new Swiper('.newsExploring-slider', {
    spaceBetween: 280,
    parallax: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiper2 = new Swiper('.swiper2', {
    spaceBetween: 280,
    parallax: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


var swv = new Swiper(".swv ", {
    direction: "vertical",
    mousewheelControl: true,
    speed: 100,
    parallax: true,
    spaceBetween: 100,
    mousewheelReleaseOnEdges: true,
    slidesPerView: 1,
    freeMode: false,
    autoplay: true,
    effect: "fade",
    pagination: {
        el: ".swiper-pagV",
        clickable: true,
    },
    freeModeSticky: true,
});
// $("body").keydown(function(e) {
//     if(e.keyCode == 38) { // top
//     swv.slidePrev();
//     }
//     else if(e.keyCode == 40) { // bottom
//     swv.slideNext();
//     }
// });