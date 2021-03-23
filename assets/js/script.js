
var body = document.body;
var h1El = document.createElement("h2");
var main =document.createElement("main");
var QuizSection = document.createElement("section");
var p =  document.createElement("p");
var startButton = document.createElement("BUTTON");

// Create Quiz Question


h1El.textContent = "Coding Quiz Challenge";
p.textContent = "Try to anser the following code-rlated questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by teb seconds!";
startButton.textContent = "Start Quiz"
body.appendChild(main)

main.appendChild(QuizSection);
QuizSection.setAttribute("class","container");
QuizSection.setAttribute("id","quizWrapper");
QuizSection.appendChild(h1El);
QuizSection.appendChild(p);
QuizSection.appendChild(startButton);



function LoadQuiz(event) {
alert(event)
document.getElementById("quizWrapper").innerHTML = "";



 var QuizButton1 = document.createElement("BUTTON");
 var QuizButton2 = document.createElement("BUTTON");
 var QuizButton3 = document.createElement("BUTTON");
 var QuizButton4 = document.createElement("BUTTON");
 QuizButton1.id = "QuizButton1";
 QuizButton2.id = "QuizButton2";
 QuizButton3.id = "QuizButton3";
 QuizButton4.id = "QuizButton4";

    p.textContent = "Commmonly used data types DO NOT include:";
    QuizButton1.textContent = "1.strings"
    QuizButton2.textContent = "2. booleans"
    QuizButton3.textContent = "3.Alerts"
    QuizButton4.textContent = "4. numbers"
    body.appendChild(QuizSection);
    QuizSection.appendChild(p);
    QuizSection.appendChild(QuizButton1);
    QuizSection.appendChild(QuizButton2);
    QuizSection.appendChild(QuizButton3);
    QuizSection.appendChild(QuizButton4);
    var ee = document.querySelector(".quizWrapper");
    var QuizButton1click= ee.querySelector(".QuizButton1");
   
  }


// Add listener to submit element
startButton.addEventListener("click",LoadQuiz);
QuizButton1click.addEventListener("click",function(event) {
    // Event bubbling would occur and a new window would open if we did not include the following line of code.
    event.stopPropagation();
  
    LoadQuiz(1);
  });
QuizButton2.addEventListener("click",function(event) {
    // Event bubbling would occur and a new window would open if we did not include the following line of code.
    event.stopPropagation();
  
    LoadQuiz(2);
  });
QuizButton3.addEventListener("click",function(event) {
    // Event bubbling would occur and a new window would open if we did not include the following line of code.
    event.stopPropagation();
  
    LoadQuiz(3);
  });
QuizButton4.addEventListener("click",function(event) {
    // Event bubbling would occur and a new window would open if we did not include the following line of code.
    event.stopPropagation();
  
    LoadQuiz(4);
  });


  
