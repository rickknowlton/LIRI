//------------------------------------------//
//              "Simon Says"                //
//------------------------------------------//
// If the user elects to choose the "Simon  //
// Says" option, the simon() function will  //
// read whatever is written in the          //
// "random.txt" file and search Spotify for //
// the track listed (e.g."All Star").       //
//------------------------------------------//

const Spotify = require('node-spotify-api');
const fs = require("file-system");
const chalk = require('chalk');

const log = console.log;
const config = require("./keys")
const getSpotify = require("./spotify.js");
const logger = require("./logger.js");

const spotify = new Spotify(config.spotifyKeys)

const simon = () => {
    fs.readFile("random.txt", "utf8", function (err, data) {

        if (err) {
            log(err)
        }

        let results = data.slice(25)
        log(results)

        spotify.search({
            type: 'track',
            query: results
        }, function (err, data) {
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

            let output = `\nSimon Says: ${songName}, ${artist}\n~~~~~~~~~~~~~~~~~~~~~~~~~`

            logger(output)

        })
    })
}

module.exports = simon;