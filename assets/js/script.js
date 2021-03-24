
//DOM VARIABLES
var body = document.body;
var h1El = document.createElement("h2");
var main = document.createElement("main");
var QuizSection = document.createElement("section");
var p = document.createElement("p");
var timeInterval  = null;



var startButton = document.createElement("BUTTON");
var timerEl = document.getElementById('countdown');
var viewHighscores = document.getElementById('view-highscores');
var highscroesArray = [];
console.log(viewHighscores);
var timeLeft = 75;

h1El.textContent = "Coding Quiz Challenge";
// Create Quiz Question
startButton.textContent = "Start Quiz";
p.textContent = "Below are Instruction how to play";
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
       a :  "1. quotes"
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
     ],
       // (A3) GAME FLAGS
    Win: 0, // current wins
    Loss: 0, // current loss
     
    }

console.log(quizqa.data)
console.log(quizqa.Win)
console.log(quizqa.Loss)
//EVENT LISTENERS

// Add listener to submit element
startButton.addEventListener("click", function (event) {
  // Event bubbling would occur and a new window would open if we did not include the following line of code.
  event.stopPropagation();

  LoadQuiz(1);
  countdown() 
  timeLeft = 75 ;

});

function highScoresStoredlist()
 {
  var  ul = document.createElement("ul");
  var storedNames = JSON.parse(localStorage.getItem("names"));
  
  if (highscroesArray == null|| highscroesArray.length === 0)
   {
    var retrievedData = localStorage.getItem("highscores");
    if (retrievedData == null)
    {
     highscroesArray= [];
   }
   else
    {
      highscroesArray= JSON.parse(retrievedData);
    }
   }
else
{
    //alert("Will loop here if data in array")
}
  
  ul.id = "highScoreList";
  for (var i = 0; i < highscroesArray.length; i++)
  {
    i
    var todo = highscroesArray[i];
    var liHighScores =   document.createElement("li");
    liHighScores.textContent = highscroesArray[i] ;
    liHighScores.setAttribute("data-index", i);
  //  names[0] = prompt("New member name?");
     localStorage.setItem("highscores", JSON.stringify(highscroesArray));
//  localStorage.setItem("highscores", JSON.stringify(todo));
//...

// JSON.parse(localStorage.getItem("names"));
    //var button = document.createElement("button");
    //button.textContent = "Complete ✔️";
    ul.appendChild(liHighScores);
  }
    //liHighScores.appendChild(button);
    
     var goBackHome = document.createElement('button');
     goBackHome.id = "goBackHome";
     goBackHome.innerHTML ="Go Back";
     goBackHome.style.background = "red";
     var clearHighscores = document.createElement('button');
     clearHighscores.id = "clearHighscores";
     clearHighscores.innerHTML ="Clear Highscores";
     clearHighscores.style.background = "blue";
     
     document.getElementById("quizWrapper").innerHTML = "";

     h1El.textContent = "Highscores";
     // Create Quiz Question
   //  p.textContent ="1. eg - 20";
     startButton.textContent = "Start Quiz";
     body.appendChild(main);
     
     main.appendChild(QuizSection);
     QuizSection.setAttribute("class", "container");
     QuizSection.setAttribute("id", "quizWrapper");
     QuizSection.appendChild(h1El);
     goBackHome.id = "go-back-home";
     clearHighscores.id = "clear-high-score";
    // QuizSection.appendChild(p);
     QuizSection.appendChild(ul);
     QuizSection.appendChild(goBackHome);
     QuizSection.appendChild(clearHighscores);
     QuizSection.appendChild(clearHighscores); 
     console.log(quizWrapper.querySelector("#quizWrapper"));
     goBackHomeclick = quizWrapper.querySelector("#go-back-home");
     clearHighscoresclick = quizWrapper.querySelector("#clear-high-score");

     goBackHomeclick.addEventListener("click", function (event) {
      // Event bubbling would occur and a new window would open if we did not include the following line of code.
      document.getElementById("quizWrapper").innerHTML = "";
      h1El.textContent = "Coding Quiz Challenge";
      // Create Quiz Question
      startButton.textContent = "Start Quiz";
      body.appendChild(main);
      
      main.appendChild(QuizSection);
      QuizSection.setAttribute("class", "container");
      QuizSection.setAttribute("id", "quizWrapper");
      QuizSection.appendChild(h1El);
      QuizSection.appendChild(p);
      QuizSection.appendChild(startButton);
      
    
    });

    clearHighscoresclick.addEventListener("click", function (event) {
      // Event bubbling would occur and a new window would open if we did not include the following line of code.
    
      event.stopPropagation();
      highscroesArray.length = 0;
      highscroesArray = [];
      localStorage.removeItem("highscores")

      highScoresStoredlist();
    });
}
viewHighscores.addEventListener("click", function (event) {
  // Event bubbling would occur and a new window would open if we did not include the following line of code.

  event.stopPropagation();
  highScoresStoredlist();
  highScoresStoredlist();
  console.log(timeInterval) ;
  clearInterval(timeInterval);

});


