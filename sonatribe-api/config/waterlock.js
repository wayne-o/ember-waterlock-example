
module.exports.waterlock = {
  pluralizeEndpoints: true,

  // Base URL
  //
  // used by auth methods for callback URI's using oauth and for password
  // reset links.
  baseUrl: 'http://dev.festivaltribe.co.uk:4200/api/v1',

  // Auth Method(s)
  //
  // this can be a single string, an object, or an array of objects for your
  // chosen auth method(s) you will need to see the individual module's README
  // file for more information on the attributes necessary. This is an example
  // of the local authentication method with password reset tokens disabled.
  authMethod: [
    {
      name:'waterlock-local-auth',
      passwordReset:{
        tokens: true,
        mail: {
          protocol: 'SMTP',
          options:{
            service: 'SendGrid',
            auth: {
              user: 'wayne-o',
              pass: 'William2014'
            }
          },
          from: 'no-reply@sonatribe.com',
          subject: 'Your password reset!',
          forwardUrl: 'http://dev.festivaltribe.co.uk:4200'
        },
        template:{
          file: '../views/email.jade',
          vars:{}
        }
      },
      createOnNotFound: true
    },
    {
      name: 'waterlock-google-auth',
      clientId: '',
      clientSecret: '',
      redirectUri: 'http://dev.festivaltribe.co.uk:4200/login'
      //allow: ['prjatk.com']
    },
    {
      name: "waterlock-facebook-auth",
      appId: "",
      appSecret: "",
      redirectUri: 'http://dev.festivaltribe.co.uk:4200/'
    }
  ],

  // JSON Web Tokens
  //
  // this provides waterlock with basic information to build your tokens,
  // these tokens are used for authentication, password reset,
  // and anything else you can imagine
  jsonWebTokens:{

    // CHANGE THIS SECRET
    secret: 'this is my secret',
    expiry:{
      unit: 'days',
      length: '7'
    },
    audience: 'app name',
    subject: 'subject',

    // tracks jwt usage if set to true
    trackUsage: true,

    // if set to false will authenticate the
    // express session object and attach the
    // user to it during the hasJsonWebToken
    // middleware
    stateless: true,

    // set the name of the jwt token property
    // in the JSON response
    tokenProperty: 'access_token',

    // set the name of the expires property
    // in the JSON response
    expiresProperty: 'expires',

    // configure whether or not to include
    // the user in the respnse - this is useful if
    // JWT is the default response for succesfull login
    includeUserInJwtResponse: true
  },

  // Post Actions
  //
  // Lets waterlock know how to handle different login/logout
  // attempt outcomes.
  postActions:{

    // post login event
    login: {

      // This can be any one of the following
      //
      // url - 'http://example.com'
      // relativePath - '/blog/post'
      // obj - {controller: 'blog', action: 'post'}
      // string - 'custom json response string'
      // default - 'default'
      success: 'jwt',

      // This can be any one of the following
      //
      // url - 'http://example.com'
      // relativePath - '/blog/post'
      // obj - {controller: 'blog', action: 'post'}
      // string - 'custom json response string'
      // default - 'default'
      failure: 'default'
    },

    //post logout event
    logout: {

      // This can be any one of the following
      //
      // url - 'http://example.com'
      // relativePath - '/blog/post'
      // obj - {controller: 'blog', action: 'post'}
      // string - 'custom json response string'
      // default - 'default'
      success: 'default',

      // This can be any one of the following
      //
      // url - 'http://example.com'
      // relativePath - '/blog/post'
      // obj - {controller: 'blog', action: 'post'}
      // string - 'custom json response string'
      // default - 'default'
      failure: 'default'
    },
    // post register event
   register: {
     // This can be any one of the following
     //
     // url - 'http://example.com'
     // relativePath - '/blog/post'
     // obj - {controller: 'blog', action: 'post'}
     // string - 'custom json response string'
     // default - 'default'
     success: 'default',
     // This can be any one of the following
     //
     // url - 'http://example.com'
     // relativePath - '/blog/post'
     // obj - {controller: 'blog', action: 'post'}
     // string - 'custom json response string'
     // default - 'default'
     failure: 'default'
   }
  }
};
