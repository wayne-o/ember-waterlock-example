import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  auth: DS.belongsTo('auth', {
		async: true,
		inverse: 'user'
	}),
  email: DS.attr('string')
});
