/**
 * AuthController
 *
 * @module      :: Controller
 * @description	:: Provides the base authentication
 *                 actions used to make waterlock work.
 *
 * @docs        :: http://waterlock.ninja/documentation
 */
var jwt = require('jwt-simple');

module.exports = require('waterlock')
	.waterlocked({
		processRegistrationCode: function(req, res){
			var token = req.param("token") || '';

			if (token === '') {
				return res.badRequest('token is required');
			}

			var decoded = jwt.decode(token, sails.config.jwtSecret);

			return res.ok(decoded);

		},
		generateRegistrationCode: function(req, res) {
      var username = req.param("username") || '';
      var email = req.param("email") || '';

      if (username === '' || email === '') {
        return res.badRequest('username and email are required');
      }

			var token = jwt.encode({
				email: email,
        username: username
			}, sails.config.jwtSecret);

			EmailService.sendRegistrationConfirmationEmail({
				email: email,
				username: username,
				token: token
			}, function(){
				console.log('email sent')
			});

      return res.ok();
		},
		usernnameExists: function(req, res) {
			var username = req.param("username") || '';
			User.findOne()
				.where({
					username: username
				})
				.then(function(user) {
					if (user) {
						return res.ok(true);
					} else {
						return res.ok(false);
					}
				});
		},
		emailExists: function(req, res) {
			var email = req.param("username") || '';
			User.findOne()
				.where({
					email: email
				})
				.then(function(user) {
					if (user) {
						return res.ok(true);
					} else {
						return res.ok(false);
					}
				});
		}
	});
