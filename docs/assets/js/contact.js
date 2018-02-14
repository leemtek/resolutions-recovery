// CONTACT MAP

var PageContact = function() {

	var _init = function() {

		var mapbg = new GMaps({
			div: '#gmapbg',
			lat: 37.977251,
			lng: -122.522663,
			scrollwheel: false
		});


		mapbg.addMarker({
			lat: 37.977251,
			lng: -122.522663,
			title: 'Your Location',
			infoWindow: {
				content: '<h3>Resolutions Recovery</h3><p>1363 Lincoln Ave. #4<br />San Rafael, Ca. 94901</p>'
			}
		});
	}

    return {
        //main function to initiate the module
        init: function() {

            _init();

        }

    };
}();

$(document).ready(function() {
    PageContact.init();
});