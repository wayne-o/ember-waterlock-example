module.exports = {
  jwtSecret: '**s0natr!be s3cr3t keyz y3a4**',
  appUrl: 'http://dev.festivaltribe.co.uk:4200/confirm-account/',
	emailService: {
		protocol: 'SMTP',
		options: {
			service: 'SendGrid',
			auth: {
				user: 'wayne-o',
				pass: 'William2014'
			}
		},
		from: 'no-reply@sonatribe.com',

	   confirmRegistration: {
			subject: 'Please confirm your account on sonatribe!',
			template: {
				file: '../templates/confirm-account.jade',
				vars: {}
			}
		}
	}
}
