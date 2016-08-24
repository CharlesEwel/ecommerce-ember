import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item) {
    this.get('items').pushObject(item);
    console.log("add executes")
    console.log(this.get('items').get('length'))
  }
});
