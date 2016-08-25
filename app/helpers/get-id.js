import Ember from 'ember';

export function getId(params/*, hash*/) {
  var itemQuantityPair = params[0];
  return itemQuantityPair[0].get('id');
}

export default Ember.Helper.helper(getId);
