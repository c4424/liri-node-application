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

// Switch statement to execute different code depending on LIRI command.
switch (args[0]) {
	case 'concert-this':
		console.log('I would check Bandsintown if I could.');
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
		showUsage();
		process.exit(1);
