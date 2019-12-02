require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

// Spotify
let Spotify = require("node-spotify-api");

//OMDB
let axios = require("axios");
let searchItem = process.argv.slice(3).join("+");
let omdbURL = `http://www.omdbapi.com/?apikey=trilogy&t= + ${searchItem}`;

let category = process.argv[2];

switch (category) {
  case "movie-this":
    axios
      .get(omdbURL)
      .then(function(response) {
        console.log(response.data.Title);
      })
      .catch(function(error) {
        console.log(error);
      });
    break;

  case "spotify-this-song":
    break;
  default:
}
