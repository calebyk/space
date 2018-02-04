//import Ember from 'ember';
//import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DS from 'ember-data';

//import { underscore } from '@ember/string';
//const { String: { pluralize } } = Ember;

export default DS.JSONAPIAdapter.extend({
  "host": "http://localhost:3000",
  "namespace": 'api/v1'
  //pathForType(type) {
  //  return pluralize(underscore(type));
  //}

});