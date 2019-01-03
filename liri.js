require("dotenv").config();

var axios = require("axios");
var moment = require("moment");
var keys = require("./keys");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var searchTerm = process.argv.splice(3);

// User types in node liri.js and one of these commands
// 1. concert-this 
// 2. spotify-this-song
// 3. movie-this
// 4. do-what-it-says
// After they type one of the commands, they type in a search term
// Based on the command typed, AJAX request will return and print out the return AJAX request in the terminal
// Based on the command, we can do a "switch" statement



switch (command) {
  case "concert-this":
    concertSearch();
    break;

  case "spotify-this-song":
    spotifySearch();
    break;

  case "movie-this":
    movieSearch();
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
  spotify.search({
    type: 'track',
    query: searchTerm
  }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    // console.log(data.tracks.items); 

    for (var i = 0; i < 3; i++) {

      console.log("Song Name " + data.tracks.items[i].name);
      console.log("Artist " + data.tracks.items[i].artists[0].name);
      console.log("Album " + data.tracks.items[i].album.name);
      console.log("Link to Album " + data.tracks.items[i].preview_url);

    }

  });
};

function movieSearch() {
  console.log(searchTerm);
  axios.get('http://www.omdbapi.com/?t=' + searchTerm + '&apikey=1a9da948')
    .then(function (response) {
      console.log(response);
      console.log("Title " + data.Title);
      // console.log("Year " + data.items[i].Year);
      // console.log("IMDB Rating " + data.items[i].imdbRating);
      // console.log("Rotten Tomatoes Rating " + data.items[i].Ratings);
      // console.log("Country " + data.items[i].Country);
      // console.log("Language " + data.items[i].Language);
      // console.log("Plot " + data.items[i].Plot);
      // console.log("Actors " + data.items[i].Actors);


      // * Title of the movie.
      // * Year the movie came out.
      // * IMDB Rating of the movie.
      // * Rotten Tomatoes Rating of the movie.
      // * Country where the movie was produced.
      // * Language of the movie.
      // * Plot of the movie.
      // * Actors in the movie.
    })
    .catch(function (error) {
      console.log(error);
    });
};


function thisWay() {
  console.log("this is the do it this way search function");
};