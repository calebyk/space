import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  
  translationsFetcher: service(),
  i18n: service(),


  //afterModel: function() {
    //this.get("translationsFetcher").versionCheck();
  //},

  beforeModel: function(){
  	var i18n = this.get('i18n');
  	var localeToUse = i18n.get("locale");
    this.transitionTo("properties.list.filter", "all");
    return this.get('translationsFetcher').fetch(localeToUse);
  },
});
