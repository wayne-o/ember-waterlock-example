import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  username: DS.attr('string'),
  user: DS.belongsTo('user', { async: true, inverse: 'auth' }),
});
