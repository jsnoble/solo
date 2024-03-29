
Stuff = new Mongo.Collection('stuff');

var Schemas = {};

Schemas.stuff =  new SimpleSchema({
  item : {
    type : String ,
    label : 'Item' ,
    max : 50

  } ,
  description : {
    type : String ,
    label : 'Description' ,
    max : 1000

  } ,
  price : {
    type : Number ,
    label : 'Price' ,
    min : 0,
    decimal: true

  } ,
  loc : {
    type : Object ,
    label : 'Loc' ,
    blackbox: true

  } ,
  image : {
    type : String ,
    label : 'Image' ,
    optional : true
  }

});

Stuff.attachSchema(Schemas.stuff);
