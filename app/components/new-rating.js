import Ember from 'ember';

export default Ember.Component.extend({
  addNewRating: false,
  actions: {
    ratingFormShow() {
      this.set('addNewRating', true);
    },
    saveRating() {
      var params = {
        score: parseInt(this.get('score')),
        comments: this.get('comments'),
        product: this.get('product'),
      };
      this.set('addNewRating', false);
      this.sendAction('saveRating', params)
    }
  }
});
