import { moduleForModel, test } from 'ember-qunit';

moduleForModel('auth', 'Unit | Model | auth', {
  // Specify the other units that are required for this test.
  needs: ['model:user']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
