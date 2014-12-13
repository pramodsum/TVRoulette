import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  season: DS.attr('number'),
  episode: DS.attr('number'),
  url: DS.attr('string')
});
