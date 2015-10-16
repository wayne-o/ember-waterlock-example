import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sonatribe-menu', 'Integration | Component | sonatribe menu', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sonatribe-menu}}`);

  var $nav = this.$('nav');
  assert.equal($nav.length, 1);
});
