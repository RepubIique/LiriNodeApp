// Spotify
// var keys = require("./keys");
let Spotify = require("node-spotify-api");
// let spotify = new Spotify(keys.spotify);
// require("dotenv").config();
var spotify = new Spotify({
  id: "cc70c7af164a4693996353e56e2182e3",
  secret: "cb0c2ea60dc144158e48062355dc0a1b"
});

//OMDB
let axios = require("axios");
let searchItem = process.argv.slice(3).join("+");
let omdbURL = `http://www.omdbapi.com/?apikey=trilogy&t= + ${searchItem}`;

// let category = process.argv[2];

spotify
  .search({ type: "track", query: "Fireflies" })
  .then(function(response) {
    console.log(response.tracks.items[0].album;
  })
  .catch(function(err) {
    console.log(err);
  });

// switch (category) {
//   case "movie-this":
//     axios
//       .get(omdbURL)
//       .then(function(response) {
//         console.log("Searching for movies...\n");

//         console.log("~~~~~~~~~~~~~~~~~~~~~~~");
//         console.log("Movie Title: " + response.data.Title);
//         console.log("Year Made: " + response.data.Year);
//         console.log("IMDB Rating: " + response.data.Ratings[0].Value);
//         console.log("Rotten Tomato Rating: " + response.data.Ratings[1].Value);
//         console.log("Country of Production: " + response.data.Country);
//         console.log("Language of Movie: " + response.data.Language);
//         console.log("Actors in Movie: " + response.data.Actors);
//         console.log("~~~~~~~~~~~~~~~~~~~~~~~\n");
//       })
//       .catch(function(error) {
//         console.log(error);
//       });
//     break;

//   case "spotify-this-song":
//     console.log("... Searching up songs ...");
//     spotify
//       .search({ type: "track", query: "All the Small Things" })
//       .then(function(response) {
//         console.log(response);
//       })
//       .catch(function(err) {
//         console.log(err);
//       });
//     break;

//   case "concert-this":
//     break;

//   case "do-what-it-says":
//     break;
//   default:
// }
