function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.850033, lng: -87.6500523},
    zoom: 11
  });

  var layer = new google.maps.FusionTablesLayer({
    query: {
      select: '\'Geocodable address\'',
      from: '1Jhv4l9jynweEc13pC7PIp9bY-XNZaVfBdQ5g5ow5'
    }
  });
  layer.setMap(map);
}