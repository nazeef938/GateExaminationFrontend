jQuery(document).on('submit', '#ivy-ajax-save-form', function(e){
	e.preventDefault();
	var ajax_save_form = jQuery(this);
	var formaction = ajax_save_form.attr('data-action');
	jQuery.ajax({
		enctype: 'multipart/form-data',
		url: formaction,
		data: new FormData(this),
		method:'post',
		dataType: 'json', 
		processData: false,
		contentType: false,
		cache: false,
		timeout: 600000,
		beforeSend: function() {
			jQuery('#ajax-submitbutton').html('wait...');		
			jQuery('#ajax-submitbutton').prop('disabled', true);		
		},
		success : function(response) {
			jQuery('#ajax-submitbutton').html('Send');
			jQuery('#ajax-submitbutton').prop('disabled', false);
			if(response.status) {
				Swal.fire({
					title: 'Success',
					text: response.message,
					icon: 'success',
					showCancelButton: false,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
				}).then((result) => {
					if (result.isConfirmed) {
						if(response.http_redirect) {
							window.location.href=response.http_redirect;
						} else {
							window.location.reload();
						}
					}
				});
			} else {
				sweet_alert('Error',response.message,'error');
			}
		}
	});
});
function sweet_alert(heading,message,alert_type ){
	Swal.fire(
		heading,
		message,
		alert_type
	);
}
jQuery(document).ready(function(){
	jQuery(window).on('load',function(){
		var delayMs = 1500; // delay in milliseconds
		
		setTimeout(function(){
			jQuery('#modal-messgaes').modal('show');
		}, delayMs);
	});
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		items:4,
		loop:true,
		margin:20,
		autoplay:true,
		autoplayTimeout:1000,
		autoplayHoverPause:true
	});
	// if( jQuery('#scroll_point_div').length > 0 ) {
		// jQuery('html, body').animate({
            // scrollTop: jQuery('#scroll_point_div').offset().top
        // }, 2000);
	// }
});