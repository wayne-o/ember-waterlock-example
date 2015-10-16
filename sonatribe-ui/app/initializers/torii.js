import GoogleAuthenticator from 'sonatribe-ui/authenticators/authenticate-google';
import FacebookAuthenticator from 'sonatribe-ui/authenticators/authenticate-facebook';

export default {
  name:   'st-simple-auth-torii',
  before: 'simple-auth',
  initialize: function(container) {
    var torii = container.lookup('torii:main');
    var gAuthenticator = GoogleAuthenticator.create({ torii: torii });
    container.register('authenticator:sonatribe-google', gAuthenticator, { instantiate: false });
    var fAuthenticator = FacebookAuthenticator.create({ torii: torii });
    container.register('authenticator:sonatribe-facebook', fAuthenticator, { instantiate: false });
  }
};
