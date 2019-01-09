require("dotenv").config();

var axios = require("axios");
var moment = require("moment");
var keys = require("./keys");
// var artist = require("node-bandsintown-api");
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

// function concertSearch() {
//   console.log("this is the concert search function");

//   axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
//     .then(function (response) {
//       console.log(response);
      // console.log("Name of the venue: " + response.data.name);
      // console.log("Venue location: " + response.data.location);
      // console.log("Date of the event: " + response.data.date);

    // })
    // This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

    // Name of the venue
    // Venue location
    // Date of the Event (use moment to format this as "MM/DD/YYYY")

    // .catch(function (error) {
    //   console.log(error);
    // });
// };

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

      console.log("Song Name: " + data.tracks.items[i].name);
      console.log("Artist: " + data.tracks.items[i].artists[0].name);
      console.log("Album: " + data.tracks.items[i].album.name);
      console.log("Link to Album: " + data.tracks.items[i].preview_url);

    }

  });
};

function movieSearch() {
  console.log(searchTerm);
  axios.get('http://www.omdbapi.com/?t=' + searchTerm + '&apikey=1a9da948')
    .then(function (response) {
      // console.log(response);
      console.log("Title: " + response.data.Title);
      console.log("Year: " + response.data.Year);
      console.log("IMDB Rating: " + response.data.imdbRating);
      console.log("Rotten Tomatoes Rating: " + response.data.Ratings);
      console.log("Country: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Plot:" + response.data.Plot);
      console.log("Actors: " + response.data.Actors);


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