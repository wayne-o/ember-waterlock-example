import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['menu-wrap'],
	didInsertElement() {
		this._super();
		Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
	},
	afterRenderEvent() {
		var bodyEl = Ember.$(document.body),
			content = Ember.$('.content-wrap'),
			openbtn = Ember.$('#open-button'),
			closebtn = Ember.$('#close-button'),
			isOpen = false;

		function init() {
			initEvents();
		}

		function initEvents() {
			openbtn.on('click', toggleMenu);
			if (closebtn) {
				closebtn.on('click', toggleMenu);
			}

			// close the menu element if the target it´s not the menu element or one of its descendants..
			content.on('click', function(ev) {
				var target = ev.target;
				if (isOpen && target !== openbtn) {
					toggleMenu();
				}
			});
		}

		function toggleMenu() {
			if (isOpen) {
				bodyEl.removeClass('show-menu');
			} else {
				bodyEl.addClass('show-menu');
			}
			isOpen = !isOpen;
		}

		init();
	},
	actions: {
		logout() {
			this.get('session')
				.invalidate();
		}
	}
});
