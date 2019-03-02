//create variables that will stand for time left, and score
var time = 30;
// var screenTime = 3;
var score = 0;
var interval;
var i = 0;
var correct = false;
var quizOver = false;
// create an array of questions
var quiz = [
    {
    question: "Which of the following is an instrument?",
    answers: {
        right: "A) Mayonaise",
        wrong: ["B) Pickles", "C) Trumpophone", "D) Horseraddish"]
    }
},
{
    question: "On a scale of ice cream sundae, to gluten free pizza crust, how delicious was your meal?",
    answers: {
        right: "A) Yes",
        wrong: ["B) 4 out of 5", "C) About 15 Brapples", "D) I'm sorry, that scale makes no sense."]
    }
},
{
    question: "Have you ever been so far as to even do look more like?",
    answers: {
        right: "A) Bruh...I've been even half as many to do more was over yonder.",
        wrong: ["B) I haven't as more so even done as many yet.", "C) Even if doing more like somewhat was possible, I wouldn't go that even as to be like.", "D) Oww....my brain hurt reading this and I think I lost a few brain cells in the process."],
    }},
    {
    question: "What is the past tense of Yeet?",
    answers: {
        right: "A) Yeeted",
        wrong: ["B) Yotted", "C) Yottled", "D) Yeeten"]
    }},
    {
        question: "Which of the following is not one of the main food groups?",
    answers: {
        right: "A) Vegetables",
        wrong: ["B) Candy", "C) Candy Canes", "D) Candy Corn"]
    }
    }
]


//create on click events for answer buttons and store them in variables

//create the timer for both 30 and 3 seconds and store them in functions

function createInterval(int) {
    interval = setInterval(function() {
        time--
        $("#time-left").text("Time left: " + time);
        if (time === 0) {
            changeQuestion();
            
        }
    },
        1000)
}

function changeQuestion() {
console.log(this);

    if(i=== quiz.length-1){
        quizOver=true;
        clearInterval(setInterval);
        $("#time-left").text("");
        $("#question").text("Your score is " +  score + " out of 5");
        $("#answer1").text("");
        $("#answer2").text("");
        $("#answer3").text("");
        $("#answer4").text("");
    }
else{
    if (correct === true) {
        console.log("going to next question");
        i++
        right();   
        time= 30;
     }
    else {
time=3
        wrong();

    }
}
    clearInterval(interval);
    createInterval();
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
    clearInterval();
    setTimeout(changeQuestion, 3000);
}

//create a function for the correct answer

function right() {
    correct = false;
    $("#question").text(quiz[i].question);
    $("#answer1").text(quiz[i].answers.right);
    $("#answer2").text(quiz[i].answers.wrong[0]);
    $("#answer3").text(quiz[i].answers.wrong[1]);
    $("#answer4").text(quiz[i].answers.wrong[2]);
    clearInterval(interval);
    setTimeout(changeQuestion, 30000)
    time=30;
    console.log(score);
  

};
$("#answer1").on("click", function(){
    var answ1 = $(this).text();
    if(quiz[i].answers.right === answ1){
        correct = true;
        score++;
    }
    else{correct = false;}
    console.log(answ1);
    changeQuestion();
    
});
$("#answer2").on("click", function(){
    var answ1 = $(this).text();
    if(quiz[i].answers.right === answ1){
        correct = true;
    }
    else{correct = false;}
    console.log(answ1);
    changeQuestion();
})
$("#answer3").on("click", function(){
    var answ1 = $(this).text();
    if(quiz[i].answers.right === answ1){
        correct = true;
    }
    else{correct = false;}
    console.log(answ1);
    changeQuestion();
})
$("#answer4").on("click", function(){
    var answ1 = $(this).text();
    if(quiz[i].answers.right === answ1){
        correct = true;
    }
    else{correct = false;}
    console.log(answ1);
    changeQuestion();
})



