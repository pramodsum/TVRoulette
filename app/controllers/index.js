import Ember from 'ember';

var sum = Ember.computed.sum;
var mapBy = Ember.computed.mapBy;

export default Ember.ArrayController.extend({
  itemController: 'episode',
  urls: mapBy('@this', 'url'),
  selectedEpisode: null,
  actions: {
  }
});
