let Spotify = require("node-spotify-api");

//OMDB
let axios = require("axios");
let searchItem = process.argv.slice(2).join("+");
let queryURL = `http://www.omdbapi.com/?apikey=trilogy&t= + ${searchItem}`;

axios
  .get(queryURL)
  .then(function(response) {
    console.log(response.data.Title);
  })
  .catch(function(error) {
    console.log(error);
  });
