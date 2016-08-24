import DS from 'ember-data';

export default DS.Model.extend({
  score: DS.attr(),
  comments: DS.attr(),
  product: DS.belongsTo('product', {async: true})
});
