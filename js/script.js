/*--------------------------------------------------------------
 Custom js
 --------------------------------------------------------------*/
var snapper = new Snap({
    element: document.getElementById('page'),
    dragger: document.getElementsByClassName('page'),
    disable: 'right',
    slideIntent: 10,
});
var addEvent = function addEvent(element, eventName, func) {
    if (element.addEventListener) {
        return element.addEventListener(eventName, func, false);
    } else if (element.attachEvent) {
        return element.attachEvent("on" + eventName, func);
    }
};
addEvent(document.getElementById('open-left'), 'click', function () {
    snapper.open('left');
});
jQuery(document).ready(function ($) {
    
	// mini-cart
    var $mini_cart = $('.mini-cart');
    $mini_cart.on('click', function (e) {
        $(this).addClass('open');
    });

    $(document).on('click', function (e) {
        if ($(e.target).closest($mini_cart).length == 0) {
            $mini_cart.removeClass('open');
        }
    });

    // search
    $('.search-btn').on('click', function () {
        $('.top-search').slideToggle();
        $('.top-search input').focus();
    });
	
	$('.portfolioContainer').each(function() {
      var el = $(this);
      var portfolioContainer = el,
          filters = $('.filter-wrapper');
      filters.on('click', 'a', function() {
          var selector = $(this).attr('data-filter');
		  $('.filter-wrapper').find('.filterbutton').removeClass('selected');
          $('.current', filters).removeClass('current');
          $(this).addClass('current');
          portfolioContainer.isotope({
              filter: selector
          });
          return false;
      });

      $(window).on('resize', function() {

          portfolioContainer.imagesLoaded(function() {
              portfolioContainer.isotope({
                  layoutMode: 'masonry',
                  itemSelector: '.grid-item',
                  transitionDuration: '0.5s',
              });
          });

      }).resize();

      filters.find('.current').trigger('click');
    });
	
	$('.application_button').on('click', function () {
        $('.single_job_listing .application .application_details').slideDown();
    });
	
	//Scrolling Menu
	$("#site-navigation").headroom({
		offset: 42
	});
	
	//Scroll to top
	$(window).scroll(function () {
		if ($(window).scrollTop() > 100) {
			$('.scrollup').addClass('show');
		} else {
			$('.scrollup').removeClass('show');
		}
	});

	$('.scrollup').on('click', function (evt) {
		$("html, body").animate({scrollTop: 0}, 600);
		evt.preventDefault();
	});
	
	//Service Slider
	$(".service-list").owlCarousel({
		items : 2,
		itemsDesktop : [1199,2],
		itemsDesktopSmall : [979,2],
		itemsTablet: [767, 2],
		itemsMobile: [480, 1],
		slideSpeed:500,
		paginationSpeed:1000,
		rewindSpeed:1000,
		autoHeight: true,
		addClassActive: true,
		autoPlay: false,
		loop:true,
		pagination: false
	});
	$('.ourservices_btn_left').on('click', function () {
		$(".service-list").trigger('owl.prev');
	}) ;
	$('.ourservices_btn_right').on('click', function () {
		$(".service-list").trigger('owl.next');
	});
	
	$(".service-list-2").owlCarousel({
		items : 3,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3],
		itemsTablet: [767, 2],
		itemsMobile: [480, 1],
		slideSpeed:500,
		paginationSpeed:1000,
		rewindSpeed:1000,
		autoHeight: true,
		addClassActive: true,
		autoPlay: false,
		loop:true,
		pagination: false
	});
	$('.ourservices_btn_left').on('click', function () {
		$(".service-list").trigger('owl.prev');
	}) ;
	$('.ourservices_btn_right').on('click', function () {
		$(".service-list").trigger('owl.next');
	});
	
	//Project Slider
	$(".project-list").owlCarousel({
		items : 4,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [979,3],
		itemsTablet: [767, 1],
		itemsMobile: [480, 1],
		slideSpeed:500,
		paginationSpeed:1000,
		rewindSpeed:1000,
		autoHeight: false,
		addClassActive: true,
		autoPlay: false,
		loop:true,
		pagination: false
	});
	$('.projects_btn_left').on('click', function () {
		$(".project-list").trigger('owl.prev');
	}) ;
	$('.projects_btn_right').on('click', function () {
		$(".project-list").trigger('owl.next');
	});
	
	//Blog Slider
	$(".news-list").owlCarousel({
		items : 3,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,2],
		itemsTablet: [767, 2],
		itemsMobile: [480, 1],
		slideSpeed:500,
		paginationSpeed:1000,
		rewindSpeed:1000,
		autoHeight: false,
		addClassActive: true,
		autoPlay: false,
		loop:true,
		pagination: false
	});
	
	$(".news-list-2").owlCarousel({
		items : 2,
		itemsDesktop : [1199,2],
		itemsDesktopSmall : [979,2],
		itemsTablet: [767, 1],
		itemsMobile: [480, 1],
		slideSpeed:500,
		paginationSpeed:1000,
		rewindSpeed:1000,
		autoHeight: false,
		addClassActive: true,
		autoPlay: false,
		loop:true,
		pagination: false
	});
	
	//Testimonial Slider
