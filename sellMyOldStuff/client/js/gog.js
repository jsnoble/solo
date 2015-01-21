/**
 * Created by jared on 1/20/15.
 */
GoogleMaps.ready('Map', function(map){

  Stuff.find().forEach(function(obj){
    console.log('this is obj'+JSON.stringify(obj));

    var marker = new google.maps.Marker({
      position: obj.loc,
      draggable:true,
      map: map.instance,
      title:"Buy Me! :"+ obj.item +' : '+obj.description+ 'Contact me '
    });

    var infowindow = new google.maps.InfoWindow({
      content:''+
      '<h2>'+ obj.item+ '</h2>'+
      '<img src='+'"' + obj.image+ '"'+'/>' +
      '<p>'+ obj.description+ '</p>'

    });

  });

});









//owner : Meteor.userId() ,
//  item : itemz ,
//  description : descriptionz ,
//  price : pricez ,
//  image : imagez ,
//  loc : locz





//google.maps.event.addListener(marker, 'click', function(){
//  infowindow.open( GoogleMaps.maps.Map.instance, marker)
//});