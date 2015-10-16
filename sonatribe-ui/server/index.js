// To use it create some files under `mocks/`
// e.g. `server/mocks/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };
//import config from '../config/environment';

module.exports = function(app) {
	if (process.env.ENABLE_AUTH_PROXY) {
    console.log('enabling proxy');

		var globSync = require('glob')
			.sync;
		var mocks = globSync('./mocks/**/*.js', {
				cwd: __dirname
			})
			.map(require);
		var proxies = globSync('./proxies/**/*.js', {
				cwd: __dirname
			})
			.map(require);

		// Log proxy requests
		var morgan = require('morgan');
		app.use(morgan('dev'));


		mocks.forEach(function(route) {
			route(app);
		});
		proxies.forEach(function(route) {
			route(app);
		});
	}else {
	    console.log('not enabling proxy - skipping')
	}
};
