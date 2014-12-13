import Ember from 'ember';

export default Ember.Controller.extend({
  name: null,
  season: null,
  episode: null,
  url: null,
  actions: {
    createUser: function() {
      this.store.createRecord('episdoe', {
        name: this.get('name'),
        season: parseInt(this.get('season'), 10),
        episode: parseInt(this.get('episode'), 10),
        url: this.get('url')
      }).save();

      this.setProperties({
        name: null,
        season: null,
        episode: null,
        url: null,
      });
    }
  }
});