// FUNCTION  CALLS


// The following function renders items in a todo list as <li> elements

function answerValidate(answerResult)
{
   // document.getElementById("container2").innerHTML = "";
    var body = document.body;
    var h3 = document.createElement("h3");
    var QuizAnswerSection = document.createElement("section");
    var p = document.createElement("p");
    h3.textContent = "Answer is:";
    // Create Quiz Question
    p.textContent = answerResult;

    main.appendChild(QuizSection);
    QuizAnswerSection.setAttribute("class", "container2");
    QuizAnswerSection.setAttribute("id", "answerValidate");
    QuizAnswerSection.appendChild(h3);
    QuizAnswerSection.appendChild(p);
    var Aa = document.getElementById('quizWrapper');
console.log(Aa);
Aa.innerHTML += 'Hello, I am Arun';
    var pResults = document.createElement("p");
  pResults.textContent =
  "Answer is: " +  answerResult;
   Aa.appendChild(pResults);
}


function countdown() {


  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
         document.getElementById("quizWrapper").innerHTML = "";

         h1El.textContent = "Sorry Times Up";
         // Create Quiz Question
         p.textContent =
           "To play agian click below";
         startButton.textContent = "Start Quiz";
         body.appendChild(main);
         
         main.appendChild(QuizSection);
         QuizSection.setAttribute("class", "container");
         QuizSection.setAttribute("id", "quizWrapper");
         QuizSection.appendChild(h1El);
         QuizSection.appendChild(p);
         QuizSection.appendChild(startButton);
    }
  }, 1000);
}

