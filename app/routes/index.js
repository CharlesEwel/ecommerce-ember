import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      products: this.store.findAll('product'),
      categories: this.store.findAll('category')
    });
  },
  actions: {
    saveProduct(params) {
      var newProduct = this.store.createRecord('product', params);
      var category = params.category;
      category.get('products').addObject(newProduct);
      newProduct.save().then(function() {
        return category.save();
      });
    }
  }
});
