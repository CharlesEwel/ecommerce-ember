import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  price: DS.attr(),
  category: DS.belongsTo('category', {async: true}),
  ratings: DS.hasMany('rating', {async: true})
});
