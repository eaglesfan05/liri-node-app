# liri-node-app
# How it works.
This App takes a command and search parameters entered at the command line and returns the user's desired information by making calls to 3 different APIs: Bands In Town API, Spotify API and the OMDB API as well as reading from a text file and initiating a search from the contents of that file.
## Overview
The app is broken down made up of 5 functions. 
    1. The function that reads from the readme.txt file.
    2. The function that makes the call to the Bands In Town API.
    3. The function that makes the call to the Spotify API.
    4. The function that makes the call to the OMDB API.
    5. The function that handles the command line responses and initiates the proper API call.

## Use
    1. To get a response from the readme.txt file from the command line enter "node liri.js do-what-it-says" and press enter and will get a return based on the contents of the file.
    2. To get a response from the Spotify API: from the command line enter "node liri.js song-this <song name here>" press enter and what is returned is the song name, artist name, a preview link and the album.
    3. To get a resonse from the Bands In Town API: from the command line enter "node liri.js concert-this <band name here>" press enter and what is returned is a list of venues that artist will play, the location and the date.
    4. To get a response from the OMDB API: from the command line enter "node liri.js movie-this<movie name here> press enter and what is returned is the movies' title, year released, imdb rating, Rotten Tomatoes rating, movie language, production company, plot description, and cast.
## Technologies Used
    1. Javascript.
    2. Node.
    3. axios.
    4. dotevn.
    5. moment.
    6. fs.
    7. Spotify API
    8. Bands In Town API.
    9. OMDB API.
## This app was developed, tested and launched by Khalil Hall. 
## do-what-it-says demo
![](assets/images/Screenshot%20(11).png)
## spotify-this demo
![](assets/images/Screenshot%20(8).png)
## concert-this demo
![](assets/images/Screenshot%20(10).png)
## movie-this demo
![](assets/images/Screenshot%20(9).png)
