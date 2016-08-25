import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  totalPrice: Ember.computed('shoppingCart.items', function() {
    var cart = this.get('shoppingCart.items');
    var total = 0;

    cart.forEach(function(item) {
      total += parseInt(item[0].get('price')*item[1]);
    })
    return total;
  }),

  actions: {
    remove(item) {
      this.get('shoppingCart').remove(item);
      this.sendAction('refreshCart');
    }
  }
});
