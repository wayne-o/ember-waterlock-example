import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sonatribe-login', 'Integration | Component | sonatribe login', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sonatribe-login}}`);

  var $button = this.$('.facebook_oauth2');
  assert.equal($button.length, 1);


});
