function GetContent(feedUrl) {
	//var feedApiGetJSON = '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=5&callback=?&q=';
	var api = "https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent("select * from xml where url = '" + feedUrl + "'&format=json&callback=cbFunc");

  //var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from xml where url="' + feedUrl + '"') + '&format=json&callback=cbFunc';
  $.getJSON( api, cbFunc );
}
   
function cbFunc(data) {
  if ( data.results[0] ) {

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

	// $.ajax({
	// 	url: "http://query.yahooapis.com/v1/public/yql",

	// 	// The name of the callback parameter, as specified by the YQL service
	// 	jsonp: "callback",

	// 	// Tell jQuery we're expecting JSONP
	// 	dataType: "jsonp",

	// 	// Tell YQL what we want and that we want JSON
	// 	data: {
	// 	  q: "select * from xml where url = '" + feedUrl + "'",
	// 	  format: "json"
	// 	},

	// 	// Work with the response
	// 	success: function( response ) {
	// 	  console.log( response ); // server response
	// 	}
	// });


	// jQuery.ajax({
	// 	url: feedApiGetJSON,
	// 	dataType: "jsonp",
 //    jsonp: "callback",
 //    jsonpCallback: "quote"
	// });

	// $.getJSON(api, function(data){
	// 	if (data.query.count > 0) {
	
	// 		console.log(data);
	// 		// Process the feeds
	// 		//_process(e, data.query.results, options);

			
	// 	}
	// });