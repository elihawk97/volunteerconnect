function maps () {
	
    var locations = [
      ['NYC Health + Hospitals/Dyckman Family Health Center', 40.861407, -73.924370],
      ['N Y City-Health & Hospitals', 40.821512, -73.942894],
      ['New York City Health & Hospital', 40.809703, -73.948914],
      ['Mount Sinai', 40.805205, -73.938615],
      ['Henry J. Carter Specialty Hospital & Nursing Facility', 40.803022, -73.941167],
	  ['Mount Sinai Beth Israel', 40.732895, -73.983328],
	  ['Bellevue Hospital Center', 40.739217, -73.975498],
	  ['National Jewish Medical-Research', 40.751077, -73.979987],
	  ['Hospital for Special Surgery, Main Campus', 40.765143, -73.952671],
	  ['NYU Hospital', 40.742053, -73.974260]
];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: new google.maps.LatLng( 40.850485, -73.929107),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });


    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
}