//	$(".testimonials-list").owlCarousel({
//		items : 2,
//		itemsDesktop : [1199,2],
//		itemsDesktopSmall : [979,2],
//		itemsTablet: [767, 1],
//		itemsMobile: [480, 1],
//		slideSpeed:500,
//		paginationSpeed:1000,
//		rewindSpeed:1000,
//		autoHeight: false,
//		addClassActive: true,
//		autoPlay: false,
//		loop:true,
//		pagination: false
//	});
//	
//	$(".testimonials-list-2").owlCarousel({
//		items : 1,
//		itemsDesktop : [1199,1],
//		itemsDesktopSmall : [979,1],
//		itemsTablet: [767, 1],
//		itemsMobile: [480, 1],
//		slideSpeed:500,
//		paginationSpeed:1000,
//		rewindSpeed:1000,
//		autoHeight: false,
//		addClassActive: true,
//		autoPlay: false,
//		loop:true,
//		pagination: false
//	});
	
	//Client Slider
	$(".client-list").owlCarousel({
		items : 6,
		itemsDesktop : [1199,6],
		itemsDesktopSmall : [979,3],
		itemsTablet: [767, 2],
		itemsMobile: [480, 2],
		slideSpeed:500,
		paginationSpeed:1000,
		rewindSpeed:1000,
		autoHeight: false,
		addClassActive: true,
		autoPlay: false,
		loop:true,
		pagination: false
	});
	$('.clients_btn_left').on('click', function () {
		$(".client-list").trigger('owl.prev');
	}) ;
	$('.clients_btn_right').on('click', function () {
		$(".client-list").trigger('owl.next');
	});
	
	$(".project-slider").owlCarousel({
		items : 1,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [979,1],
		itemsTablet: [767, 1],
		itemsMobile: [480, 1],
		slideSpeed:500,
		paginationSpeed:1000,
		rewindSpeed:1000,
		autoHeight: false,
		addClassActive: true,
		autoPlay: false,
		loop:true,
		pagination: false
	});
	$('.tm-prev').on('click', function () {
		$(".project-slider").trigger('owl.prev');
	}) ;
	$('.tm-next').on('click', function () {
		$(".project-slider").trigger('owl.next');
	});
	
	//Nivo Slider
	if ($(".slider-nivo").length > 0) {
		$(".nivoSlider").nivoSlider({
			effect: "random",
			slices: 15,
			boxCols: 8,
			boxRows: 4,
			animSpeed: 800,
			pauseTime: 3000,
			startSlide: 0,
			directionNav: !0,
			directionNavHide: !0,
			controlNav: !0,
			keyboardNav: !1,
			pauseOnHover: !0,
			manualAdvance: !1,
			prevText: "Prev",
			nextText: "Next"
		});
	}
	
	//Google Map
	if($("#map-canvas").length > 0) {
		var gmMapDiv = $("#map-canvas");
		if (gmMapDiv.length) {
			var gmMarkerAddress = gmMapDiv.attr("data-address");
			var gmHeight = gmMapDiv.attr("data-height");
			var gmWidth = gmMapDiv.attr("data-width");
			var gmZoomEnable = gmMapDiv.attr("data-zoom_enable");
			var gmZoom = gmMapDiv.attr("data-zoom");

			gmMapDiv.gmap3({
				action: "init",
				marker: {
					address: gmMarkerAddress,
					options: {
						icon: "../images/map_marker.png"
					},
					events: {
						click: function (marker, event) {
							var map = $(this).gmap3("get");
							infowindow = $(this).gmap3({get: {name: "infowindow"}});
							if (infowindow) {
								infowindow.open(map, marker);
								infowindow.setContent("Alexander Hamilton Bridge");
							}
							else {
								$(this).gmap3({
									infowindow: {
										anchor: marker,
										options: {content: "Alexander Hamilton Bridge"}
									}
								});
							}
						}
					}
				},
				map: {
					options: {
						zoom: parseInt(gmZoom),
						zoomControl: true,
						mapTypeId: google.maps.MapTypeId.ROADMAP,
						mapTypeControl: false,
						scaleControl: false,
						scrollwheel: gmZoomEnable == 'enable' ? true : false,
						streetViewControl: false,
						draggable: true,
					}
				}
			}).width(gmWidth).height(gmHeight);
		}
	}
	
	if($("#rev_slider_1").length > 0) {
		RevSlider1_Init();
	}
	if($("#rev_slider_2").length > 0) {
		RevSlider2_Init();
	}
	if($("#rev_slider_3").length > 0) {
		RevSlider3_Init();
	}
	if($("#rev_slider_4").length > 0) {
		RevSlider4_Init();
	}
});

