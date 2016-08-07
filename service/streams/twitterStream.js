var Twitter = require('twitter');

var streamFilter = require('./filters');
var streamError = require('./error');

var streamParameters = {
    track: '#clthack, @clt_hack'
}

var client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

var streamTwitter = function(io){
  client.stream('statuses/filter', streamParameters, function(stream) {
      stream.on('data', streamFilter(io).filter);
      stream.on('error', streamError);
  });
}

module.exports = streamTwitter;
