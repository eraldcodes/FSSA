jQuery(function() {

	jQuery("table.sm_calendar td").hover( function () {
		jQuery(this).children("div.events_today").fadeIn("fast");
		}, 
		function () {
		jQuery(this).children("div.events_today").fadeOut("fast");
		}
	);

	function equalHeights(domcollection) {
		var maxHeight = 0;
		domcollection.each(function() {
			if( jQuery(this).height() > maxHeight ) {
				maxHeight = jQuery(this).height();
			}
		});
		domcollection.height(maxHeight);
	}
	equalHeights(jQuery("ul#home_boxes > li div.homebox_content"));
	
	//jQuery("ul.sf-menu:first").superfish();


jQuery("ul.sf-menu:first").supersubs({ 
            minWidth:    12,   
            maxWidth:    27,   
            extraWidth:  1                             
        }).superfish();  
   
	                       
                        

});