import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['score:desc'],
  sortedRatings: Ember.computed.sort('ratings', 'sortBy'),

  averageRating: Ember.computed('ratings.@each.score', function(){
    var ratingList= this.get('ratings')
    var total = 0;
    var numberOfRatings = ratingList.get('length');
    if(numberOfRatings===0) {
      return "No reviews have been written yet"
    } else {
      ratingList.forEach(function(review) {
        total += parseInt(review.get('score'));
      })
      return (total/numberOfRatings).toFixed(1);
    }
  })
});
