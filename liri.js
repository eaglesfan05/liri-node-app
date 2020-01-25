const axios = require("axios");
dotenv = require("dotenv").config();
// var key = require("./keys.js");
// var spotify = new spotify(keys.spotify);

//API call to ombd api//
function movieInfo(moviename){
    axios.get(`https://www.omdbapi.com/?t=${moviename}&apikey=trilogy`)
  .then(function(res) {
    console.log(res.data);
  })
}movieInfo("Titanic");