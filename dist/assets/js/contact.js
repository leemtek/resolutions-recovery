// CONTACT MAP

var PageContact = function() {

	var _init = function() {

		var mapbg = new GMaps({
			div: '#gmapbg',
			lat: 37.9772511,
			lng: -122.5248516,
			scrollwheel: false
		});


		mapbg.addMarker({
			lat: 37.9772511,
			lng: -122.5248516,
			title: 'Your Location',
			infoWindow: {
				content: '<h3>Resolutions Recovery</h3><p>1363 Lincoln Ave. 4, San Rafael, CA 94901</p>'
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