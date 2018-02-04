import Controller from '@ember/controller';
import Ember from 'ember'
export default Controller.extend({
 actions: {
 	create() {
 		debugger;
 		var self = this;
 		console.log(this.get('model'));
 		this.get('model').save().then(function() {
 			self.transitionToRoute('properites');
 		});
 	},
 	cancel(){
 	}
 }
});

/*
this.get('currentModel').save().then( author =>
           this.transitionToRoute('authors',author.get('id')));
              debugger;
*/
