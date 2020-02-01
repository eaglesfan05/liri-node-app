const axios = require("axios");
dotenv = require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var moment = require("moment");
moment().format()
var fs = require('fs');

function read(){
    fs.readFile("random.txt", "utf8", function(error, data) {

        if (error) {
        console.log(error);
        }
        let whatsReturned = data.split(",")
        console.log(whatsReturned);
        start(whatsReturned[0], JSON.parse(whatsReturned[1]));
      });
    
}



function bands(bandname){
    axios.get(`https://rest.bandsintown.com/artists/${bandname}/events?app_id=codingbootcamp`)
    .catch(err =>{
        console.log("wrong");
        process.exit(1);
    }).then(res => {
        //loop through artist events//
        for(i = 0; i<res.data.length; i++){
           
            // console.log(res.data[i]);
            //venue name//
            console.log("Venue Name: " + res.data[i].venue.name);
            //venue city//
            console.log("Venue Location: " + res.data[i].venue.city + " " + res.data[i].venue.region);
            //event time.. have to figure out how to convert with moment//
            // let date = res.data[i].datetime;
            console.log("Event Date: " + moment(res.data[i].datetime).format("MM/DD/YYYY"));
        }
        
    })
}
//API call to ombd api//
function movieInfo(moviename){
    if(!moviename){
        moviename = "Mr. Nobody";
    }
    axios.get(`https://www.omdbapi.com/?t=${moviename}&apikey=trilogy`)
  .then(res =>{
         // console.log(res.data);
    //Title//
    console.log("Movie Title: " + res.data.Title);
    //Year//
    console.log("Year Released: " + res.data.Year);
    //imdb rating//
    console.log("IMDB Rating: " + res.data.imdbRating);
    //rotten tomatoes rating some return error because no rotten tomatoes rating//
    console.log("Rotten Tomatoes Rating: " + res.data.Ratings[1].Value);
    //language//
    console.log("Language: " + res.data.Language);
    //Production Company//
    console.log("Produced By: " + res.data.Production);
    //plot//
    console.log("Movie Plot: " + res.data.Plot);
    //actors//
    console.log("Actors: " + res.data.Actors);
  }).catch(err =>{
      console.log("That's not a movie champ");
      process.exit(1);
  })
}

function spotifyCall(songname){
    if(!songname){
        songname = "The Sign";
    }
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
// const spotifyCall = async(str) => {
//     const data = await spotify.search({type: 'track', query: str})
//     let artist = (data.tracks.items[0].artists[0].name);
//     console.log(artist);
// }
  

//remember will have to use process.argv
function start(arg1, arg2){
console.log(arg1, arg2);
if(arg1 === "spotify-this"){
    spotifyCall(arg2)
}else if(arg1 === "movie-this"){
    movieInfo(arg2)
}else if(arg1 === "concert-this"){
    bands(arg2);
}else if(arg1 === "do-what-it-says"){
    read();
    console.log("is working")
} else{
    console.log("Try again bruh");
    process.exit(1);
}
}
// will take 2 arguments: command and search parameters
start(process.argv[2], process.argv.slice(3).join(" "))