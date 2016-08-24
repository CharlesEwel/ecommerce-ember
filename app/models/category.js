import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  products: DS.hasMany('product', {async: true})
});
