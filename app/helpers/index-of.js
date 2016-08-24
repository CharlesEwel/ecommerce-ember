import Ember from 'ember';

export function indexOf(params) {
  let a = params[0],
      b = params[1],
      c = a.indexOf(b);

  return c;
}

export default Ember.Helper.helper(indexOf);
