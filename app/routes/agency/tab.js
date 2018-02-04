import Route from '@ember/routing/route';
import AdminMeta from '../../models/admin-meta';

export default Route.extend({
	// tabsList: [{}],
  actions: {
    // editProperty(property) {
    //   this.transitionTo("admin.propiedades.editar", property.get('idPropiedad'))
    // }
  },
  model(params) {
    var fieldNames = "";
    if (params.tabName === "user") {
      // debugger;
    }
    if (params.tabName === "location") {
      fieldNames = "provinces";
    }

    if (Ember.isEmpty(fieldNames)) {
      return {};
    } else {
      var adminMeta = AdminMeta.get(fieldNames);
      // adminMeta is from 
      // http://localhost:3000/api/v1/select_values/?field_names=property-origins%2C+property-types%2C+property-states%2C+property-labels
      // and just returns a list of selectValues for provinces and propertyTypes..
      return adminMeta;
    }

  },
  // setupController will not get called if model does not change
  // eg if I returned a query that was not dependant on params....
  setupController(controller, model) {
    var activeTabName = this.paramsFor('admin.agency.tab').tabName || "";
    controller.set("activeTabName", activeTabName.toLowerCase());
    // controller.set("contentResources", this.modelFor('admin.website'));
    controller.set("fieldKeys", model);
    controller.set("agencyDetails", this.modelFor("admin").agencyDetails);
    controller.set("primaryAddress", this.modelFor("admin").primaryAddress);
    controller.set("currentUser", this.modelFor("admin").currentUser);

    // var defaultTablist = [{
    //   tabValue: "general",
    //   tabTitleKey: "agencySections.general"
    // }, {
    //   tabValue: "location",
    //   tabTitleKey: "agencySections.location"
    // }, {
    //   tabValue: "user",
    //   tabTitleKey: "agencySections.user"
    // }];

    var agencyTabsList = this.modelFor("admin").setup.get('agencyTabsList');
    controller.set("tabsList",agencyTabsList);
  }
});
