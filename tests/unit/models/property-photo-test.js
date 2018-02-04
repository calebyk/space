import { moduleForModel, test } from 'ember-qunit';

moduleForModel('property-photo', 'Unit | Model | property photo', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
