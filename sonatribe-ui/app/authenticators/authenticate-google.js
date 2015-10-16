import Torii from 'simple-auth-torii/authenticators/torii';
import config from '../config/environment';
import Ember from 'ember';

export default Torii.extend({
	restore(data) {
			var _data = data;
			return new Ember.RSVP.Promise((resolve) => {
				return this._super(data)
					.then((data) => {
						Ember.merge(data, _data);
						resolve(data);
					});
			});
		},
		authenticate(provider, options) {
			return new Ember.RSVP.Promise((resolve, reject) => {
				return this._super(provider, options)
					.then((authResponse) => {
						Ember.run(() => {
              var _this = this;
              var authorizationCode = authResponse.authorizationCode;
              Ember.$.ajax({
                url: config.sonatribe.apiUrl + '/auths/google_oauth2',
                data: { 'code': authorizationCode },
                dataType: 'json',
                success: function(stAuthResponse) {
                  Ember.merge(authResponse, stAuthResponse);
                  _this.resolveWith(provider, authResponse, resolve);
                },
                error: Ember.run.bind(null, reject)
              });
						});
					});
			});
		},
		invalidate() {
			return new Ember.RSVP.Promise((resolve, reject) => {
				this.torii.close(this.provider)
					.then(() => {
						delete this.provider;
						resolve();
					}, reject);
			});
		}
});
