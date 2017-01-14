jQuery(document).ready( function() {
	var c = getCookieNonSocitm('cookies_agreed');
	if(c == undefined) {
		showtip();
	}

	jQuery('#cookie-ok').click( function(e) {
		e.preventDefault();
		// Drop cookie here so this doesn't keep popping up
		setCookieNonSocitm('cookies_agreed', 'yes', 366);
		// Close tip div & arrow
		jQuery('#cookie-container').slideUp(1000);
	});
});

function showtip() {
	jQuery('body').prepend(jQuery('#cookie-container'));
	var tip = jQuery('#cookie-container');
	// init cookie tip
	tip.slideDown(1000);
}

function setCookieNonSocitm(c_name,value,exdays) {
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}

function getCookieNonSocitm(c_name) {
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++) {
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");
		if (x==c_name) {
			return unescape(y);
		}
	}
}
