$.fn.googleMap = function(address, options) {
  var defaults = {
    lat: 44.081996,
    long: -123.0286928,
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.HYBRID
  };

  options = $.extend(defaults, options || {});

  var center = new google.maps.LatLng(options.lat, options.long);
  var map = new google.maps.Map(this.get(0), $.extend(options, { center: center }));

  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: address }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK && results.length) {
      if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
        map.set_center(results[0].geometry.location);
        var marker = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map
        });
      }
    }
  });
};