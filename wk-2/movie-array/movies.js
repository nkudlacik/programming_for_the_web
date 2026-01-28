console.log("Hello, World!");

// My Favorite Movies Array
let myMovies = ["American Honey", "Mean Creek", "Boyhood", "Harold and Maude", "Napoleon Dynamite"];
console.log("My Favorite Movies:", myMovies);

// User Input
const userInput = window.prompt("What is your favorite movie?");

// Concatination
myMovies.push(userInput);
console.log(myMovies + userInput);

// Displaying Full List (toString)
console.log("Complete Movie List:", myMovies.toString());