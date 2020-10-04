var count = 10;
var score = document.querySelector("#starting-Score");
var startButton = document.querySelector("#start-quiz");
var questionContainer = document.querySelector("#question-container");
var questionAsked = document.querySelector("#question-asked");
// array of questions
var questions = [
  {
    question: "Which of the following is correct about features of JavaScript?",
    answers: [
      {
        text: "JavaScript is a lightweight, interpreted programming language.",
        correct: false,
      },
      {
        text:
          "JavaScript is designed for creating network-centric applications.",
        correct: false,
      },
      {
        text: "JavaScript is complementary to and integrated with Java.",
        correct: false,
      },
      {
        text: "All of the above",
        correct: true,
      },
    ],
  },
  {
    question: "Which built-in method sorts the elements of an array?",
    answers: [
      { text: "changeOrder(order)", correct: false },
      {
        text: "order()",
        correct: false,
      },
      {
        text: "sort()",
        correct: true,
      },
      {
        text: "None of the above",
        correct: false,
      },
    ],
  },
  {
    question: "Which of the following will write a message in an alert box?",
    answers: [
      { text: "alertBox", correct: false },
      { text: "alert", correct: true },
      { text: "console.log", correct: false },
      { text: "messageAlert", correct: false },
    ],
  },
  {
    question:
      "Which tag is an extension to HTML that can enclose any number of JavaScript statements?",
    answers: [
      { text: "script", correct: true },
      { text: "body", correct: false },
      { text: "head", correct: false },
      { text: "title", correct: false },
    ],
  },
  {
    question: "Which statement is used to test for a specific condition?",
    answers: [
      { text: "if", correct: true },
      { text: "for", correct: false },
      { text: "switch", correct: false },
    ],
  },
];
// Timer which starts counting down from 100 once Start is clicked
function setTime() {
  var timerInterval = setInterval(function () {
    if (count > 0) {
      count--;
      score.innerHTML = count;
    }

    if (count === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

// function which removes start button and loads questions once game is started
function startGame() {
  startButton.parentNode.removeChild(startButton);
  questionContainer.classList.remove("hide");
  loadQuestion();

  setTime();
}
// event listener which will run start game function once start button is clicked
startButton.addEventListener("click", startGame);

// function which loads question
function loadQuestion() {
  for (var i = 0; i < questions.length; i++) {
    questionAsked.textContent = questions[0].question;
  }

  if (answers.correct === true) {
    alert("Correct!");
  }
}
