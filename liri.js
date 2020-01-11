// Spotify
require("dotenv").config();
var keys = require("./keys.js");
let Spotify = require("node-spotify-api");
let spotify = new Spotify(keys.spotify);
let fs = require("fs");

//OMDB
let axios = require("axios");
let searchItem = process.argv.slice(3).join("+");
let omdbURL = `http://www.omdbapi.com/?apikey=trilogy&t= + ${searchItem}`;

//Concert
let concertURL = `https://rest.bandsintown.com/artists/${searchItem}/events?app_id=codingbootcamp`;

let category = process.argv[2];

switch (category) {
  case "movie-this":
    axios
      .get(omdbURL)
      .then(function(response) {
        console.log("Searching for movies...\n");

        console.log("~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("Movie Title: " + response.data.Title);
        console.log("Year Made: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.Ratings[0].Value);
        console.log("Rotten Tomato Rating: " + response.data.Ratings[1].Value);
        console.log("Country of Production: " + response.data.Country);
        console.log("Language of Movie: " + response.data.Language);
        console.log("Actors in Movie: " + response.data.Actors);
        console.log("~~~~~~~~~~~~~~~~~~~~~~~\n");
      })
      .catch(function(error) {
        console.log(error);
      });
    break;

  case "spotify-this-song":
    console.log("... Searching up songs ...");
    spotify
      .search({ type: "track", query: `${searchItem}` })
      .then(function(response) {
        console.log("\n~~~~~~~~~~~~~~~~~~");
        console.log("Artist: " + response.tracks.items[0].album.artists.name);
        console.log("Song: " + response.tracks.items[0].name);
        console.log(
          "URL: " + response.tracks.items[0].album.external_urls.spotify
        );
        console.log("Album: " + response.tracks.items[0].album.name);
        console.log("~~~~~~~~~~~~~~~~~~\n");
      })
      .catch(function(err) {
        console.log(err);
      });

    break;

  case "concert-this":
    axios.get(concertURL).then(function(response) {
      console.log("\n~~~~~~~~~~~~~~~~~~");
      console.log("Name of the Venue: " + response.data[0].venue.name);
      console.log("Venue Location: " + response.data[0].venue.city);
      console.log("Date of Event: " + response.data[0].datetime);
      console.log("~~~~~~~~~~~~~~~~~~\n");
    });

    break;

  case "do-what-it-says":
    fs.readFile("./random.txt", "utf8", (err, data) => {
      if (err) throw err;
      data = data.split(" ");
      cmd = data[0];
      song = data.splice(1, data.length).join(" ");
      console.log(song);
    });

    break;
  default:
}
