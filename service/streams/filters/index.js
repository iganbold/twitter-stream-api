var streamFilter = function(io) {

    var filter = function(tweet) {
        console.log(tweet.user.screen_name+' : '+tweet.text);
        io.emit("twitter", tweet.user.screen_name);
    }

    return {
      filter: filter
    };
}

module.exports = streamFilter;
