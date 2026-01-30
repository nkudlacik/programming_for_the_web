console.log("Hello, world!");

// Create an array of objects representing questions and answers

const questions = [
    {
        question: "How do you say 'Hello!' in Polish?",
        answer: "Cześć!",
    },
    {
       question: "How do you say 'How are you?' in Polish?",
       answer: "Jak się masz?", 
    },
    {
       question: "How do you say 'Have a nice day!' in Polish?",
       answer: "Miłego dnia!", 
    },
];
console.log(questions);

// Random question prompt, user to respond with guess

const randomIndex = Math.floor(Math.random() * questions.length);

let triviaQuestion = questions[randomIndex];

let userResponse = prompt(triviaQuestion.question);

// Alert window with correct answer

window.alert("You answered " + userResponse + "." + "The correct answer is " + triviaQuestion.answer + ".");