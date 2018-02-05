import Route from '@ember/routing/route';

export default Route.extend({

	model() {
    return this.get('store').createRecord('author');
  },

  
  //setupController(controller, model) {
    //controller.set("model", this.store.createRecord("author"));
   // controller.set("fieldKeys", model);
  //},

  actions: {
    createAuthor() {
      //console.log(this.get('currentModel'));
      //console.log(this.get('controller.model'));
       this.get('controller.model').save().then( author =>
           this.transitionTo('authors.edit',author.get('id'))
           );
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
    
  

