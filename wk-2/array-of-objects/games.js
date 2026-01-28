console.log("Hello, World!");



// Array of Objects (Games)
const myGames = [
    {
        title: "Pit",
        type: "Card Game",
        numberOfPlayers: "3-8",
        rating: 1,
        source: "My mom gave this to me as a joke because of the show 'Freaks and Geeks'."
    },
    {
        title: "90s Uno",
        type: "Card Game",
        numberOfPlayers: "2-10",
        rating: 4,
        source: "This was a gift from my friend Sarah in high school."
    },
    {
        title: "View-Master",
        type: "Steroscopic Toy",
        numberOfPlayers: "any number of",
        rating: 5,
        shortDescription: "These vintage slides came from my mother's childhood home."
    }
    ]
console.log("My Games", myGames);



// User Prompt & Alert
const whichGame = window.prompt("I have " + myGames.length + " games. Pick a number between 1 and 3 and I'll tell you about where it came from.");

const selectedIndex = Number(whichGame) - 1;

window.alert("You chose " + myGames[selectedIndex].title + 
    " which is a " + myGames[selectedIndex].type + 
    " for " + myGames[selectedIndex].numberOfPlayers + 
    " players. I rate it a " + myGames[selectedIndex].rating + 
    " out of 5. Here is its backstory: " + myGames[selectedIndex].source); 