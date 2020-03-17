var map;
function initMap() {
  map = /* new google.maps.Map is a fucntion which takes in 2 parameters 
          1st is the object that we have created and 2nd is some options
             */ new google.maps.Map(document.getElementById('map'), {
    center: {lat: 28.7041, lng: 77.1025},
    zoom: 8 /* max zoom can be 14 */
  });
}