createInterval(30)
$("#question").text(quiz[i].question);
    $("#answer2").text(quiz[i].answers.wrong[0]);
    $("#answer3").text(quiz[i].answers.wrong[1]);
    $("#answer1").text(quiz[i].answers.right);
    $("#answer4").text(quiz[i].answers.wrong[2]);
    // $("#answer1").on("click", function () {
    //              right();
    //      })
    //          $("#answer2").on("click", function () {
    //              wrong();
    //          })
    //          $("#answer3").on("click", function () {
    //              wrong();
    //          })
    //          $("#answer4").on("click", function () {
    //              wrong();
    //          })

    //     if (time === 0) {
    //         time = 30
    //         // timer();
    //         $("$question").text("Gotta be faster than that!");
    //         i++
    //     }
    //     $("#question").text(quiz[0].question);
    //     $("#answer1").text(quiz[0].answers.wrong[0]);
    //     $("#answer2").text(quiz[0].answers.wrong[1]);
    //     $("#answer3").text(quiz[0].answers.right);
    //     $("#answer4").text(quiz[0].answers.wrong[2]);
    //     $("#answer1").on("click", function () {
    //         wrong();
    //     })
    //     $("#answer2").on("click", function () {
    //         wrong();
    //     })
    //     $("#answer3").on("click", function () {
    //         right();
    //     })
    //     $("#answer4").on("click", function () {
    //         wrong();
    //     })
  

    // if (i === 1) {
    //     time = 30;
    //     // timer();
    //     $("#question").text(quiz[1].question);
    //     $("#answer1").text(quiz[1].answers.wrong[0]);
    //     $("#answer2").text(quyiz[1].answers.right);
    //     $("#answer3").text(quiz[1].answers.wrong[1]);
    //     $("#answer4").text(quiz[1].answers.wrong[2]);
    //     $("#answer1").on("click", function () {
    //         wrong();
    //     })
    //     $("#answer2").on("click", function () {
    //         right();
    //     })
    //     $("#answer3").on("click", function () {
    //         wrong();
    //     })
    //     $("#answer4").on("click", function () {
    //         wrong();
    //     })
    // }

    // if (i === 2) {
    //     time = 30;
    //     // timer();
    //     $("#question").text(quiz[2].question);
    //     $("#answer1").text(quiz[2].answers.right);
    //     $("#answer2").text(quiz[2].answers.wrong[0]);
    //     $("#answer3").text(quiz[2].answers.wrong[1]);
    //     $("#answer4").text(quiz[2].answers.wrong[2]);
    //     $("#answer1").on("click", function () {
    //         right();
    //     })
    //     $("#answer2").on("click", function () {
    //         wrong();
    //     })
    //     $("#answer3").on("click", function () {
    //         wrong();
    //     })
    //     $("#answer4").on("click", function () {
    //         wrong();
    //     })
    // }
    // if (i === 3) {
    //     time = 30;
    //     // timer();
    //     $("#question").text(quiz[3].question);
    //     $("#answer1").text(quiz[3].answers.wrong[0]);
    //     $("#answer2").text(quiz[3].answers.right);
    //     $("#answer3").text(quiz[3].answers.wrong[1]);
    //     $("#answer4").text(quiz[3].answers.wrong[2]);
    //     $("#answer1").on("click", function () {
    //         wrong();
    //     })
    //     $("#answer2").on("click", function () {
    //         right();
    //     })
    //     $("#answer3").on("click", function () {
    //         wrong();
    //     })
    //     $("#answer4").on("click", function () {
    //         wrong();
    //     })
    // }
    // if (i === 4) {
    //     time = 30;
    //     // timer();
    //     $("#question").text(quiz[4].question);
    //     $("#answer1").text(quiz[4].answers.wrong[0]);
    //     $("#answer2").text(quiz[4].answers.wrong[1]);
    //     $("#answer3").text(quiz[4].answers.wrong[2]);
    //     $("#answer4").text(quiz[4].answers.right);
    //     $("#answer1").on("click", function () {
    //         wrong();
    //     })
    //     $("#answer2").on("click", function () {
    //         wrong();
    //     })
    //     $("#answer3").on("click", function () {
    //         wrong();
    //     })
    //     $("#answer4").on("click", function () {
    //         right();
    //     })
    // }

    // if (i === 5) {
    //     $("#question").text("QUIZ COMPLETE. Your score is: " + score + " out of 5");
    // }

        //set timer to 30

        //create timer function and push into the time-left ID

        //create on click events for each of the answers and push into the answer1 answer2 answer3 and answer4 Id's

        //if the user clicks the right one, display the Winning screen, if not, display the losing screen. and set time left to 3 seconds.

        //imcriment score if the answer was right, do nothing if wrong. 

        //else if time reaches 0


        // repeat the last 3 steps for i equals 1-4


        //