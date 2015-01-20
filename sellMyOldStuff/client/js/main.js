

Meteor.startup(Geolocation.latLng());


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



Template.someMap.rendered = function () {

    L.mapbox.accessToken = 'pk.eyJ1IjoianNub2JsZSIsImEiOiJTMXd0aHM0In0.Kl0VcXHGbfS-3ZdSpHKlZg';
    var map = L.mapbox.map("someMap", 'jsnoble.l065gigi');

};

//L.mapbox.accessToken = ;
//var map = L.mapbox.map('map', 'jsnoble.l065gigi');

//https://a.tiles.mapbox.com/v3/jsnoble.l065gigi/page.html