//------------------------------------------//
//             Twitter API Call             //
//------------------------------------------//
// When the chooses to display their Tweets //
// thru the Twitter API, data is served     //
// back to us as a JSON object and parsed,  //
// where we manipulate it for display in    //
// our application.                         //
//------------------------------------------//

const Twitter = require('twitter');
const chalk = require('chalk');

const log = console.log;
const keys = require("./keys.js")
const logger = require("./logger.js");

const twitter = new Twitter(keys.twitterKeys)

const getTweets = (err, tweets, res) => {
    if (!err) {
        let dataArray = tweets
        for (let i = 0; i < dataArray.length; i++) {
            let date = tweets[i].created_at;
            let tweet = tweets[i].text;
            var handle = tweets[i].user.name;
            log(chalk.cyan(date));
            log('')
            log(tweet)
            log(`-${handle}`)
            log(chalk.green("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"))
        }
        let output = `\nTwitter Search: ${handle} Tweets \n~~~~~~~~~~~~~~~~~~~~~~~~~`
        logger(output)
    }
}

module.exports = getTweets;