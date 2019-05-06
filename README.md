# LIRI
🤖 LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface.


## Table of contents
  * [Installation](#installation)  
  * [How to Use](#how-to)
  * [System Requirements](#requirements)
  * [Local Installation](#installation)
    * [Install With a Virtual Machine](#vm-installation)
    * [Install Without a Virtual Machine](#regular-installation)
  * [Technologies](#technologies)

## <a name="how-to"></a> How to Use
LIRI uses Inquirer.js to help the user navigate thru the application. The app allows the user to find information on songs, artists and albums via Spotify, search for movie reviews and descriptions with Open Movie Database (OMDB), search Twitter, or the user can leave it up to LIRI to decide where to go.

## <a name="requirements"></a> System Requirements
- Terminal, Command Prompt, Bash, or the command line application of your choice
- [Node.js](https://nodejs.org/en/download/)

## <a name="installation"></a> Local Installation
### <a name="vm-installation"></a> Install With a Virtual Machine
There is a Vagrant Ubuntu Shell provided with this repo. For more information on Vagrant click [here](https://www.vagrantup.com/intro/getting-started/).
- Clone or download the repository
- Open the root of the repository in your terminal
- Spin up the virtual machine via `vagrant up`
- Run the `vagrant ssh` command
- Navigate to the vagrant folder by typing `cd /vagrant` and run `npm install`
- Next, navigate to the code folder by typing `cd /code`
- Finally, load LIRI with `node liri`

### <a name="regular-installation"></a> Install Without a Virtual Machine
- Clone or download the repository
- Open the root of the repository in your terminal
- Run the `npm install` command
- Run `node liri` to launch the application

## <a name="technologies"></a> Technologies
- Javascript
- Node
- APIs
    - [Spotify](https://developer.spotify.com/documentation/web-api/)
    - [Twitter](https://developer.twitter.com/en/docs.html)
    - [OMDB](http://www.omdbapi.com/)        
- NPM
    - [Inquirer](https://www.npmjs.com/package/inquirer)    
    - [Node Spotify API](https://www.npmjs.com/package/node-spotify-api)  
    - [Twitter for Node.js](https://www.npmjs.com/package/twitter)  
    - [Moment](https://www.npmjs.com/package/moment)
    - [Request](https://www.npmjs.com/package/request)
    - [File System](https://www.npmjs.com/package/file-system)
    - [Chalk](https://www.npmjs.com/package/chalk)
    - [Figlet](https://www.npmjs.com/package/figlet)