$(window).load(function() {
    "use strict";
	$('#loading').fadeOut(300);
});

function RevSlider1_Init() {
	$("#rev_slider_1").show().revolution({
		sliderType:"standard",
		sliderLayout:"auto",
		dottedOverlay:"none",
		delay:9000,
		navigation: {
			keyboardNavigation:"off",
			keyboard_direction: "horizontal",
			mouseScrollNavigation:"off",
			mouseScrollReverse:"default",
			onHoverStop:"on",
			touch:{
				touchenabled:"on",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: "horizontal",
				drag_block_vertical: false
			}
			,
			arrows: {
				style:"hebe",
				enable:true,
				hide_onmobile:true,
				hide_under:600,
				hide_onleave:true,
				hide_delay:200,
				hide_delay_mobile:1200,
				left: {
					h_align:"left",
					v_align:"center",
					h_offset:20,
					v_offset:0
				},
				right: {
					h_align:"right",
					v_align:"center",
					h_offset:20,
					v_offset:0
				}
			}
		},
		responsiveLevels:[1240,1024,778,480],
		visibilityLevels:[1240,1024,778,480],
		gridwidth:[1920,1024,778,480],
		gridheight:[550,550,550,550],
		lazyType:"none",
		shadow:0,
		spinner:"spinner3",
		stopLoop:"off",
		stopAfterLoops:-1,
		stopAtSlide:-1,
		shuffle:"off",
		autoHeight:"off",
		hideThumbsOnMobile:"off",
		hideSliderAtLimit:0,
		hideCaptionAtLimit:0,
		hideAllCaptionAtLilmit:0,
		debugMode:false,
		fallbacks: {
			simplifyAll:"off",
			nextSlideOnWindowFocus:"off",
			disableFocusListener:false,
		}
	});
}

function RevSlider2_Init() {
	$("#rev_slider_2").show().revolution({
		sliderType:"standard",
		sliderLayout:"auto",
		dottedOverlay:"none",
		delay:9000,
		navigation: {
			keyboardNavigation:"off",
			keyboard_direction: "horizontal",
			mouseScrollNavigation:"off",
			mouseScrollReverse:"default",
			onHoverStop:"on",
			touch:{
				touchenabled:"on",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: "horizontal",
				drag_block_vertical: false
			}
			,
			arrows: {
				style:"hebe",
				enable:true,
				hide_onmobile:true,
				hide_under:600,
				hide_onleave:true,
				hide_delay:200,
				hide_delay_mobile:1200,
				left: {
					h_align:"left",
					v_align:"center",
					h_offset:20,
					v_offset:0
				},
				right: {
					h_align:"right",
					v_align:"center",
					h_offset:20,
					v_offset:0
				}
			}
		},
		responsiveLevels:[1240,1024,778,480],
		visibilityLevels:[1240,1024,778,480],
		gridwidth:[1920,1024,778,480],
		gridheight:[550,550,550,550],
		lazyType:"none",
		shadow:0,
		spinner:"spinner3",
		stopLoop:"off",
		stopAfterLoops:-1,
		stopAtSlide:-1,
		shuffle:"off",
		autoHeight:"off",
		hideThumbsOnMobile:"off",
		hideSliderAtLimit:0,
		hideCaptionAtLimit:0,
		hideAllCaptionAtLilmit:0,
		debugMode:false,
		fallbacks: {
			simplifyAll:"off",
			nextSlideOnWindowFocus:"off",
			disableFocusListener:false,
		}
	});
}

