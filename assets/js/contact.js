// CONTACT MAP

var PageContact = function() {

	var _init = function() {

		var mapbg = new GMaps({
			div: '#gmapbg',
			lat: 37.8927918,
			lng: -122.1202161,
			scrollwheel: false
		});


		mapbg.addMarker({
			lat: 37.8927918,
			lng: -122.1202161,
			title: 'Your Location',
			infoWindow: {
				content: '<h3>Resolutions Recovery</h3><p>1004 Oak Hill Rd.<br />Lafayette, CA 94549</p>'
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