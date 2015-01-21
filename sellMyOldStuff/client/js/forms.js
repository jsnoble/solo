
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

    'click #submit': function(event) {

      event.preventDefault();

      var itemz = $('#item').val();
      var descriptionz = $('#description').val();
      var pricez = $('#number').val();
      var imagez = Session.get('photo');
      var locz = Geolocation.latLng();


      var dataz = {
        owner : Meteor.userId() ,
        item : itemz ,
        description : descriptionz ,
        price : pricez ,
        image : imagez ,
        loc : locz
      };

        var marker = new google.maps.Marker({
          position: locz,
          draggable:true,
          map: GoogleMaps.maps.Map.instance,
          title:"Buy Me! :"+ itemz +' : '+descriptionz+ 'Contact me '
        });


      var infowindow = new google.maps.InfoWindow({
        content:''+
          '<h2>'+ itemz+ '</h2>'+
          '<img src='+'"' + imagez+ '"'+'/>' +
          '<p>'+ descriptionz+ '</p>'

      });

      //google.maps.event.addListener(marker, 'click', function(){
      //  infowindow.open( GoogleMaps.maps.Map.instance, marker)
      //});

     $('#item').val('');
     $('#number').val('');
     Session.set('photo', null);

     Stuff.insert (dataz);

    }

});
