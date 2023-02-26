jQuery(document).ready(function(){
	jQuery('#open-mobile-menu').click(function(){
		jQuery('.custom-menu-links').addClass('mobile-menu-opened');
	});

	jQuery('#close-mobile-menu').click(function(){
		jQuery('.custom-menu-links').removeClass('mobile-menu-opened');
	});

	jQuery('#media-container').slick({
		dots: true
	})
})