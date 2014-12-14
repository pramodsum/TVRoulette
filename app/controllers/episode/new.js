import Ember from 'ember';

export default Ember.Controller.extend({
  name: null,
  title: null, 
  season: null,
  episode: null,
  url: null,
  actions: {
    createEpisode: function() {
      this.store.createRecord('episode', {
        name: this.get('name'),
        title: this.get('title'),
        season: parseInt(this.get('season'), 10),
        episode: parseInt(this.get('episode'), 10),
        url: this.get('url')
      }).save();

      this.setProperties({
        name: null,
        title: null,
        season: null,
        episode: null,
        url: null,
      });
    }
  }
});
