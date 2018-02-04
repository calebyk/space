import Route from '@ember/routing/route';

export default Route.extend({

	model() {
    return this.get('store').createRecord('author',{});
  },

  actions: {
    createAuthor() {
       this.get('currentModel').save().then( author =>
           this.transitionToRoute('authors',author.get('id')));
              debugger;

        },
    cancel() {
      this.transitionTo('authors');
    }
  }

});
      /* 
      let book = this.modelFor(this.new);
      var self = this;
      this.get('book').save().then(function() {
        self.transitionTo('books');
      }).catch(function(reason) {
      }); 
      */
      //this.store.createRecord('author', { name: 'Life', discount: 10 }).save().then(function() {
      //  this.transitionToRoute('authors');
      //}.bind(this));
      
      //console.log("name:", 'Caleb');
      //console.log("price:", this.get('price')); 
      //alert("New Boook!");
    
  

