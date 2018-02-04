import Route from '@ember/routing/route';

export default Route.extend({
    
    model() {
        return this.get('store').findAll('liteProperty');
    },
	
    model(params) {
    var filter = {};
    // !!!!!july 2016 - can't for the life of me get properties to refresh when route changes

    // if (params.filter && (params.filter === "visible")) {
    //   filter = {
    //     visible: "true"
    //   }
    // }
    // if (params.filter && (params.filter === "hidden")) {
    //   filter = {
    //     visible: "false"
    //   }
    // }

    return this.store.query("liteProperty", {
      filter: filter
    });
    // below would force a call to backend each time
    // }, { reload: true });
     //return this.store.findAll('liteProperty'); 
  },

  setupController(controller, model) {
    controller.set("model", []);
    // debugger;
    // !!!!!july 2016 - can't for the life of me get properties to refresh when route changes
    // Could actually be something with the data table view I’m using rather than ember or ember-data issue
    var filter = this.paramsFor("properties.list.filter").filter;
    controller.set("filter", filter);
    var filteredModel = model;
    if (filter === "hidden") {
      filteredModel = model.filterBy("visible", false);
    }
    if (filter === "visible") {
      filteredModel = model.filterBy("visible", true);
    }
    controller.set("model", filteredModel);
    // debugger;
  }
});
