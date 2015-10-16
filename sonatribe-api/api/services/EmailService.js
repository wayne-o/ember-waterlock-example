var transport = require('waterlock-local-auth')
	.transport;
var path = require('path');
var jade = require('jade');

module.exports = {
  getHtml: function(viewVars, f) {
		var templatePath = path.normalize(__dirname + '../' + f);
		var html = jade.renderFile(templatePath, viewVars);
		return html;
	},
	sendRegistrationConfirmationEmail: function(options, done) {
		var mailOptions = {
			to: options.email,
			username: options.username,
			from: sails.config.emailService.from,
			subject: sails.config.emailService.confirmRegistration.subject,
			text: this.getHtml({
				url: sails.config.appUrl + options.token
			}, sails.config.emailService.confirmRegistration.template.file),
			html: this.getHtml({
				url: sails.config.appUrl + options.token
			}, sails.config.emailService.confirmRegistration.template.file)
		};

		transport.sendMail(mailOptions, function(error, response) {
			if (error) {
        console.log('error: ' + error);
				done(error);
			} else {
				console.log('Message sent');
			}
			done();
		});
	}
};
