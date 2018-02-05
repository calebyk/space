import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    attrs:{
    	books: {serialize: true}
    }
});