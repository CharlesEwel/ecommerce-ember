import Ember from 'ember';

export default Ember.Component.extend({
  addNewProduct: false,
  actions: {
    productFormShow() {
      this.set('addNewProduct', true);
    },

    saveProduct() {
      var params = {
        title: this.get('title'),
        description: this.get('description'),
        price: this.get('price')
      };
      this.set('addNewProduct', false);
      this.sendAction('saveProduct', params)
    }
  }
});
