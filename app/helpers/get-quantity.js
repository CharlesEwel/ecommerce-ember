import Ember from 'ember';

export function getQuantity(params) {
  var itemQuantityPair = params[0]
  return itemQuantityPair[1]
}

export default Ember.Helper.helper(getQuantity);
