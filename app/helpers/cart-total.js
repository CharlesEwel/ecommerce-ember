import Ember from 'ember';

export function cartTotal(params/*, hash*/) {
  var cart = params[0];
  var total = 0;

  cart.forEach(function(item) {
    total += parseInt(item.get('price'));
  })
  return total;
}

export default Ember.Helper.helper(cartTotal);