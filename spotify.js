//------------------------------------------//
//             Spotify API Call             //
//------------------------------------------//
// When the user searches for a track via   //
// Spotify, data is served back as a JSON   //
// object and parsed, where we manipulate   //
// it for display in our application.       //
//------------------------------------------//

const Spotify = require('node-spotify-api');
const chalk = require('chalk');

const log = console.log;
const keys = require("./keys.js")
const logger = require("./logger.js");

const spotify = new Spotify(keys.spotifyKeys)

var getSpotify = (err, data) => {
    if (err) {
        return log(`Oops! There was an error: ${err}`);
    }

    let artist = data.tracks.items[0].artists[0].name
    let songName = data.tracks.items[0].name
    let album = data.tracks.items[0].album.name
    let preview = data.tracks.items[0].preview_url

    log(chalk.yellow('\nResults:'));
    log(chalk.green("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"))
    log(chalk.cyan("Artist: ") + `${artist}`)
    log(chalk.cyan("Song Name: ") + `${songName}`)
    log(chalk.cyan("Album: ") + `${album}`)
    log(chalk.cyan("Preview URL: ") + `${preview}`)
    log(chalk.green("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"))

    let output = `\nSpotify Search: ${songName}, ${artist}\n~~~~~~~~~~~~~~~~~~~~~~~~~`

    logger(output)
}

module.exports = getSpotify;