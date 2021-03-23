
//DOM VARIABLES
var body = document.body;
var h1El = document.createElement("h2");
var main = document.createElement("main");
var QuizSection = document.createElement("section");
var p = document.createElement("p");
var startButton = document.createElement("BUTTON");

h1El.textContent = "Coding Quiz Challenge";
// Create Quiz Question
p.textContent =
  "Try to anser the following code-rlated questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by teb seconds!";
startButton.textContent = "Start Quiz";
body.appendChild(main);

main.appendChild(QuizSection);
QuizSection.setAttribute("class", "container");
QuizSection.setAttribute("id", "quizWrapper");
QuizSection.appendChild(h1El);
QuizSection.appendChild(p);
QuizSection.appendChild(startButton);



//JAVASCRIPT VARIABLES

var QuizButton1click;
var quizWrapper;
var QuizButton1click;
var QuizButton2click;
var QuizButton3click;
var QuizButton4click;
var QuestionAsked = 0 ;

var quizqa= {
    // (A) PROPERTIES 
     // (A1) QUESTIONS & ANSWERS
     // Q = QUESTION, O = OPTIONS, A = CORRECT ANSWER
     data: [
     {
       q : "Commonly used data types DO NOT include?",
       o : [
         "1. strings",
         "2. booleans",
         "3. alerts",
         "4. numbers"
       ],
       a : "1. strings"
     },
     {
       q : "The condition in an if/else statment is enclosed within ____",
       o : [
        "1. quotes",
        "2. curly brackets",
        "3. parentheses",
        "4. square brackets"
       ],
       a :  "3. parentheses"
     },
     {
       q : "Arrays in JavaScript can be used to store  ____.",
       o : [
        "1. numbers and strings",
        "2. other arrays",
        "3. booleans",
        "4. all of the above"
       ],
       a :  "2. other arrays"
     },
     {
        q : "String values must be enclosed within  ____ when being assigned to variables.",
        o : [
         "1. commas",
         "2. curly brackets",
         "3. quotes",
         "4. parentheses"
       ],
       a : "4. parentheses"
     },
     {
        q : "A very useful tool used during development and debugging for printing content to the debugger is.",
        o : [
         "1. JavaScript",
         "2. terminal/bash",
         "3. for loops",
         "4. console.log"
       ],
       a : "3. for loops",
     }
     ]
    }


console.log(quizqa.data[0].q)

//EVENT LISTENERS

// Add listener to submit element
startButton.addEventListener("click", function (event) {
  // Event bubbling would occur and a new window would open if we did not include the following line of code.
  event.stopPropagation();

  LoadQuiz(1);
});

// FUNCTION  CALLS

function LoadQuiz(event) {

  document.getElementById("quizWrapper").innerHTML = "";

  var QuizButton1 = document.createElement("BUTTON");
  var QuizButton2 = document.createElement("BUTTON");
  var QuizButton3 = document.createElement("BUTTON");
  var QuizButton4 = document.createElement("BUTTON");

  QuizButton1.id = "QuizButton1";
  QuizButton2.id = "QuizButton2";
  QuizButton3.id = "QuizButton3";
  QuizButton4.id = "QuizButton4";
  //QuizButton1.setAttribute("click",LoadQuiz);
  if(QuestionAsked === 0)
  {
    p.textContent = quizqa.data[0].q;
    QuizButton1.textContent = quizqa.data[0].o[0];
    QuizButton2.textContent =  quizqa.data[0].o[1];;
    QuizButton3.textContent =  quizqa.data[0].o[2];;
    QuizButton4.textContent =  quizqa.data[0].o[3];;
    QuestionAsked++;
  }
  else if(QuestionAsked = "1")
  {
    p.textContent = quizqa.data[1].q;
    QuizButton1.textContent = quizqa.data[1].o[0];
    QuizButton2.textContent =  quizqa.data[1].o[1];;
    QuizButton3.textContent =  quizqa.data[1].o[2];;
    QuizButton4.textContent =  quizqa.data[1].o[3];;

  }

  body.appendChild(QuizSection);
  QuizSection.appendChild(p);
  QuizSection.appendChild(QuizButton1);
  QuizSection.appendChild(QuizButton2);
  QuizSection.appendChild(QuizButton3);
  QuizSection.appendChild(QuizButton4);
  quizWrapper = document.querySelector("#quizWrapper");
  QuizButton1click = quizWrapper.querySelector("#QuizButton1");
  QuizButton2click = quizWrapper.querySelector("#QuizButton2");
  QuizButton3click = quizWrapper.querySelector("#QuizButton3");
  QuizButton4click = quizWrapper.querySelector("#QuizButton4");

//JAVASCRIPT VARIABLES
  
//EVENT LISTENERS 

  QuizButton1click.addEventListener("click", function (event) {
    // Event bubbling would occur and a new window would open if we did not include the following line of code.
    event.stopPropagation();
    console.log(QuizButton1click.innerHTML);
    LoadQuiz(2);
  });

  QuizButton2click.addEventListener("click", function (event) {
    // Event bubbling would occur and a new window would open if we did not include the following line of code.
    event.stopPropagation();
    console.log(QuizButton2click.innerHTML);
    LoadQuiz(3);
  });

  QuizButton3click.addEventListener("click", function (event) {
    // Event bubbling would occur and a new window would open if we did not include the following line of code.
    event.stopPropagation();
    console.log(QuizButton3click.innerHTML);
    LoadQuiz(4);
  });

  QuizButton4click.addEventListener("click", function (event) {
    // Event bubbling would occur and a new window would open if we did not include the following line of code.
    event.stopPropagation();
    console.log(QuizButton4click.innerHTML);
    LoadQuiz(5);
  });
}
