import Ember from 'ember';

export function cartTotal(params) {
  var cart = params[0];
  var total = 0;

  cart.forEach(function(item) {
    total += parseInt(item[0].get('price')*item[1]);
  })
  return total;
}

export default Ember.Helper.helper(cartTotal);
