var mongoose = require('mongoose');

var showSchema = new mongoose.Schema({
  sid: Number, 
  name: String,
  numEpisodes: Number,
  currentEpisode: Number,
  episodes: [{type: mongoose.Scheme.Types.ObjectId, ref:'Episode'}]
});

showSchema.statics.random = function(callback) {
  this.episodes.count(function(err, count) {
    if (err) {
      return callback(err);
    }
    var rand = Math.floor(Math.random() * count);
    this.episodes.findOne().skip(rand).exec(callback);
  }.bind(this.episodes));
};

showSchema.methods.getNextEpisode = function(cb) {
  var show = this;
  var index = Math.floor(Math.random() * show.numEpisodes) + 1;
  return index;
};

module.exports = mongoose.model('Show', showSchema);
