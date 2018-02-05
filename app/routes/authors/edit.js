import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    return this.store.findRecord('author', params.id, { reload: true });
  },
  actions: {
    savePost() {
      //console.info('saving started!');
      let model = this.get('controller.model');
      //debugger;
      model.save().then(author =>
           this.transitionTo('authors.edit',author.get('id')));
    }
  }

});
