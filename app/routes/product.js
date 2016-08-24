import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),

  model(params){
    return Ember.RSVP.hash({
      product: this.store.findRecord('product', params.product_id),
      categories: this.store.findAll('category')
    });
  },
  actions: {
    update(product, params, oldCategory) {
      console.log(oldCategory);
      oldCategory.get('products').removeObject('product');
      oldCategory.save()
      Object.keys(params).forEach(function(key) {
        if (params[key]!== undefined) {
          product.set(key,params[key]);
        }
      });
      var newCategory = params.category;
      newCategory.get('products').addObject(product);
      product.save().then(function() {
        return newCategory.save();
      });
    },
    deleteProduct(product) {
      product.destroyRecord();
      this.transitionTo('index');
    },
    addToCart(item) {
      this.get('shoppingCart').add(item);
      this.transitionTo('index')
    }
  }
});
