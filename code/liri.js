//------------------------------------------//
//               NPM Packages               //
//------------------------------------------//

const Twitter = require('twitter');
const Spotify = require('node-spotify-api');
const request = require("request");
const fs = require("file-system");
const inquirer = require("inquirer");
const figlet = require('figlet');
const chalk = require('chalk');


//------------------------------------------//
//      Module Imports/Misc. Variables      //
//------------------------------------------//

const log = console.log;
const keys = require("./keys.js");
const logger = require("./logger.js");
const simon = require("./simon.js");
const getTweets = require("./twitter.js");
const getOMDB = require("./omdb.js");
const getSpotify = require("./spotify.js");


//------------------------------------------//
//             API Connections              //
//------------------------------------------//

const twitter = new Twitter(keys.twitterKeys)
const spotify = new Spotify(keys.spotifyKeys)


//------------------------------------------//
//                 Greeting                 //
//------------------------------------------//

log(chalk.cyan(figlet.textSync('LiriBot', {font: 'isometric3', horizontalLayout: 'full'})));
    

//------------------------------------------//
//           LiriBot Application            //
//------------------------------------------//
// We start up our Liri application with an //
// inquirer prompt that gives the user a    //
// list of options to choose from via up or //
// down arrow keys. Then, depending on the  //
// answer the user provides we use an if    //
// statement to retrieve the appropriate    //
// data. If the user neglects to input a    //
// response a default is retrieved. After a //
// result is generated the user is prompted //
// again if they'd like to do another       //
// search - if not the application closes.  //
//------------------------------------------//

const liri = () => {
  
    inquirer.prompt([
        
        {
            name: "route",
            message: "Welcome to LiriBot! How can I help you?",
            type: "list",
            choices: ["Search Spotify for a Song", "Find a Movie", "Check Out #WeirdTwitter", "Simon Says"]
        },
        {
            name: "twitter",
            message: "Are you sure you want to #WeirdTwitter?",
            type: "confirm",
            when: (answers) => {
                return answers.route === "Check Out #WeirdTwitter"
            }
        },
        {
            name: "spotify",
            message: "What song would you like to search for?",
            when: (answers) => {
                return answers.route === "Search Spotify for a Song"
            }
        },
        {
            name: "movie",
            message: "What movie would you like to search for?",
            when: (answers) => {
                return answers.route ===  "Find a Movie"
            }
        },


    ]).then((answers) =>{

            if(answers.twitter){
                twitter.get('statuses/user_timeline', {screen_name: 'dril'}, getTweets)
                setTimeout(restate, 1000)
            }
            else if(answers.spotify){
                spotify.search({type: 'track', query: answers.spotify}, getSpotify)
                setTimeout(restate, 1000)
            }
            else if(!answers.movie && answers.route === "Find a Movie") {
                request("http://www.omdbapi.com/?t=The+Room&y=&plot=short&apikey=trilogy", getOMDB);
                setTimeout(restate, 1000)  
            }
            else if(!answers.spotify && answers.route === "Search Spotify for a Song") {
                spotify.search({type: 'track', query: "We Like to Party! (The Vengabus)"}, function(err, data) {
                    if (err) {
                        return log(`Oops! There was an error: ${err}`);
                }
                        let artist = data.tracks.items[4].artists[0].name;
                        let songName = data.tracks.items[4].name;
                        let preview = data.tracks.items[4].preview_url;
                        let album = data.tracks.items[4].album.name;

                        log(chalk.yellow('\nResults:'));
                        log(chalk.green("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"))
                        log(chalk.cyan("Artist: ") + `${artist}`)
                        log(chalk.cyan("Song Name: ") + `${songName}`)
                        log(chalk.cyan("Album: ") + `${album}`)
                        log(chalk.cyan("Preview URL: ") + `${preview}`)
                        log(chalk.green("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"))

                        let output = `\nSpotify Search: ${songName}, ${artist}\n~~~~~~~~~~~~~~~~~~~~~~~~~` 

                        logger(output)
                
                    })
                setTimeout(restate, 1000)
            }
            else if (answers.movie) {
                request(`http://www.omdbapi.com/?t=${answers.movie}&y=&plot=short&apikey=trilogy`, getOMDB);
                setTimeout(restate, 1000)
            }
            else if(answers.route) {
                simon()
                setTimeout(restate, 1000)
            }

    })
}

liri()

var restate = () => {
    inquirer.prompt([
        {
            name: "restate",
            message: "Would you like to do another search?",
            type: "confirm"
        }
    ]).then((answers) => {
        if (answers.restate) {
            liri()
        } else {
            log(chalk.bold.green("LiriBot Out!"))
        }
    })
}


