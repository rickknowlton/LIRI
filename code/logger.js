//------------------------------------------//
//              Logger Module               //
//------------------------------------------//
// This module records all user requests in //
// a log file.                              //
//------------------------------------------//

const fs = require("file-system");
const log = console.log;

const logger = (output) => {
    fs.appendFile("log.txt", output, function(err){
	        if(err) {
		        log(`Oops! There was an error: ${err}`);
	        }
        })
}

module.exports = logger;