function RevSlider3_Init() {
	$("#rev_slider_3").show().revolution({
		sliderType:"standard",
		sliderLayout:"auto",
		dottedOverlay:"none",
		delay:9000,
		navigation: {
			keyboardNavigation:"off",
			keyboard_direction: "horizontal",
			mouseScrollNavigation:"off",
			mouseScrollReverse:"default",
			onHoverStop:"on",
			touch:{
				touchenabled:"on",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: "horizontal",
				drag_block_vertical: false
			}
			,
			arrows: {
				style:"hebe",
				enable:true,
				hide_onmobile:true,
				hide_under:600,
				hide_onleave:true,
				hide_delay:200,
				hide_delay_mobile:1200,
				left: {
					h_align:"left",
					v_align:"center",
					h_offset:20,
					v_offset:0
				},
				right: {
					h_align:"right",
					v_align:"center",
					h_offset:20,
					v_offset:0
				}
			}
		},
		responsiveLevels:[1240,1024,778,480],
		visibilityLevels:[1240,1024,778,480],
		gridwidth:[1920,1024,778,480],
		gridheight:[700,700,700,700],
		lazyType:"none",
		shadow:0,
		spinner:"spinner3",
		stopLoop:"off",
		stopAfterLoops:-1,
		stopAtSlide:-1,
		shuffle:"off",
		autoHeight:"off",
		hideThumbsOnMobile:"off",
		hideSliderAtLimit:0,
		hideCaptionAtLimit:0,
		hideAllCaptionAtLilmit:0,
		debugMode:false,
		fallbacks: {
			simplifyAll:"off",
			nextSlideOnWindowFocus:"off",
			disableFocusListener:false,
		}
	});
}

function RevSlider4_Init() {
	$("#rev_slider_4").show().revolution({
		sliderType:"standard",
		sliderLayout:"fullscreen",
		dottedOverlay:"none",
		delay:9000,
		navigation: {
			keyboardNavigation:"off",
			keyboard_direction: "horizontal",
			mouseScrollNavigation:"off",
			mouseScrollReverse:"default",
			onHoverStop:"on",
			touch:{
				touchenabled:"on",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: "horizontal",
				drag_block_vertical: false
			}
			,
			arrows: {
				style:"hebe",
				enable:true,
				hide_onmobile:true,
				hide_under:600,
				hide_onleave:true,
				hide_delay:200,
				hide_delay_mobile:1200,
				left: {
					h_align:"left",
					v_align:"center",
					h_offset:20,
					v_offset:0
				},
				right: {
					h_align:"right",
					v_align:"center",
					h_offset:20,
					v_offset:0
				}
			}
		},
		responsiveLevels:[1240,1024,778,480],
		visibilityLevels:[1240,1024,778,480],
		gridwidth:[1920,1024,778,480],
		gridheight:[700,700,700,700],
		lazyType:"none",
		shadow:0,
		spinner:"spinner3",
		stopLoop:"off",
		stopAfterLoops:-1,
		stopAtSlide:-1,
		shuffle:"off",
		autoHeight:"off",
		fullScreenAutoWidth:"off",
		fullScreenAlignForce:"off",
		fullScreenOffsetContainer: "",
		fullScreenOffset: "",
		hideThumbsOnMobile:"off",
		hideSliderAtLimit:0,
		hideCaptionAtLimit:0,
		hideAllCaptionAtLilmit:0,
		debugMode:false,
		fallbacks: {
			simplifyAll:"off",
			nextSlideOnWindowFocus:"off",
			disableFocusListener:false,
		}
	});
}