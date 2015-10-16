import Ember from 'ember';
/* jshint ignore:start */
import {
	observes
}
from 'ember-computed-decorators';
/* jshint ignore:end */
import config from '../../../config/environment';

export default Ember.Component.extend({
	registrationSent: false,
	store: null,
	/* jshint ignore:start */
	@observes('identification')
	/* jshint ignore:end */
	checkEmailTaken() {
		Ember.$.get(config.sonatribe.apiUrl + '/auths/emailExists?email=' + this.get('identification'))
			.then((res) => {
				Ember.run(this, function() {
					if (res === true) {
						this.set('emailInUse', true);
					} else {
						this.set('emailInUse', false);
					}
				});
			});
	},
	/* jshint ignore:start */
	@observes('username')
	/* jshint ignore:end */
	checkUsernameTaken() {
		Ember.$.get(config.sonatribe.apiUrl + '/auths/usernnameExists?username=' + this.get('username'))
			.then((res) => {
				Ember.run(this, function() {
					if (res === true) {
						this.set('usernameInUse', true);
					} else {
						this.set('usernameInUse', false);
					}
				});
			});
	},
	actions: {
		toggleLogin() {
				this.sendAction('toggleLogin');
			},
			createUser() {

				if (this.get('emailInUse') || this.get('usernameInUse')) {
					return;
				}

				Ember.$.get(config.sonatribe.apiUrl + '/auths/generateRegistrationCode?username=' + this.get('username') + '&email=' + this.get('identification'))
					.then(() => {
						Ember.run(this, function() {
							this.set('registrationSent', true);
						});
					});

				this.set('registrationSent', true);
			}
	}
});
