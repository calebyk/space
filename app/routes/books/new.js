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
      this.store.createRecord('book', { title: 'Life', price: 11 }).save().then(function() {
        this.transitionToRoute('books');
      }.bind(this));

      console.log("title:", this.get('title'));
      console.log("price:", this.get('price')); 
      //alert("New Boook!");
    }
  }

});
