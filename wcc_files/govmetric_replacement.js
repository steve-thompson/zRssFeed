$(document).ready( function() {
	var url = window.location.href;
	var title = $('title').text();
	var val_good = 'Good';
	var val_bad = 'Bad';
	var val_average = 'Average';
	var user_agent = navigator.userAgent;
	//var imgpath = '//static.localhost/libs/js/wcc/e-services/'; // localhost test
	var imgpath = '//static.warwickshire.gov.uk/libs/js/wcc/e-services/'; // static
	// transform url for wufoo
	if(url.indexOf('?') != -1) {
		url = url.substr(url.indexOf('?')+1); // Grab query instead
		if(url.indexOf('&') != -1) {
			url = url.substr(0, url.indexOf('&')); // strip all data from first & onwards if present
		}
	}

	var extra_info = '&Field18=' + title + '&Field20=' + url + '&Field31=' + user_agent;
	var html = '<div style="text-align:center;">Please rate this information/service</div>';
	html += '<div style="padding:10px; text-align:center;">';
	html += '<a target="_blank" href="https://warwickshiredirect.wufoo.com/forms/tell-us-what-you-think/def/Field1=' + val_good + extra_info + '"><img src="' + imgpath + 'gm_good.png" alt="Good" /></a>&nbsp;&nbsp;';
	html += '<a target="_blank" href="https://warwickshiredirect.wufoo.com/forms/tell-us-what-you-think/def/Field1=' + val_average + extra_info + '"><img src="' + imgpath + 'gm_average.png" alt="Average" /></a>&nbsp;&nbsp;';
	html += '<a target="_blank" href="https://warwickshiredirect.wufoo.com/forms/tell-us-what-you-think/def/Field1=' + val_bad + extra_info + '"><img src="' + imgpath + 'gm_bad.png" alt="Bad" /></a>';
	html += '</div>';
	html += '<div style="text-align:center;"><a href="http://innovatewarwickshire.wordpress.com/" target="_blank">See how we improve our website</a></div>';
	$('div#ratethis').append(html);
});

