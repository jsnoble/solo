
Template.productPage.helpers({
  photo: function(){
    return Session.get('photo');
  }}
);



Template.productPage.events({

    'click #img': function (event){
      event.preventDefault();
      console.log('say chesse!');
      var cameraOptions = {
        width: 300,
        height: 300
      };

      MeteorCamera.getPicture(cameraOptions, function(err, data){
        Session.set('photo', data)
        })
      },

    'click #submit': function(event, template) {
      event.preventDefault ();
      console.log ('your info has been submitted');

      var itemz = template.find ('input[name = item]');
      var descriptionz = template.find ('input[name = description]');
      var pricez = template.find ('input[name = price]');
      var imagez = Session.get ('photo');
      var locz = Geolocation.latLng ();
      console.log ('this is loc: ' + locz , itemz , descriptionz , pricez);

      var dataz = {
        owner : Meteor.userId () ,
        username : Meteor.user ().username ,
        item : itemz ,
        description : descriptionz ,
        price : pricez ,
        image : imagez ,
        loc : locz
      };

      //todo append values to map

      itemz.value = '';
      itemz.descriptionz = '';
      itemz.pricez = '';

      Stuff.insert (dataz);


    }

});
