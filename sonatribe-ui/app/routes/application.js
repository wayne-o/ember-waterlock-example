import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions:{
    authenticateGoogle(){
      this.get('session').authenticate('authenticator:sonatribe-google', 'google-oauth2');
    },
    authenticateFacebook(){
      this.get('session').authenticate('authenticator:sonatribe-facebook', 'facebook-oauth2');
    }
  }
});
