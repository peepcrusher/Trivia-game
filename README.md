# Trivia-game

##Sam Thompson

###technologies used
*HTML
*CSS
*Javascript
*Jquery
*Bootstrap

###Process
at first I thought I was going to be able to use a for loop to loop through all my questions and answers, I ended up hard coding in all of my questions and answers as you can probably see from the commented out section on the bottom. after re-strucruring my data into one big object, I was then able to use a counter that would use the count upwards after every correct or incorrect guess, or when the timer reached 0.

I created a function that would count down from 30 to 0. if the counter reached 0 it would briefly display a losing screen, then progress to the next question. this works until you run out of questions, then the counter keeps going into the negatives, and I couldn't figure out how to get that to stop so it is still flawed.

I dynamically change the text by attaching onto the HTML tags with Jquery and using the .text() function to change the text within. 