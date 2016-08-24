import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('product', params.product_id);
  },
  actions: {
    update(product, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key]!== undefined) {
          product.set(key,params[key]);
        }
      });
      product.save();
    },
    deleteProduct(product) {
      product.destroyRecord();
      this.transitionTo('index');
    }
  }
});
