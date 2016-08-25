import Ember from 'ember';

export default Ember.Component.extend({
  updateProductForm: false,
  actions: {
    updateProductForm() {
      this.set('updateProductForm', true);
    },
    updateValue(selectedCategory) {
      this.set('selectedCategory', selectedCategory);
    },
    update(product) {
      var params = {
        title: this.get('title'),
        description: this.get('description'),
        price: this.get('price'),
        image: this.get('image'),
        category: this.get('category-list').objectAt(this.get('selectedCategory'))
      };
      var oldCategory = this.get('category-list').objectAt(product.get('category').get('id'))
      this.set('updateProductForm', false);
      console.log(oldCategory)
      this.sendAction('update', product, params, oldCategory);
    }
  }
});
