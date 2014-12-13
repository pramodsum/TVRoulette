import Ember from 'ember';

export default Ember.ObjectController.extend({
  selected: Ember.computed('parentController.selectedEpisode', function(){
    return this.get('parentController.selectedEpisode') === this.get('model');
  }).readOnly()
});
