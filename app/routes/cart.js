import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    refreshCart() {
      this.transitionTo('index')
    }
  }
});
