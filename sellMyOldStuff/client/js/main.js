

Meteor.startup(Geolocation.latLng());

Meteor.startup(function(){
  GoogleMaps.load({key:'AIzaSyDHhGk8-GXZX3jMPNEFhWqVAQarzAhBNwo'});
});


Template.body.helpers({
  MapOptions: function() {

    if (GoogleMaps.loaded()) {

      GoogleMaps.ready('Map', function(map) {

        //var marker = new google.maps.Marker({
        //  position: map.options.center,
        //  map: map.instance
        //});
      });
        var obj = Geolocation.latLng();

      return {
        center: new google.maps.LatLng(obj.lat,obj.lng),
        zoom: 12
      };
    }
  }
});




