var request = require('request');
var Twit = require('twit');

var config = require('./config');

var twit = new Twit({
  consumer_key: config.CONSUMER_KEY,
  consumer_secret: config.CONSUMER_SECRET,
  access_token: config.ACCESS_TOKEN,
  access_token_secret: config.ACCESS_TOKEN_SECRET,
  timeout_ms: 60*1000
});

module.exports = {
  post: function (data) {
    if (process.env.NODE_ENV === 'production') {
      return twit.post('statuses/update', {
        status: data
      });
    } else {
      console.log('(debug) post tweet: "' + data + '"');
      return Promise.resolve();
    }
  }
};