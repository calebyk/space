import EmberObject from '@ember/object';
import MymixinMixin from 'bookstore/mixins/mymixin';
import { module, test } from 'qunit';

module('Unit | Mixin | mymixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let MymixinObject = EmberObject.extend(MymixinMixin);
  let subject = MymixinObject.create();
  assert.ok(subject);
});
