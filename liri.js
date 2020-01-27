const axios = require("axios");
dotenv = require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

//API call to ombd api//
function movieInfo(moviename){
    axios.get(`https://www.omdbapi.com/?t=${moviename}&apikey=trilogy`)
  .then(function(res) {
    console.log(res.data);
  })
}

function spotifyCall(songname){
    spotify.search({ type: 'track', query: songname }, function(err, data) {
        if (err) {
          return console.log("Could not find song with this name.");
        }
       
      //for loop to loop through items array.. if search has no value will return error message//
      if(data.tracks.items.length != 0){
      for(i = 0; i <data.tracks.items.length; i++){
          //song name//
          console.log("Song Name: " + data.tracks.items[i].name);
          //artist name//
          console.log("Artist Name: " + data.tracks.items[i].artists[0].name);
          // preview link//
          console.log("Preview Link: " + data.tracks.items[i].preview_url);
          //album name//
          console.log("Album Name: " + data.tracks.items[i].album.name);
          // console.log(data.tracks.items[i].artists);
      }
    }else{
        console.log("no results for your queuery")
    }
      });
}
  
//remember will have to use process.argv
function start(arg1, arg2){
console.log(arg1, arg2);
if(arg1 === "spotify-this"){
    spotifyCall(arg2)
}else if(arg1 === "movie-this"){
    movieInfo(arg2)
}else{
    console.log("Try again bruh");
    process.exit(1);
}
}
// will take 2 arguments: command and search parameters
start(process.argv[2], process.argv.slice(3).join(" "))