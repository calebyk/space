import DS from 'ember-data';
import { underscore } from '@ember/string';

export default DS.JSONAPISerializer.extend({
// http://stackoverflow.com/questions/29484468/transient-and-non-dirty-attribute-ember-data/29504008#29504008
// Based on above - to stop extras col from being sent to server
    serializeAttribute: function(record, json, key, attribute) {
      if (attribute.options.dontSerialize) {
        return;
      }
      return this._super(record, json, key, attribute);
    }, 
    
    keyForAttribute: function(key){
      let returnValue = underscore(key);
      //return underscore(key);
      console.log(returnValue);
      debugger;

      //return Ember.String.decamelize(key);
    },
    keyForAttribute: function(key) {
      return underscore(key);
      //return Ember.String.decamelize(key);
    }

});
