//------------------------------------------//
//              OMDB API Call               //
//------------------------------------------//
// When the user searches for a film via    //
// OMDB, data is served back as a JSON      //
// object and parsed, where we manipulate   //
// it for display in our application.       //
//------------------------------------------//

const chalk = require('chalk');

const log = console.log;
const logger = require("./logger.js");

let getOMDB = (err, res, body) => {
    if (!err && res.statusCode === 200) {
        let data = JSON.parse(body)
        let title = data.Title;
        let year = data.Year;
        let imdbRating = data.imdbRating;
        let country = data.Country;
        let language = data.Language;
        let plot = data.Plot;
        let actors = data.Actors;
        let rottenRating = data.Ratings[1].Value;

        log(chalk.yellow('\nResults:'));
        log(chalk.green("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"))
        log(chalk.cyan("Title: ") + `${title}`);
        log(chalk.cyan("Year Released: ") + `${year}`);
        log(chalk.cyan("IMDB Rating: ") + `${imdbRating}`);
        log(chalk.cyan("Produced In: ") + `${country}`);
        log(chalk.cyan("Lanuage(s): ") + `${language}`);
        log(chalk.cyan("Plot: ") + `${plot}`);
        log(chalk.cyan("Actors: ") + `${actors}`);
        log(chalk.cyan("Rotten Tomatoes Rating: ") + `${rottenRating}`);
        log(chalk.green("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"))

        let output = `\nMovie Search: ${title}\n~~~~~~~~~~~~~~~~~~~~~~~~~`

        logger(output)
    }
}

module.exports = getOMDB;