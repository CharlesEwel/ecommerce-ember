import Ember from 'ember';

export function getTitle(params/*, hash*/) {
  var itemQuantityPair = params[0]
  return itemQuantityPair[0].get('title')
}

export default Ember.Helper.helper(getTitle);
