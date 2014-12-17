var fs = require('fs');
var parks = require('./episodes/parks.json');
var psych = require('./episodes/psych.json');


/**
 * GET /
 * Parks & Recreation
 */

exports.getParks = function(req, res) {
  // var parks = JSON.parse(fs.readFileSync('parks.json', 'utf8'));
  var j = Math.floor(Math.random()*parks.episodes.length);
  var episode = parks.episodes[j];
  res.render('shows/parks-and-rec', {
    title: 'Parks & Recreation',
    pageURL: './parks-and-rec',
    color: parks.color,
    banner: parks.banner,
    season: episode.season,
    episode: episode.episode,
    url: episode.url,
    name: episode.title
  });
};


/**
 * GET /
 * Psych
 */

exports.getPsych = function(req, res) {
  // var parks = JSON.parse(fs.readFileSync('parks.json', 'utf8'));
  var j = Math.floor(Math.random()*psych.episodes.length);
  var episode = parks.episodes[j];
  res.render('shows/psych', {
    title: 'Psych',
    pageURL: './psych',
    color: parks.color,
    banner: parks.banner,
    season: episode.season,
    episode: episode.episode,
    url: episode.url,
    name: episode.title
  });
};
