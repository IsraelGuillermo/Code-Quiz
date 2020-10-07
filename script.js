var count = 100;
var score = document.querySelector("#starting-Score");
var startButton = document.querySelector("#start-quiz");
var questionContainer = document.querySelector("#question-container");
var questionEl = document.querySelector("#question-asked");
var answerBtnSection = document.querySelector("#answer-buttons");
var scoreDiv = document.querySelector("#score-div");
var nameInput = document.querySelector("#name-input");
var submitBtn = document.querySelector("#submit");
var scoreChart = document.querySelector("#score-chart");
var feedback = document.querySelector("#feedback");
var scoreListEl = document.querySelector("#scoreList");

// array of questions
var questionsArray = [
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
var timerInterval;

// Timer which starts counting down from 100 once Start is clicked
function setTime() {
  timerInterval = setInterval(function () {
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
  setTime();
  startButton.parentNode.removeChild(startButton);
  questionContainer.classList.remove("hide");
  loadQuestion();
}
// event listener which will run start game function once start button is clicked
startButton.addEventListener("click", startGame);

// function which loads question
var round = 0;
function loadQuestion() {
  questionEl.textContent = questionsArray[round].question;
  var answers = questionsArray[round].answers;
  answerBtnSection.innerHTML = "";
  answers.forEach(function (answers) {
    var button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.classList.add("mb-2");
    button.classList.add("container-fluid");
    answerBtnSection.appendChild(button);
    button.textContent = answers.text;
    button.addEventListener("click", function () {
      if (round === questionsArray.length - 1) {
        if (answers.correct === true) {
          feedback.textContent = "correct";
          feedback.classList.remove("hide");
          round++;
          endQuiz();
        } else {
          round++;
          count = count - 5;
          feedback.textContent = "Incorrect";
          feedback.classList.remove("hide");
          endQuiz();
        }
        return;
      } else {
        if (answers.correct === true) {
          feedback.textContent = "correct";
          feedback.classList.remove("hide");
          round++;
        } else {
          round++;
          count = count - 5;
          feedback.textContent = "Incorrect";
          feedback.classList.remove("hide");
        }
      }
      loadQuestion(round);
    });
  });
}

function loadNextQuestion() {
  questionEl.textContent = questionsArray[round].question;
  var answers = questionsArray[round].answers;
  answers.forEach(function (answers) {
    var button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.classList.add("mb-2");
    button.textContent = answers.text;
  });
}

function endQuiz() {
  questionContainer.innerHTML = "";
  answerBtnSection.innerHTML = "";
  scoreDiv.innerHTML = "";
  clearInterval(timerInterval);
  var finalScore = document.createElement("div");
  finalScore.classList.add("text-center");
  finalScore.textContent = "All done! Your Final score is " + count;
  questionContainer.appendChild(finalScore);
  submitBtn.classList.remove("hide");
  nameInput.classList.remove("hide");
}

function renderHighScore() {
  var scoresArray = [];
  var storedHighScores = JSON.parse(localStorage.getItem("highScores"));

  scoresArray.push(storedHighScores);
  var li = document.createElement("li");
  li.textContent = storedHighScores;
  scoreListEl.appendChild(li);
  console.log(storedHighScores);
}

function submitName() {
  var name = nameInput.value;s
  // var Count = JSON.stringify(count);
  var highScores = {
    Name: name,
    Score: count,
  };
  localStorage.setItem("highScores", JSON.stringify(highScores));

  scoreListEl.classList.remove("hide");

  renderHighScore();
}

submitBtn.addEventListener("click", submitName);
