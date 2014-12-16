var random = require('mongoose-simple-random');
var mongoose = require('mongoose');

var episodeSchema = new mongoose.Schema({
  sid: Number, 
  show: String,
  season: Number,
  episode: Number, 
  title: String, 
});

// episodeSchema.methods.getShow = function(candidatePassword, cb) {
//   bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//     if (err) { return cb(err); }
//     cb(null, isMatch);
//   });
// };

module.exports = mongoose.model('Episode', episodeSchema);
