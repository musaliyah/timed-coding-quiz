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
        questionText: 'The condition in an if/else statement is enclosed within ____',
        answerOptions: ['1) quotes', '2) curly brackets', '3) parenthesis', '4) A square brackets'],
        correct: 3
    },
    {
        questionText: 'Arrays in JavaScript can be used to store ____.',
        answerOptions: ['1) numbers and strings', '2) other arrays', '3) booleans', '4) all of the above'],
        correct: 4
    },
    {
        questionText: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answerOptions: ['1) JavaScript', '2) terminal', '3) for loops', '4) console.log'],
        correct: 4
    }
];

var countdown = setInterval(countdownTimer, 1000);

function countdownTimer() {
    if(timeStart)
    time --;
    if(time <=0){
    quizOver();
    time = 0;
    }
    document.getElementById("time").innerHTML = time;
}

beginQuizBtn.addEventListener("click", function() {
    quizContainer.style.display = "block";
    document.getElementById("information-container").style.display = "none";
    countdownTimer.style.display= "block";
    document.getElementById("scores").style.display= "block";
    document.getElementById("score").innerHTML = score;
    countdownTimer();
    quizQuestions();
    timeStart = true;
});

function quizQuestions() {
    question.textContent = questionList[i].questionText;
    answer1.textContent = questionList[i].answerOptions[0];
    answer2.textContent = questionList[i].answerOptions[1];
    answer3.textContent = questionList[i].answerOptions[2];
    answer4.textContent = questionList[i].answerOptions[3];
};

answer1.addEventListener('click', function(event) {
    event.endDisplay();
    correct = questionList[i].correct;
    console.log("correct" + correct);
    if(3 === correct) {
        document.getElementById("answers").innerHTML = "Right!";
        setTimeout(function() {
            document.getElementById("answers").innerHTML = "";
        }, 
        1000
        );
        score++;
        document.getElementById("score").innerHTML= score;
    } else {
        timeRemaining -= 5;
        document.getElementById("answer").innerHTML = "Wrong!";
        setTimeout(function() {
            document.getElementById("answer").innerHTML = "";
        },
        1000);
    }
    if ( i >= questionList.length -1) {
        quizOver();
    } else {
        i++
        quizQuestions();
    };
});

answer2.addEventListener('click', function(event) {
    event.endDisplay();
    correct = questionList[i].correct;
    console.log("correct" + correct);
    if(3 === correct) {
        document.getElementById("answers").innerHTML = "Right!";
        setTimeout(function() {
            document.getElementById("answers").innerHTML = "";
        }, 
        1000
        );
        score++;
        document.getElementById("score").innerHTML= score;
    } else {
        timeRemaining -= 5;
        document.getElementById("answer").innerHTML = "Wrong!";
        setTimeout(function() {
            document.getElementById("answer").innerHTML = "";
        },
        1000);
    }
    if ( i >= questionList.length -1) {
        quizOver();
    } else {
        i++
        quizQuestions();
    };
});

answer3.addEventListener('click', function(event) {
    event.endDisplay();
    correct = questionList[i].correct;
    console.log("correct" + correct);
    if(4 === correct) {
        document.getElementById("answers").innerHTML = "Right!";
        setTimeout(function() {
            document.getElementById("answers").innerHTML = "";
        }, 
        1000
        );
        score++;
        document.getElementById("score").innerHTML= score;
    } else {
        timeRemaining -= 5;
        document.getElementById("answer").innerHTML = "Wrong!";
        setTimeout(function() {
            document.getElementById("answer").innerHTML = "";
        },
        1000);
    }
    if ( i >= questionList.length -1) {
        quizOver();
    } else {
        i++
        quizQuestions();
    };
});

answer4.addEventListener('click', function(event) {
    event.endDisplay();
    correct = questionList[i].correct;
    console.log("correct" + correct);
    if(4 === correct) {
        document.getElementById("answers").innerHTML = "Right!";
        setTimeout(function() {
            document.getElementById("answers").innerHTML = "";
        }, 
        1000
        );
        score++;
        document.getElementById("score").innerHTML= score;
    } else {
        timeRemaining -= 5;
        document.getElementById("answer").innerHTML = "Wrong!";
        setTimeout(function() {
            document.getElementById("answer").innerHTML = "";
        },
        1000);
    }
    if ( i >= questionList.length -1) {
        quizOver();
    } else {
        i++
        quizQuestions();
    };
});

function quizOver() {
    document.getElementById("quizOver").style.display = "block";
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("timer").style.display = "none";
    document.getElementById("scores").style.display = "none";
    document.getElementById("answers").innerHTML = "";
    document.getElementById("final-score").innerHTML = score;
}

function submit() {
    highscoreList.push(document.getElementById("initials").value + " " + score);
    highScores();
}


function highScores() {
    document.getElementById("quiz-container").style.display="none";
    document.getElementById("quizOver").style.display="none";
    document.getElementById("highscore-container").style.display="block";

    output="";
    for(let x=0; x<highscoreList.length; x++) {
        output = output + " " + highscoreList[x];
    }
    document.getElementById("highscore-list").innerHTML = output;
    clear();
}

function deleteScores() { 
    highscoreList = [];
}

function clear () { 
    time= 80;
    timeRemaining=true;
    timeStart=false;
    i=0;
    score=0;
}