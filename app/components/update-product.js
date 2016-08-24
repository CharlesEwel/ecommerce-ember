import Ember from 'ember';

export default Ember.Component.extend({
  updateProductForm: false,
  actions: {
    updateProductForm() {
      this.set('updateProductForm', true);
    },
    update(product) {
      var params = {
        title: this.get('title'),
        description: this.get('description'),
        price: this.get('price'),
      };
      this.set('updateProductForm', false);
      this.sendAction('update', product, params);
    }
  }
});
