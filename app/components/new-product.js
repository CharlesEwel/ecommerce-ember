import Ember from 'ember';

export default Ember.Component.extend({
  addNewProduct: false,
  selectedCategory: -1,
  actions: {
    productFormShow() {
      this.set('addNewProduct', true);
    },
    updateValue(selectedCategory) {
      this.set('selectedCategory', selectedCategory);
    },
    saveProduct() {
      var params = {
        title: this.get('title'),
        description: this.get('description'),
        price: this.get('price'),
        image: this.get('image'),
        category: this.get('category-list').objectAt(this.get('selectedCategory'))
      };
      this.set('addNewProduct', false);
      this.sendAction('saveProduct', params)
    }
  }
});
