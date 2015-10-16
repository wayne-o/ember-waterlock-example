/* jshint node: true */

module.exports = function(environment) {
	var ENV = {
		modulePrefix: 'sonatribe-ui',
		environment: environment,
		podModulePrefix: 'sonatribe-ui/pods',
		baseURL: '/',
		locationType: 'auto',
		torii: {
			sessionServiceName: 'toriiSession',
			providers: {
				'google-oauth2': {
					apiKey: process.env.GOOGLE_OAUTH2_APIKEY,
					redirectUri: process.env.GOOGLE_OAUTH2_REDIRECT
				},
				'facebook-oauth2': {
					apiKey: process.env.FACEBOOK_OAUTH2_APIKEY
				}
			}
		},
		EmberENV: {
			FEATURES: {
				// Here you can enable experimental features on an ember canary build
				// e.g. 'with-controller': true
			}
		},

		APP: {
			SAILS_LOG_LEVEL: 'debug',
			// Here you can pass flags/options to your application instance
			// when it is created
		}
	};

	ENV['simple-auth'] = {
		//session: 'session:custom',
		authorizer: 'simple-auth-authorizer:token'
	};

	ENV['sonatribe'] = {
		apiUrl: process.env.SONATRIBE_API_URL,
		enableAuthProxy: process.env.ENABLE_AUTH_PROXY
	};

	ENV['simple-auth-token'] = {
		refreshAccessTokens: true,
		tokenExpireName: 'exp',
		timeFactor: 1,
		refreshLeeway: 300,
		identificationField: 'username',
		tokenPropertyName: 'access_token',
		serverTokenEndpoint: process.env.SERVER_TOKEN_ENDPOINT,
		serverTokenRefreshEndpoint: process.env.SERVER_TOKEN_REFRESH_ENDPOINT
	};

	if (environment === 'development') {
		// ENV.APP.LOG_RESOLVER = true;
		// ENV.APP.LOG_ACTIVE_GENERATION = true;
		// ENV.APP.LOG_TRANSITIONS = true;
		// ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
		// ENV.APP.LOG_VIEW_LOOKUPS = true;
	}

	if (environment === 'c9') {


	}

	if (environment === 'test') {
		// Testem prefers this...
		ENV.baseURL = '/';
		ENV.locationType = 'none';

		// keep test console output quieter
		ENV.APP.LOG_ACTIVE_GENERATION = false;
		ENV.APP.LOG_VIEW_LOOKUPS = false;

		ENV.APP.rootElement = '#ember-testing';
	}

	if (environment === 'production') {

	}

	ENV.contentSecurityPolicy = {
		'default-src': "'none'  dev.festivaltribe.co.uk:4200",
		'script-src': "'self' 'unsafe-eval' *.googleapis.com maps.gstatic.com dev.festivaltribe.co.uk:1337 dev.festivaltribe.co.uk:4200 dev.festivaltribe.co.uk:49152",
		'font-src': "'self' fonts.gstatic.com",
		'connect-src': "'self' maps.gstatic.com * ws://localhost:1337 ws://localhost:4200  dev.festivaltribe.co.uk:4200 dev.festivaltribe.co.uk:49152",
		'img-src': "'self' *.googleapis.com maps.gstatic.com csi.gstatic.com",
		'style-src': "'self' 'unsafe-inline' fonts.googleapis.com maps.gstatic.com"
	};

	return ENV;
};
