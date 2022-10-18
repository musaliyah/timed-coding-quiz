var timeStart = 60;
var startQuiz = document.getElementById('begin');
var answer1Btn = document.getElementById('answer1');
var answer2Btn = document.getElementById('answer2');
var answer3Btn = document.getElementById('answer3');
var answer4Btn = document.getElementById('answer4');
var score = 0;
var submitScore = document.getElementById('submit');
var questions = document.getElementById('questions');
var mainContainer = document.getElementById('quiz-container');
var quizStart= true;
var timeRemaining = document.getElementById('time');
var accuracy = document.getElementById('accuracy');
var questionBox = document.createElement('questionBox');
var finalScore = document.createElement('finalScore');
var initials = document.createElement('initials');
var enterInitials = document.createElement('enterInitials');
var questionCount= 0;
var answerCount = 0;
var scoreBoardMax = 50;
var lastQuestion = 0;
var scoreBoardEl = document.getElementById('high-scores');

var mainDivEl = document
var timer;
//integer variable 
var timerCount; //the amount of time that timer is going to run


var questions = {
    questionList: {
        1:'Commonly used data types DO NOT Include:',
        2:'The condition in an if/else statement is enclosed within ____',
        3:'Arrays in JavaScript can be used to store ____.',
        4:'A very useful tool used during development and debugging for printing content to the debugger is:'
    }
};

var choices = {
    options: {
        1: {
            answer1:"strings",
            answer2:"booleans",
            answer3: "alerts",
            answer4: "numbers"
        },
        2: 
        {
            answer1: "quotes",
            answer2:"curly brackets",
            answer3: "parenthesis",
            answer4: "A square brackets"
        },
        3:
        {
            answer1:"numbers and strings",
            answer2:"other arrays",
            answer3: "booleans",
            answer4:"all of the above"
        },
        4: 
        {
            answer1:"JavaScript",
            answer2:"terminal",
            answer3: "for loops",
            answer4:"console.log"
        }
    }
}


timeRemaining.textContent = time;

scoreBoardEl.addEventListener("click", function () {
    var user = "";
    var highScore = "";
    var initialName = "";

    for (var i=0; i < localStorage.length; i++) {
        var total = [];

        user = localStorage.getItem(localStorage.key(i));
        initialName = user.substring(0,4)
        if(initialName == "quiz") {
            total = user.split(",");
            var userName = total[0]
            highScore += "User " + userName.initialName(4) + "the highest score is " + total[1] + "\n";
        }
    }
    window.alert(highScore);
});

submitScore.addEventListener("click", function() {
    var quizData = "quiz";
    var userInfo = "";
    var info = [];

    userInfo = quizData + enterInitials.info;
    info = [userInfo, highScore]

    for(var i=0, )
})
// ] //Recieved advice/guidence about question array from Tutor (Andrew Tirpok)



submitScore.style.display = 'none'
accuracy.style.display = 'none';
enterInitials.style.display= 'none';
answer1Btn.style.display = 'none';
answer2Btn.style.display = 'none';
answer3Btn.style.display = 'none';
answer4Btn.style.display = 'none';
