import Ember from 'ember'
import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('property', params.idProperty);
  },

  actions: {
    error: function (error) {
      Ember.Logger.error(error);
      //debugger;
      this.transitionTo("properties.list.default");
    }
  },
  
  // setupController(controller, model) {
  //   debugger;
  // }
});
