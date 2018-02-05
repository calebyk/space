import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('book');
  },

  actions: {
    createBook: function() {
      /* let book = this.modelFor(this.new);
      var self = this;
      this.get('book').save().then(function() {
        self.transitionTo('books');
      }).catch(function(reason) {
      }); */
      this.get('controller.model').save().then( book =>
           this.transitionTo('books.edit',book.get('id'))
           );
        },
    cancel() {
      this.transitionTo('books');
    }

    //  this.store.createRecord('book', { title: 'Life', price: 11 }).save().then(function() {
    //    this.transitionToRoute('books');
    //  }.bind(this));

  
    //}
  }

});

