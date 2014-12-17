var fs = require('fs');
var parks = require('./episodes/parks.json');
var psych = require('./episodes/psych.json');
var community = require('./episodes/community.json');


/**
 * GET /
 * Parks & Recreation
 */

exports.getParks = function(req, res) {
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
  var j = Math.floor(Math.random()*psych.episodes.length);
  var episode = psych.episodes[j];
  res.render('shows/psych', {
    title: 'Psych',
    pageURL: './psych',
    color: psych.color,
    banner: psych.banner,
    season: episode.season,
    episode: episode.episode,
    url: episode.url,
    name: episode.title
  });
};



/**
 * GET /
 * Community
 */

exports.getCommunity = function(req, res) {
  var j = Math.floor(Math.random()*community.episodes.length);
  var episode = community.episodes[j];
  res.render('shows/community', {
    title: 'Community',
    pageURL: './community',
    color: community.color,
    banner: community.banner,
    season: episode.season,
    episode: episode.episode,
    url: episode.url,
    name: episode.title
  });
};
