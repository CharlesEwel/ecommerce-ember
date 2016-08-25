import Ember from 'ember';

export function getPrice(params/*, hash*/) {
  var itemQuantityPair = params[0]
  var unitPrice = parseInt(itemQuantityPair[0].get('price'))
  var unitQuantity =  parseInt(itemQuantityPair[1])
  return unitPrice*unitQuantity
}

export default Ember.Helper.helper(getPrice);
