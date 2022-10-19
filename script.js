var beginQuizBtn = document.getElementById('begin');
var time = 80;
var timeRemaining = true;
var timeStart = false;
var timer = document.getElementById('time');
var informationContainer = document.getElementById('information-container');
var quizContainer = document.getElementById('quiz-container');
var question = document.getElementById('question');
var answer1 = document.getElementById('answer1btn');
var answer2 = document.getElementById('answer2btn');
var answer3 = document.getElementById('answer3btn');
var answer4 = document.getElementById('answer4btn');
var correct = document.getElementById('correct');
var highscoreList = [];
var output= "";
var score = 0;
let i = 0;

var questionList = [
    {
        questionText: 'Commonly used data types DO NOT Include:',
        answerOptions: ['1) strings', '2) booleans', '3) alerts', '4) numbers'],
        correct: 3
    },
    {
        questionText: 'Commonly used data types DO NOT Include:',
        answerOptions: ['1) strings', '2) booleans', '3) alerts', '4) numbers'],
        correct: 3
    },
    {
        questionText: 'Commonly used data types DO NOT Include:',
        answerOptions: ['1) strings', '2) booleans', '3) alerts', '4) numbers'],
        correct: 3
    },
    {
        questionText: 'Commonly used data types DO NOT Include:',
        answerOptions: ['1) strings', '2) booleans', '3) alerts', '4) numbers'],
        correct: 3
    },
]