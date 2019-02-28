//create variables that will stand for time left, and score
var time = 30;
var score = 0;

// create an array of questions
var questions = ["Which of the following is an instrument?", 
"On a scale of ice cream sundae, to gluten free pizza crust, how delicious was your meal?",
"If yoda left a train station at 3pm heading east at 17mph, and Darth Sidious",
"What is the past tense of Yeet?",
"Which of the following is not one of the main food groups." ]

//create on click events for answer buttons and store them in variables


//create a function for the for the losing screen
function wrong(){
    $("#question").text("WHoops! better luck on the next question");
    $("#answer1").text("");
    $("#answer2").text("");
    $("#answer3").text("");
    $("#answer4").text("");
    time = 3;
}

//create a function for the correct answer

function right(){
    score++;
    $("#question").text("You're a clever one");
    $("#answer1").text("");
    $("#answer2").text("");
    $("#answer3").text("");
    $("#answer4").text("");
    time = 3;
}


//create a for loop that goes through all the questions
for(i=0; i<questions.length; i++){

//within the for loop if i equals zero, display the possible choices for the answer
if (i=0){
    $("#question").text(questions[i]);
    $("#answer1").text("A.) Pickles");
    $("#answer2").text("B.) Mayonaise");
    $("#answer3").text("C.) Horseraddish");
    $("#answer4").text("D.) The Trumbophone");
    $("#answer1").on("click", function(){

    })
}
//set timer to 30

//create timer function and push into the time-left ID

//create on click events for each of the answers and push into the answer1 answer2 answer3 and answer4 Id's

//if the user clicks the right one, display the Winning screen, if not, display the losing screen. and set time left to 3 seconds.

//imcriment score if the answer was right, do nothing if wrong. 

//else if time reaches 0


// repeat the last 3 steps for i equals 1-4


//
}