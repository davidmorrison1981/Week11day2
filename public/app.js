
var initialize = function(){
  var container = document.getElementById('map');
  var center = {lat: 55.9772951, lng: -3.1774532};
  


  var map = new Map(container, center, 15);
  map.addMarker(center);
  map.addClickEvent();
  map.handleOnClick();
}


window.onload = initialize