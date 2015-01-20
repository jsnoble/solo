

Meteor.startup(Geolocation.latLng());

Meteor.startup(function(){
  GoogleMaps.load({key:'AIzaSyDHhGk8-GXZX3jMPNEFhWqVAQarzAhBNwo'});
});

//Template.someMap.rendered = function(){
//
//  L.mapbox.accessToken = 'pk.eyJ1IjoianNub2JsZSIsImEiOiJTMXd0aHM0In0.Kl0VcXHGbfS-3ZdSpHKlZg';
//  var map = L.mapbox.map("map", 'examples.map-zr0njcqy').setView([40, -74.50], 9);
//
//
//
//
//};
Template.body.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // We can use the `ready` callback to interact with the map API once the map is ready.
      GoogleMaps.ready('exampleMap', function(map) {
        // Add a marker to the map once it's ready
        var marker = new google.maps.Marker({
          position: map.options.center,
          map: map.instance
        });
      });
        var obj = Geolocation.latLng();
      // Map initialization options
      return {
        center: new google.maps.LatLng(obj.lat,obj.lng),
        zoom: 8
      };
    }
  }
});
//'jsnoble.l065gigi'
  //// counter starts at 0
  //Session.setDefault("counter", 0);
  //
  //Template.hello.helpers({
  //  counter: function () {
  //    return Session.get("counter");
  //  }
  //});
  //
  //Template.hello.events({
  //  'click button': function () {
  //    // increment the counter when button is clicked
  //    Session.set("counter", Session.get("counter") + 1);
  //  }
  //});
  //







// Using a template's rendered callback
//Meteor.startup(function(){
//  Mapbox.load('minimap', 'markercluster');
//});
////
//Template.Map.rendered = function () {
//  this.autorun(function(){
//    if (Mapbox.loaded()){
//      L.mapbox.accessToken = 'pk.eyJ1IjoianNub2JsZSIsImEiOiJTMXd0aHM0In0.Kl0VcXHGbfS-3ZdSpHKlZg';
//
//      var map = L.mapbox.map('map', 'jsnoble.l065gigi').setView([40, -74.50], 9);;
//    }
//  })
//
//
//
//};







//L.mapbox.accessToken = ;
//var map = L.mapbox.map('map', 'jsnoble.l065gigi');

//https://a.tiles.mapbox.com/v3/jsnoble.l065gigi/page.html