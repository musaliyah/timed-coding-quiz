var timeStart = 60;
var answer1Btn = document.getElementById('answer1');
var answer2Btn = document.getElementById('answer2');
var answer3Btn = document.getElementById('answer3');
var answer4Btn = document.getElementById('answer4');
var score = 0;

var mainDivEl = document
var timer;
//integer variable 
var timerCount; //the amount of time that timer is going to run
// var startButton = document.querySelector(".start-button")
// var isWin = false; 

// boolean variable 
// put question answers in an array variable
// can track through question number variable 
// could use an array method for each one but difficult
// an array could be a list of objects 
// const questions = [
    // {question: "this is a question",
    // answer1: "this is answer1",
    // answer2: "this is answer 2"},
    // {question: "this is question 2",
    //  answer1: "this is answer1"},
    //  etc];

// document.getElementById("button1").textContent = questions[0].answer1

const startButton = document.getElementById('start-button')
const quizContainer = document.getElementById('quiz-container')


startButton.addEventListener('click', startGame)


const questions = [
    {question:"Commonly used data types DO NOT Include:",
        options: {
            answer1:"strings",
            answer2:"booleans",
            answer3: "alerts",
            answer4: "numbers"
        }, 
        correct: "alerts" 
    }, 
    {question:"The condition in an if/else statement is enclosed within ____",
    options: {
        answer1:"quotes",
        answer2:"curly brackets",
        answer3: "parenthesis",
        answer4: "A square brackets"
    }, 
    correct: "curly brackets"
    },
    {question:"Arrays in JavaScript can be used to store ____.",
    options: {
        answer1:"numbers and strings",
        answer2:"other arrays",
        answer3: "booleans",
        answer4:"all of the above"
    }, 
    correct: "all of the above"
    },
    {question:"A very useful tool used during development and debugging for printing content to the debugger is:",
    options: {
        answer1:"JavaScript",
        answer2:"terminal",
        answer3: "for loops",
        answer4:"console.log"
    }, 
    correct: "console.log"
    }

] //Recieved advice/guidence about question array from Tutor (Andrew Tirpok)

function startGame(){
    console.log('Game Start')
    startButton.classList.add('hide')
    quizContainerElement.classList.remove('hide')
}

function setNextQuestion (){

}

function selectAnswer(){

}



