/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    babel: {
      optional: ['es7.decorators']
    },
    dotEnv: {
      clientAllowedKeys: ['GOOGLE_OAUTH2_APIKEY', 'GOOGLE_OAUTH2_REDIRECT', 'FACEBOOK_OAUTH2_APIKEY'],
      path: {
        development: './environments/development/.env',
        test: './environments/test/.env',
        c9: './environments/c9/.env',
        production: './environments/production/.env'
      }
    }
  });

  app.import('vendor/classie.js');
  app.import('vendor/modernizr.custom.js');
  app.import('bower_components/font-awesome/css/font-awesome.css');

  app.import(app.bowerDirectory + '/bootstrap/dist/js/bootstrap.min.js');
  app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.min.css');

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
