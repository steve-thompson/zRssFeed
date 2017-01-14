function GetContent(feedUrl) {
	var feedApiGetJSON = '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=5&callback=?&q=';
	jQuery.ajax({
		url: feedApiGetJSON + feedUrl,
		dataType: 'jsonp',
		jsonpCallback: 'JsonpCallback'
	});
}

function JsonpCallback(data) {
	if (data.responseStatus == '200') {
		// alert(data.responseData.feed.title);
		// above just for debugging
		for (var i = 0; i < data.responseData.feed.entries.length; i++) {
			sampleMedia = data.responseData.feed.entries[i].mediaGroups;
			subSampleMedia = sampleMedia[0].contents[0].thumbnails[0];
			var item = '<div class="item slide pane-' + (i + 1) + '">' + '<span class="wrap" style="height:300px;"><a href="' + data.responseData.feed.entries[i].link + '">' + '<img class="featured-news-image" src="' + subSampleMedia.url + '" alt="' + data.responseData.feed.entries[i].title + '" height>' + '</a>' + '<div class="carousel-caption"><h3><a href="' + data.responseData.feed.entries[i].link + '">' + data.responseData.feed.entries[i].title + '</a></h3></div>' + '</span></div>';
			jQuery('#latest-news').append(item);
		}
		// after our JSON has loaded successfully, then we begin to slide
		jQuery('#latest-news .slide').first().addClass('active');
		jQuery('#featured-slider').carousel('pause');
		// jQuery('#featured-slider').load(function () {
		//	jQuery(this).carousel('pause');
		// });
	}
	else {
		// alert(data.responseDetails);
		// above just for debugging
		jQuery('#latest-news').append('<div class="item slide">Sorry, something went wrong when we tried to get those stories for you. We had this error: ' + data.responseDetails + '</div>');
	}
}