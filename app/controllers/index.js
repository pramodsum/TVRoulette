import Ember from 'ember';

var sum = Ember.computed.sum;
var mapBy = Ember.computed.mapBy;

export default Ember.ArrayController.extend({
  itemController: 'episode',
  urls: mapBy('@this', 'url'),
  selectedEpisode: null,
  actions: {
    cancel: function(){
      this.set('selectedEpisode', null);
    },
    selectedEpisode: function(episode) {
      this.set('selectedEpisode', episode);
    },
    destroyEpisode: function(model) {
      model.destroyRecord();
    }
  }
});
