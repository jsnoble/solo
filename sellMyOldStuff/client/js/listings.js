/**
 * Created by jared on 1/20/15.
 */
Template.listings.helpers({
    listings: function(){
      return Stuff.find().fetch().reverse()
    }}
);