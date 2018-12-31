require("dotenv").config();

var axios = require("axios");
var moment = require("moment");
var keys = require("./keys");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var movie = process.argv[2];
var concertSearch = process.argv[2];

// User types in node liri.js and one of these commands
// 1. concert-this 
// 2. spotify-this-song
// 3. movie-this
// 4. do-what-it-says
// After they type one of the commands, they type in a search term
// Based on the command typed, AJAX request will return and print out the return AJAX request in the terminal
// Based on the command, we can do a "switch" statement

var command = process.argv[2];
var searchTerm = process.argv.splice(3);

switch (command) {
    case "concert-this":
        concertSearch();
        break;

    case "spotify-this-song":
        spotifySearch();
        break;

    case "movie-this":
        movie();
        break;

    case "do-what-it-says":
        thisWay();
        break;
}

function concertSearch() {
    console.log("this is the concert search function");

    axios.get('https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};

function spotifySearch() {
    console.log("this is the Spotify search function");
    spotify.search({ type: 'track', query: searchTerm }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data); 
      });
};

function movie() {
    console.log("this is the movie search function");
    axios.get(' http://www.omdbapi.com/?i=tt3896198&apikey=1a9da948')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};


function thisWay() {
    console.log("this is the do it this way search function");
};