// back to top
//========================================

var btn = $('#backTotop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


// Page loader
//========================================
// $('.js-preloader').preloadinator({
// });



// Portfolio slider js
//=====================================================
var swiper = new Swiper('.portfolio-slider', {
    cssMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
});

// Custom Popup js
//=====================================================
$(document).ready(function() {
    $("button[data-modal='ctmModal']").on('click', function() {
        $(this).addClass('btn-open');
        var getId = $(this).attr("data-target");
        $(getId + '.ctm-modal').addClass('ctm-modal-open');
        $('body').addClass('body-modal-open');
    });
    $(".ctm-modal .mdl-close, .ctm-modal .ctm-modal-overlay").on('click', function() {
        $("button[data-modal='ctmModal']").removeClass('btn-open');
        $('.ctm-modal').removeClass('ctm-modal-open');
        $('body').removeClass('body-modal-open');
    });
});

 //Our Work Load More
//========================================
var totalCount = 0;
$(document).ready(function() { 
    $('.video-filter').on('change', function () {
        var cate = $(this).attr('cate');

        if (cate == "Industry") {
            $("#technology-filter").val(".all");
        }

        if (cate == "Technology") {
            $("#category-filter").val(".all");
        }

        $('#loadMore').show();
        $('.all').hide();
        var getClassName = $(this).val();
        var getItemLength = $(getClassName).length;
        var lCount = 1;
        $(getClassName).each(function(){
            if(lCount < 5){
                $(this).addClass('active');
                $(this).show();
                lCount++;
            }
        });

        totalCount = lCount;

        // if less then 4 then hide
        console.log(getItemLength);
        if(getItemLength < 5){
            $('#loadMore').hide();
        }
    });

    $('#loadMore').on('click', function () {
        var getClassName = $('.video-filter').val();
        var getItemLength = $(getClassName).length;
        var iCount = 1;
        $(getClassName).each(function(){
            if( !$(this).hasClass('active')  && iCount < 5){
                $(this).addClass('active');
                $(this).show();
                iCount++;
            }
        });

        totalCount = totalCount + iCount;
        console.log("totalCount-----", totalCount);
        console.log("getItemLength-----", getItemLength);

        if(totalCount >= getItemLength){
            $('#loadMore').hide();
        }
    });

    loadFirst();
});

function loadFirst(){
    $('.all').hide();
    var getClassName = '.all';
    var lCount = 1;
    var getItemLength = $(getClassName).length;
    $(getClassName).each(function(){
        if(lCount < 5){
            $(this).addClass('active');
            $(this).show();
            lCount++;
        }
    });
    totalCount = lCount;
}



// function filterGrid(){

//  Our Work Dropdown Filter 
//========================================
// ONLOAD - Hide Filter Section & Sub-Menus (Precaution - Should already be set to display: none)
// $(document).ready(function() {
//     var $filterGrid = $('.js-filter-grid'),
//         $filterClearLinks = $('.js-clear-active-filter-links'),
//         $filterItem = $('.js-filter-item'),
//         requiredFilters = '',
//         optionalFilters = '',
//         filtersRegex = '';
//     // BASE UI
//     // -------  --------------------------------------------------------------
//     $('.filter-menu').hide(); // Hides Filter Section
//     $('.js-filter-items-toggle').hide(); // Hides Filter List
//     $('.filter-caret').hide(); // Hides Filter Caret Image
//     $('.sort-caret').hide(); // Hides Sort Caret Image

//     // Initialize isotope on the grid
//     $filterGrid.isotope({
//         itemSelector: '.js-filter-grid-item',
//         layoutMode: 'fitRows',
//         getSortData: {
//             date: '[data-pub-date] parseInt',
//             dateRev: '[data-pub-date] parseInt',
//             featured: function(itemElem) {
//                 return $(itemElem).data('is-featured') == '' ? 0 : 1;
//             },
//             rank: '[data-page-hits] parseInt',
//             topic: '[data-topic]'
//         },
//         sortAscending: {
//             date: false,
//             dateRev: true,
//             featured: false,
//             rank: false,
//             topic: true
//         }
//     });
//     // Filter Area Here
//     // Filter from one select box OR another but not from both at the same time
//     $('.video-filter').on('change', function() {
//         // get filter value from option value
//         var filterValue = this.value;
//         $filterGrid.isotope({ filter: filterValue });
//         console.log(filterValue);
//     });
//     $('#category-filter').change(function() {
//         $('#topic-filter option:first').prop('selected', 'selected');
//     });
//     $('#topic-filter').change(function() {
//         $('#category-filter option:first').prop('selected', 'selected');
//     });
//     $(".clear-filter").click(function() {
//         $('.video-filter').val('*').trigger('change');
//     });

// });

// }

// filterGrid();



// Theme custom form js 
//========================================

// The lines below (inside) are executed on change & keyup
$('.theme-form .inputControl .form-control').on('change keyup', function() {
    if ($(this).val().length > 0) {
        $(this).parent('.inputControl').addClass('input-value');
    } else {
        $(this).parent('.inputControl').removeClass('input-value');
    }
});

wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 200, // default
    mobile: true, // default
    live: true // default
})
wow.init();
$(window).scroll(function() {
    if ($(this).scrollTop() > 80) {
        $('#header').addClass('header-wrap-scroll');
    } else {
        $('#header').removeClass('header-wrap-scroll');

    }
});

// Mobile Menu js
//========================================

jQuery(document).ready(function() {

    jQuery('.menu-toggle').on('click', function() {
        jQuery(this).toggleClass('menu-toggle-active');
        jQuery("#header.header-wrap").toggleClass('header-active');
        jQuery("#header .main-navbar").toggleClass('main-navbar-active');
        jQuery("body").toggleClass('body-menu-active');
    });

    // Mobile Menu height
    //========================================
    var menu_height = jQuery(window).height();
    jQuery(".main-menu-inner").css("max-height", menu_height);

});

// Mobile Menu height
//========================================
jQuery(window).resize(function() {
    var height = jQuery(window).height();
    jQuery(".main-menu-inner").css("max-height", height);
});

// Footer height
//========================================
    // var footer_height = jQuery("footer#footer").height();
    // if (jQuery('body').find('footer#footer').length > 0) {
    //     jQuery("body").css("padding-bottom", footer_height);
    // }
// End 
//========================================

$("#typed").typed({
    stringsElement: $('#typed-strings'),
    typeSpeed: 100,
    backDelay: 500,
    loop: true,
    contentType: 'html', // or text
    // defaults to false for infinite loop
    loopCount: false
});