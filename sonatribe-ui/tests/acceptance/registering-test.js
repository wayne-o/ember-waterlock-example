import Ember from 'ember';
import {
	module, test
}
from 'qunit';
import startApp from 'sonatribe-ui/tests/helpers/start-app';
import page from '../pages/index';


module('Acceptance | registering', {
	beforeEach: function() {
		this.application = startApp();
	},

	afterEach: function() {
		Ember.run(this.application, 'destroy');
	}
});

test('user can register', function(assert) {
	 assert.expect(1);
	 page.visit()
	 	.openLogin()
	 	.loginPanel()
		.registrationPanel()
	 	.username('wayne-o')
		.email('wayne@prjatk.com')
		.register()
		.then(function() {
			assert.equal(page.loginPanel().successMessage(), 'check your email!');
		});
});
