import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  coalesceFindRequests: true,
  host: config.sonatribe.apiUrl
});
