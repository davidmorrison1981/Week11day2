var Map = function(container, coords, zoom){

  this.googleMap = new google.maps.Map(container, {
    center: coords, 
    zoom: zoom
  });

  this.addMarker = function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap,
      label:"1"
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
  
    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Commercial Street</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Commercial Street</b>, also referred to as <b>The coolest street in Edinburgh</b>, is a party ' +
        'central in Leith, the northern part of the '+
        'city of Edinburgh. It lies at next to Ocean Terminal'+
        'which contains feck all decent apart from the gym and cinema.'+
        'David and Emma are the two superior locals in the area and significant'+
        'figures of the Commercial Street awesome vibe. Commercial Street is '+
        'sacred to the local Jakies but has been gentrified in the last decade cleansing '+
        'the majority of Aboriginal Jakies from the area. It has many decent waterholes, '+
        'and places for great food at reasonable prices. Commercial Street is listed as '+
        'not for the likes of John, Robbie and other deviant weirdos from up north.</p>'+
        '</div>'+
        '</div>';

      var infowindow = new google.maps.InfoWindow({
           content: contentString
         });
  }

  this.addClickEvent = function(){

    google.maps.event.addListener(this.googleMap, 'click', function(event){
      // console.log(event);

      var position = {lat: event.latLng.lat(), lng: event.latLng.lng() }

      this.addMarker(position)
    }.bind(this))
  }

  
  this.handleOnClick = function(){ 
    google.maps.onclick.addListener(event.googleMap, 'click', function(event){
      button.onclick = this.googleMap.setCenter(new google.maps.LatLng(55.9463732, -3.2023009))
    }.bind(this))
}
}
 