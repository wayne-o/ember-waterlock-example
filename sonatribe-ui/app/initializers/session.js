import Ember from 'ember';
import Session from 'simple-auth/session';

export function initialize(container) {
  Session.reopen({
    currentUser: Ember.computed('isAuthenticated', function() {
      if(this.get('isAuthenticated')){
        // triggers API call to /api/v1/users/current
        return container.lookup('store:main').find('user', 'current');
      }
    })
  });
}

export default {
  name: 'session',
  before: 'simple-auth',
  initialize: initialize
};
