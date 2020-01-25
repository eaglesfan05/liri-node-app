console.log('this is loaded');

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

function movieInfo(moviename){
    axios.get(`https://www.omdbapi.com/?t=${moviename}&apikey=trilogy`)
  .then(function(res) {
    console.log(res.data);
  })
}movieInfo("Titanic");