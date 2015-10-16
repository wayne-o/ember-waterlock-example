/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

	/***************************************************************************
	 * Set the default database connection for models in the development       *
	 * environment (see config/connections.js and config/models.js )           *
	 ***************************************************************************/

	// models: {
	//   connection: 'someMongodbServer'
	// }

	// waterlock: {
	// 	pluralizeEndpoints: true,
	//
	// 	// Base URL
	// 	//
	// 	// used by auth methods for callback URI's using oauth and for password
	// 	// reset links.
	// 	baseUrl: 'http://dev.festivaltribe.co.uk:4200/api/v1',
	//
	// 	// Auth Method(s)
	// 	//
	// 	// this can be a single string, an object, or an array of objects for your
	// 	// chosen auth method(s) you will need to see the individual module's README
	// 	// file for more information on the attributes necessary. This is an example
	// 	// of the local authentication method with password reset tokens disabled.
	// 	authMethod: [{
	// 		name: 'waterlock-local-auth',
	// 		passwordReset: {
	// 			tokens: true,
	// 			mail: {
	// 				protocol: 'SMTP',
	// 				options: {
	// 					service: 'SendGrid',
	// 					auth: {
	// 						user: '****',
	// 						pass: '****'
	// 					}
	// 				},
	// 				from: 'no-reply@sonatribe.com',
	// 				subject: 'Your password reset!',
	// 				forwardUrl: 'http://dev.festivaltribe.co.uk:4200'
	// 			},
	// 			template: {
	// 				file: '../views/email.jade',
	// 				vars: {}
	// 			}
	// 		},
	// 		createOnNotFound: true
	// 	}, {
	// 		name: 'waterlock-google-auth',
	// 		clientId: '973644927227-om7h1jdqhjduqdqarum11nbqmvimh2sb.apps.googleusercontent.com',
	// 		clientSecret: 'SK2refFvZ42hkUxGbOOPH6JP',
	// 		redirectUri: 'http://dev.festivaltribe.co.uk:4200/login'
	// 			//allow: ['prjatk.com']
	// 	}, {
	// 		name: "waterlock-facebook-auth",
	// 		appId: "787578521258518",
	// 		appSecret: "576db0dc946bf5a0b89dc33abaac0259",
	// 		redirectUri: 'http://dev.festivaltribe.co.uk:4200/login'
	// 	}],
	//
	// 	// JSON Web Tokens
	// 	//
	// 	// this provides waterlock with basic information to build your tokens,
	// 	// these tokens are used for authentication, password reset,
	// 	// and anything else you can imagine
	// 	jsonWebTokens: {
	//
	// 		// CHANGE THIS SECRET
	// 		secret: 'this is my secret',
	// 		expiry: {
	// 			unit: 'days',
	// 			length: '7'
	// 		},
	// 		audience: 'app name',
	// 		subject: 'subject',
	//
	// 		// tracks jwt usage if set to true
	// 		trackUsage: true,
	//
	// 		// if set to false will authenticate the
	// 		// express session object and attach the
	// 		// user to it during the hasJsonWebToken
	// 		// middleware
	// 		stateless: true,
	//
	// 		// set the name of the jwt token property
	// 		// in the JSON response
	// 		tokenProperty: 'access_token',
	//
	// 		// set the name of the expires property
	// 		// in the JSON response
	// 		expiresProperty: 'expires',
	//
	// 		// configure whether or not to include
	// 		// the user in the respnse - this is useful if
	// 		// JWT is the default response for succesfull login
	// 		includeUserInJwtResponse: true
	// 	},
	//
	// 	// Post Actions
	// 	//
	// 	// Lets waterlock know how to handle different login/logout
	// 	// attempt outcomes.
	// 	postActions: {
	//
	// 		// post login event
	// 		login: {
	//
	// 			// This can be any one of the following
	// 			//
	// 			// url - 'http://example.com'
	// 			// relativePath - '/blog/post'
	// 			// obj - {controller: 'blog', action: 'post'}
	// 			// string - 'custom json response string'
	// 			// default - 'default'
	// 			success: 'jwt',
	//
	// 			// This can be any one of the following
	// 			//
	// 			// url - 'http://example.com'
	// 			// relativePath - '/blog/post'
	// 			// obj - {controller: 'blog', action: 'post'}
	// 			// string - 'custom json response string'
	// 			// default - 'default'
	// 			failure: 'default'
	// 		},
	//
	// 		//post logout event
	// 		logout: {
	//
	// 			// This can be any one of the following
	// 			//
	// 			// url - 'http://example.com'
	// 			// relativePath - '/blog/post'
	// 			// obj - {controller: 'blog', action: 'post'}
	// 			// string - 'custom json response string'
	// 			// default - 'default'
	// 			success: 'default',
	//
	// 			// This can be any one of the following
	// 			//
	// 			// url - 'http://example.com'
	// 			// relativePath - '/blog/post'
	// 			// obj - {controller: 'blog', action: 'post'}
	// 			// string - 'custom json response string'
	// 			// default - 'default'
	// 			failure: 'default'
	// 		},
	// 		// post register event
	// 		register: {
	// 			// This can be any one of the following
	// 			//
	// 			// url - 'http://example.com'
	// 			// relativePath - '/blog/post'
	// 			// obj - {controller: 'blog', action: 'post'}
	// 			// string - 'custom json response string'
	// 			// default - 'default'
	// 			success: 'default',
	// 			// This can be any one of the following
	// 			//
	// 			// url - 'http://example.com'
	// 			// relativePath - '/blog/post'
	// 			// obj - {controller: 'blog', action: 'post'}
	// 			// string - 'custom json response string'
	// 			// default - 'default'
	// 			failure: 'default'
	// 		}
	// 	}
	// }

};
