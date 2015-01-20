
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

      event.preventDefault();
      //console.log ('your info has been submitted');

      var itemz = $('#item').val();
      var descriptionz = $('#description').val();
      var pricez = $('#number').val();
      var imagez = Session.get('photo');
      var locz = Geolocation.currentLocation();
     // console.log ('this is loc: ' + locz , itemz , descriptionz , pricez);

      var dataz = {
        owner : Meteor.userId() ,
        item : itemz ,
        description : descriptionz ,
        price : pricez ,
        image : imagez ,
        loc : locz
      };
        console.log(dataz);
      ////todo append values to map

      $('#item').val('');
      $('#description').val('');
      $('#number').val('');
      Session.set('photo', null);

      Stuff.insert (dataz);


    }

});
