//create variables that will stand for time left, and score
var time = 30;
// var screenTime = 3;
var score = 0;
var countDown;
var i = 0;
var correct = false;
// create an array of questions
var quiz = {
    question1: "Which of the following is an instrument?",
    answers1: {
        right: "Mayonaise",
        wrong: ["Pickles", "Trumpophone", "Horseraddish"]
    },
    question2: "On a scale of ice cream sundae, to gluten free pizza crust, how delicious was your meal?",
    answers2: {
        right: "Yes",
        wrong: ["4 out of 5", "About 15 Brapples", "I'm sorry, that scale makes no sense."]
    },
    question3: "Have you ever been so far as to even do look more like?",
    answers3: {
        right: "Bruh...I've been even half as many to do more was over yonder.",
        wrong: ["I haven't as more so even done as many yet.", "Even if doing more like somewhat was possible, I wouldn't go that even as to be like.", "Oww....my brain hurt reading this and I think I lost a few brain cells in the process."],
    },
    question4: "What is the past tense of Yeet?",
    answers4: {
        right: "Yeeted",
        wrong: ["Yotted", "Yottled", "Yeeten"]
    },
    question5: "Which of the following is not one of the main food groups?",
    answers5: {
        right: "Vegetables",
        wrong: ["Candy", "Candy Canes", "Candy Corn"]
    }

}


//create on click events for answer buttons and store them in variables

//create the timer for both 30 and 3 seconds and store them in functions

function createInterval(time) {
    countDown = setInterval(function timeUp() {

        time--
        $("#time-left").text("Time left: " + time);
        if (time === 0) {
            changeQuestion();
        }
    },
        1000)
}

function changeQuestion() {

    if (correct === true) {
        i++
        $("#question").text(questions[i])
        createInterval(30);
    }
    else {

        wrong();

    }

    clearInterval(countDown);
}

//create a function for the for the losing screen
function wrong() {
    // timer();
    correct = true;
    $("#question").text("WHoops! better luck on the next question");
    $("#answer1").text("");
    $("#answer2").text("");
    $("#answer3").text("");
    $("#answer4").text("");
    setTimeout(changeQuestion, 3000);
}

//create a function for the correct answer

function right() {
    // timer();
    $("#time-left").text(time);
    score++;
    time = 3;
    $("#question").text("You're a clever one");
    $("#answer1").text("");
    $("#answer2").text("");
    $("#answer3").text("");
    $("#answer4").text("");
    clearInterval(countDown);
    i++

}



//create a for loop that goes through all the questions
// for (i = 0; i < questions.length; i++) {


// function QnA() {
    // }
    //within the for loop if i equals zero, display the possible choices for the answer
    // if (time === 0) {
    //     time=3
    // timer();
    //     $("$question").text("Gotta be faster than that!");
    // }
    if (i === 0) {
        time = 30;

        if (time === 0) {
            time = 3
            // timer();
            $("$question").text("Gotta be faster than that!");
            i++
        }
        $("#question").text(quiz.question1);
        $("#answer1").text(quiz.answers1.wrong[0]);
        $("#answer2").text(quiz.answers1.wrong[1]);
        $("#answer3").text(quiz.answers1.right);
        $("#answer4").text(quiz.answers1.wrong[2]);
        $("#answer1").on("click", function () {
            wrong();
        })
        $("#answer2").on("click", function () {
            wrong();
        })
        $("#answer3").on("click", function () {
            right();
        })
        $("#answer4").on("click", function () {
            wrong();
        })
    }

    if (i === 1) {
        time = 30;
        // timer();
        $("#question").text(quiz.question2);
        $("#answer1").text(quiz.answers2.wrong[0]);
        $("#answer2").text(quyiz.answers2.right);
        $("#answer3").text(quiz.answers2.wrong[1]);
        $("#answer4").text(quiz.answers2.wrong[2]);
        $("#answer1").on("click", function () {
            wrong();
        })
        $("#answer2").on("click", function () {
            right();
        })
        $("#answer3").on("click", function () {
            wrong();
        })
        $("#answer4").on("click", function () {
            wrong();
        })
    }

    if (i === 2) {
        time = 30;
        // timer();
        $("#question").text(quiz.question3);
        $("#answer1").text(quiz.answers3.right);
        $("#answer2").text(quiz.answers3.wrong[0]);
        $("#answer3").text(quiz.answers3.wrong[1]);
        $("#answer4").text(quiz.answers3.wrong[2]);
        $("#answer1").on("click", function () {
            right();
        })
        $("#answer2").on("click", function () {
            wrong();
        })
        $("#answer3").on("click", function () {
            wrong();
        })
        $("#answer4").on("click", function () {
            wrong();
        })
    }
    if (i === 3) {
        time = 30;
        // timer();
        $("#question").text(quiz.question4);
        $("#answer1").text(quiz.answers4.wrong[0]);
        $("#answer2").text(quiz.answers4.right);
        $("#answer3").text(quiz.answers4.wrong[1]);
        $("#answer4").text(quiz.answers4.wrong[2]);
        $("#answer1").on("click", function () {
            wrong();
        })
        $("#answer2").on("click", function () {
            right();
        })
        $("#answer3").on("click", function () {
            wrong();
        })
        $("#answer4").on("click", function () {
            wrong();
        })
    }
    if (i === 4) {
        time = 30;
        // timer();
        $("#question").text(quiz.question5);
        $("#answer1").text(quiz.answers5.wrong[0]);
        $("#answer2").text(quiz.answers5.wrong[1]);
        $("#answer3").text(quiz.answers5.wrong[2]);
        $("#answer4").text(quiz.answers5.right);
        $("#answer1").on("click", function () {
            wrong();
        })
        $("#answer2").on("click", function () {
            wrong();
        })
        $("#answer3").on("click", function () {
            wrong();
        })
        $("#answer4").on("click", function () {
            right();
        })
    }

    if (i === 5) {
        $("#question").text("QUIZ COMPLETE. Your score is: " + score + " out of 5");
    }
// }

    // i++;
    // timer(QnA());
    // i++;
    // timer(QnA());
        //set timer to 30

        //create timer function and push into the time-left ID

        //create on click events for each of the answers and push into the answer1 answer2 answer3 and answer4 Id's

        //if the user clicks the right one, display the Winning screen, if not, display the losing screen. and set time left to 3 seconds.

        //imcriment score if the answer was right, do nothing if wrong. 

        //else if time reaches 0


        // repeat the last 3 steps for i equals 1-4


        //