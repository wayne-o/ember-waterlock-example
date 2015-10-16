import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user', { async: true, inverse: 'auth' }),
  successful: DS.attr(),
  ip: DS.attr(),
  port: DS.attr(),
  createdAt: DS.attr(),
  updatedAt: DS.attr()
});
