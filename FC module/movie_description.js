let fs = require("fs");
const { get } = require("http");
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//-----------------------------------

// Define your class here
// your class name should be 'Movie' and  method name as 'run'
class Movie
{
    constructor(language,numCharacters,lengthInMinutes)
    {
        this.language = language
        this.numCharacters = numCharacters
        this.lengthInMinutes = lengthInMinutes
    }
    run()
    {
        return("This is a " + this.language + " movie with " + this.numCharacters + " characters and is " + this.lengthInMinutes + " minutes long. ")
    }
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE

let language = readLine();
let numCharacters = readLine();
let lengthInMinutes = readLine();

let movie =  new Movie(language, numCharacters, lengthInMinutes)
console.log(movie.run());