function LoadQuiz(event,answer) {

  document.getElementById("quizWrapper").innerHTML = "";

  var QuizButton1 = document.createElement("BUTTON");
  var QuizButton2 = document.createElement("BUTTON");
  var QuizButton3 = document.createElement("BUTTON");
  var QuizButton4 = document.createElement("BUTTON");
  var submitButton = document.createElement("BUTTON");
  var enterInitials = document.createElement("input");
  var pResults = document.createElement("p");

  submitButton.id = "submitButton";
  enterInitials.id = "enterInitials";
  enterInitials.placeholder = "Enter initials";
  


  QuizButton1.id = "QuizButton1";
  QuizButton2.id = "QuizButton2";
  QuizButton3.id = "QuizButton3";
  QuizButton4.id = "QuizButton4";


  //QuizButton1.setAttribute("click",LoadQuiz);
  if(QuestionAsked === 0)
  {
    p.textContent = quizqa.data[0].q;
    QuizButton1.textContent = quizqa.data[0].o[0];
    QuizButton2.textContent =  quizqa.data[0].o[1];
    QuizButton3.textContent =  quizqa.data[0].o[2];
    QuizButton4.textContent =  quizqa.data[0].o[3];
  }
  else if(QuestionAsked === 1)
  {
    p.textContent = quizqa.data[1].q;
    QuizButton1.textContent = quizqa.data[1].o[0];
    QuizButton2.textContent =  quizqa.data[1].o[1];;
    QuizButton3.textContent =  quizqa.data[1].o[2];;
    QuizButton4.textContent =  quizqa.data[1].o[3];;

  }

  else if(QuestionAsked === 2)
  {
    p.textContent = quizqa.data[2].q;
    QuizButton1.textContent = quizqa.data[2].o[0];
    QuizButton2.textContent =  quizqa.data[2].o[1];;
    QuizButton3.textContent =  quizqa.data[2].o[2];;
    QuizButton4.textContent =  quizqa.data[2].o[3];;

  }

  else if(QuestionAsked === 3 )
  {
    console.log(quizqa.data[QuestionAsked])
    p.textContent = quizqa.data[3].q;
    QuizButton1.textContent = quizqa.data[3].o[0];
    QuizButton2.textContent =  quizqa.data[3].o[1];;
    QuizButton3.textContent =  quizqa.data[3].o[2];;
    QuizButton4.textContent =  quizqa.data[3].o[3];;

  }
  
  
  else if(QuestionAsked === 4 )
  {
    console.log(quizqa.data[QuestionAsked])
    p.textContent = quizqa.data[4].q;
    QuizButton1.textContent = quizqa.data[4].o[0];
    QuizButton2.textContent =  quizqa.data[4].o[1];;
    QuizButton3.textContent =  quizqa.data[4].o[2];;
    QuizButton4.textContent =  quizqa.data[4].o[3];;

  }

  if (QuestionAsked < 5) 
  {


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

 
  }
  else
  {

    //document.getElementById("quizWrapper").innerHTML = "";
    h1El.textContent = "All done!";
    //SubmitButton = quizWrapper.querySelector("#submitButton")
    // Create Quiz Question
    p.textContent = "Your final score is: " + (quizqa.Win / 5) * 100;
    submitButton.textContent  = "Submit";
  
    submitButton.textContent = "Submit Score";
    enterInitials.textContent = "Initials";
    body.appendChild(QuizSection);

    QuizSection.appendChild(h1El);
    QuizSection.appendChild(p);
    QuizSection.appendChild(enterInitials);
    QuizSection.appendChild(submitButton);

    submitButton.addEventListener("click", function (event) {

      highscroesArray.push(enterInitials.value + "-" +  (quizqa.Win / 5) * 100)
      highScoresStoredlist();
      console.log(highscroesArray);

    });
    

  }


//JAVASCRIPT VARIABLES
  
//EVENT LISTENERS 

  QuizButton1click.addEventListener("click", function (event) {
    // Event bubbling would occur and a new window would open if we did not include the following line of code.
    event.stopPropagation();
    console.log(QuizButton1click.innerHTML);
    console.log(quizqa.data[QuestionAsked].a);
    if(quizqa.data[QuestionAsked].a === QuizButton1click.innerHTML)
    {
        answerValidate("correct")
        QuestionAsked++;
        quizqa.Win++;
        var pResults = document.createElement("p");
        pResults.textContent = "Answer is: " +  3;
        QuizSection.appendChild(pResults);

      //  <audio id="audio" src="http://www.soundjay.com/button/beep-07.wav" autoplay="false" ></audio>
       // <a onclick="playSound();"> Play</a>
       // var sound = document.getElementById("audio");
       // sound.play();
     }
    else 
    {
        answerValidate("Wrong")
        QuestionAsked++;
        quizqa.Loss++;
        timeLeft = timeLeft - 15;

    }
    LoadQuiz(2,QuizButton1click.innerHTML);
  });

  QuizButton2click.addEventListener("click", function (event) {
    // Event bubbling would occur and a new window would open if we did not include the following line of code.
    event.stopPropagation();
    console.log(quizqa.data[QuestionAsked].a);
    if(quizqa.data[QuestionAsked].a === QuizButton2click.innerHTML)
    {
        answerValidate("correct");
        QuestionAsked++;
        quizqa.Win++;
     }
    else 
    {
        answerValidate("Wrong")
        QuestionAsked++;
        quizqa.Loss++;
        timeLeft = timeLeft - 15;
    }
    LoadQuiz(3,QuizButton2click.innerHTML);
  });

  QuizButton3click.addEventListener("click", function (event) {
    // Event bubbling would occur and a new window would open if we did not include the following line of code.
    event.stopPropagation();
    console.log(QuizButton3click.innerHTML);
    console.log(quizqa.data[QuestionAsked].a);
    if(quizqa.data[QuestionAsked].a === QuizButton3click.innerHTML)
    {
        answerValidate("correct");
        QuestionAsked++;
        quizqa.Win++;
     }
    else 
    {
        answerValidate("Wrong")
        QuestionAsked++;
        quizqa.Loss++;
        timeLeft = timeLeft - 15;
    }
    LoadQuiz(4,QuizButton2click.innerHTML);
  });

  QuizButton4click.addEventListener("click", function (event) {
    // Event bubbling would occur and a new window would open if we did not include the following line of code.
    event.stopPropagation();
    console.log(QuizButton4click.innerHTML);
    console.log(quizqa.data[QuestionAsked].a);
    if(quizqa.data[QuestionAsked].a === QuizButton4click.innerHTML)
    {
        answerValidate("correct");
        QuestionAsked++;
        quizqa.Win++;
        
     }
    else 
    {
        answerValidate("Wrong")
        QuestionAsked++;
        quizqa.Loss++;
        timeLeft = timeLeft - 15;
    }
    LoadQuiz(5,QuizButton2click.innerHTML);
  });
}
