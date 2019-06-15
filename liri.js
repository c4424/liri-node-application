const axios = require('axios')

// Function to print basic usage instructions to console.
function showUsage(){
	console.log("Usage: node liri.js [concert-this <artist/band name here>|spotify-this-song '<song name here>'|liri.js movie-this '<movie name here>'|liri.js do-what-it-says]");
}

/* Checks for at least a 3 arguments, since the 3rd argument is the command to LIRI.
   If there is no command for LIRI, print usage instructions and exit the application. */
if (process.argv.length < 3){
	showUsage();
	process.exit(1);
}	

// Slice off only the arguments we're interested in.
var args = process.argv.slice(2);

switch (args[0]) {
	case 'concert-this':
		if(args.length > 1){
			var url = "https://rest.bandsintown.com/artists/" + args[1] + "/events?app_id=codingbootcamp"
			axios.get(url)
			.then(function (response) {
				if (response.data.length == 0)
					console.log("No results found. =(");
				else
					console.log("Upcoming concerts:\n")
					for( var i = 0; i < response.data.length; i++ ){
						console.log("Date: " + response.data[i].datetime);
						console.log("Venue: " + response.data[i].venue.name);
						var location = "Location: " + response.data[i].venue.city + 
						(response.data[i].venue.region ? "" : (", " + response.data[i].venue.region)) + 
						", " + response.data[i].venue.country + "\n";
						console.log(location);
					}
			})
			.catch(function (error) {
				console.log(error);
			})
			.then(function () {
				// always executed
			});
		}
		else
			console.log("concert-this Usage: node liri.js concert-this <artist/band name here>")
		break;
	case 'spotify-this-song':
		console.log('I would check Spotify if I could.');
		break;
	case 'movie-this':
		console.log('I would check OMDB if I could.');
		break;
	case 'do-what-it-says':
		console.log('I would do what it says if I could.');
		break;
	default:
		// LIRI command not recognized
		showUsage();
		process.exit(1);
}