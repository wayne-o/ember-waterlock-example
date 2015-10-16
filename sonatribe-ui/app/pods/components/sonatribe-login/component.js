import Ember from 'ember';

export default Ember.Component.extend({
	showLogin: true,
	store: null,
	classNames: ['overlay overlay-scale'],
	didInsertElement() {
		this._super();
		Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
	},
	afterRenderEvent() {
		var triggerBttn = Ember.$('#trigger-overlay'),
			overlay = Ember.$('div.overlay'),
			closeBttn = Ember.$('button.overlay-close');
		var transEndEventNames = {
				'WebkitTransition': 'webkitTransitionEnd',
				'MozTransition': 'transitionend',
				'OTransition': 'oTransitionEnd',
				'msTransition': 'MSTransitionEnd',
				'transition': 'transitionend'
			},
			transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
			support = {
				transitions: Modernizr.csstransitions
			};

		function toggleOverlay() {
			if (overlay.hasClass('open')) {

				overlay.removeClass('open');
				overlay.addClass('close');

				var onEndTransitionFn = function(ev) {
					if (support.transitions) {
						if (ev.propertyName !== 'visibility') {
              overlay.removeClass('close');
							return;
						}
						this.off(transEndEventName, onEndTransitionFn);
					}
					overlay.removeClass('close');
				};

				if (support.transitions) {
					overlay.on(transEndEventName, onEndTransitionFn);
				} else {
					onEndTransitionFn();
				}

			} else if (!overlay.hasClass('close')) {
				overlay.addClass('open');
			}
		}

		triggerBttn.on('click', toggleOverlay);
		closeBttn.on('click', toggleOverlay);
	},
	actions: {
		toggleLogin() {
				this.set('showLogin', !this.get('showLogin'));
			},
			authenticateGoogle() {
				this.sendAction('authenticateGoogle');
			},
			authenticateFacebook() {
				this.sendAction('authenticateFacebook');
			},
			authenticate() {
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
