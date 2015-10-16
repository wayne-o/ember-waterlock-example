import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		toggleLogin(){
			this.sendAction('toggleLogin');
		},
		authenticateGoogle(){
			this.sendAction('authenticateGoogle');
		},
		authenticateFacebook() {
			this.sendAction('authenticateFacebook');
		},
		authenticate(){
			this.get('session')
				.authenticate('simple-auth-authenticator:token', {
					identification: this.get('identification'),
					password: this.get('password')
				})
				.then(() => {
					return this.sendAction('userAuthenticated');
				});
		}
	}
});
