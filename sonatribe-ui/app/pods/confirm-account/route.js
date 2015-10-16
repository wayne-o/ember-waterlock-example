import Ember from 'ember';
import config from '../../config/environment';

export default Ember.Route.extend({
	model(params) {
			this.set('code', params.code);
		},
		actions: {
			completeRegistration() {
				Ember.$.get(config.sonatribe.apiUrl + '/auths/processRegistrationCode?token=' + this.get('code'))
					.then((res) => {
						Ember.run(this, () => {
							this.get('session')
								.authenticate('simple-auth-authenticator:token', {
									identification: res.username,
									password: this.controller.get('password')
								})
								.then(() => {
									this.store.findRecord('user', this.get("session.secure.user.id"))
										.then((user) => {
											user.set('username', res.username);
											user.set('email', res.email);
											user.save();
											this.set('session.secure.user', user);
											return this.sendAction('userAuthenticated');
										});
								});
						});
					});
			}
		}
});
