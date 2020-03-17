var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 28.7041, lng: 77.1025},
    zoom: 8
  });
}