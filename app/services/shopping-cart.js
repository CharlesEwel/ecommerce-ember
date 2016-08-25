import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item) {
    var alreadyInCart=false;
    var itemIndex=-1;
    this.get('items').forEach(function(itemQuantityPair, index){
      if(itemQuantityPair.contains(item)) {
        alreadyInCart=true;
        itemIndex = index;
      }
    })
    if(alreadyInCart) {
      this.get('items')[itemIndex][1]+=1;
    } else {
      this.get('items').pushObject([item, 1]);
    }
  },

  remove(item) {
    var itemIndex=-1;
    this.get('items').forEach(function(itemQuantityPair, index){
      if(itemQuantityPair.contains(item[0])) {
        itemIndex = index;
      }
    })
    if(this.get('items')[itemIndex][1]===1) {
      this.get('items').removeObject(this.get('items')[itemIndex]);
    } else {
      this.get('items')[itemIndex][1]-=1;
    }

  },

  empty() {
    this.get('items').clear();
  }
});
