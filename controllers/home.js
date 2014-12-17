/**
 * GET /
 * Home page.
 */

var shows = [
  {name: 'Community', url: '/shows/community', img: 'http://turntherightcorner.files.wordpress.com/2012/01/nbc-community-logo-title.jpg'},
  {name: 'Psych', url: '/shows/psych', img: 'http://4.bp.blogspot.com/-MJxqn9xUQ9M/Utb7f95aLFI/AAAAAAAAAC4/Ohnqui3-AtA/s1600/Psych.jpg'}, 
  // {name: 'Chuck', url: '`/shows/chuck', img: 'http://i.kinja-img.com/gawker-media/image/upload/s--HT-g0XuV--/18wbuapxiddowjpg.jpg'}, 
  {name: 'Parks & Recreation', url: '/shows/parks-and-rec', img: 'http://www.nbc.com/sites/nbcunbc/files/files/2013_0808_Parks_and_Rec_Show_KeyArt_1920x1080_0.jpg'}
  // {name: '30 Rock', url: '/shows/30Rock', img: 'http://prothro.files.wordpress.com/2009/10/key_art_30_rock.jpg'}
];

exports.index = function(req, res) {
  res.render('home', {
    title: 'Home',
    shows: shows,
  });
};

// /**
//  * GET /
//  * Parks & Recreation
//  */

// var parks = {
//   title: 'Parks and Recreation',
//   episodes: [
//     {title: 'Pilot', episode: '1', season: '1', url: 'http://allmyvideos.net/embed-mqy3a44ufx7l.html'},
//     {title: '', episode: '1', season: '2', url: 'http://allmyvideos.net/embed-m6vsf66f44sl.html'},
//     {title: '', episode: '1', season: '3', url: 'http://allmyvideos.net/embed-pg78qln5eyui.html'},
//     {title: '', episode: '1', season: '4', url: 'http://allmyvideos.net/embed-m7812pt595f6.html'},
//     {title: '', episode: '1', season: '5', url: 'http://allmyvideos.net/embed-2q1yqcpktnb3.html'},
//     {title: '', episode: '1', season: '6', url: 'http://allmyvideos.net/embed-xn7gb87jowmb.html'}
//   ]
// };

// exports.getParks = function(req, res) {
//   var j = Math.floor(Math.random()*parks.episodes.length);
//   var episode = parks.episodes[j];
//   res.render('parks-and-rec', {
//     title: 'Parks & Recreation',
//     season: episode.season,
//     episode: episode.episode,
//     url: episode.url,
//     title: episode.title
//   });
// };

