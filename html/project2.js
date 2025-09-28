// DOM elements
const startScreen = document.querySelector(".start-screen");
const quizScreen = document.querySelector(".quiz-screen");
const endScreen = document.querySelector(".end-screen");
const startBtn = document.querySelector(".start");
const restartBtn = document.querySelector(".restart");
const themeToggleBtn = document.querySelector(".theme-toggle");
const questionEl = document.querySelector(".question");
const answersEl = document.querySelector(".answer-wrapper");
const currentEl = document.querySelector(".current");
const totalEl = document.querySelector(".total");
const submitBtn = document.querySelector(".submit");
const progressBar = document.querySelector(".progress-bar");
const progressText = document.querySelector(".progress-text");
const finalScoreEl = document.querySelector(".final-score");
const totalScoreEl = document.querySelector(".total-score");
const percentageEl = document.querySelector(".percentage");

let questions = [];
let currentIndex = 0;
let score = 0;
let timer;
let timePerQ = 10;
let timeLeft = 10;

function showScreen(screen) {
  [startScreen, quizScreen, endScreen].forEach(s => s.classList.remove("show"));
  screen.classList.add("show");
}

// Fetch questions
async function fetchQuestions() {
  const num = document.getElementById("num-questions").value;
  const category = document.getElementById("category").value;
  const difficulty = document.getElementById("difficulty").value;
  timePerQ = parseInt(document.getElementById("time").value);

  let url = `https://opentdb.com/api.php?amount=${num}&type=multiple`;
  if (category) url += `&category=${category}`;
  if (difficulty) url += `&difficulty=${difficulty}`;

  const res = await fetch(url);
  const data = await res.json();
  questions = data.results.map(q => {
    const options = [...q.incorrect_answers];
    const rand = Math.floor(Math.random() * (options.length + 1));
    options.splice(rand, 0, q.correct_answer);
    return { question: q.question, correct: q.correct_answer, options };
  });

  totalEl.textContent = questions.length;
  currentIndex = 0;
  score = 0;
  showScreen(quizScreen);
  loadQuestion();
}

function loadQuestion() {
  clearInterval(timer);
  timeLeft = timePerQ;
  progressBar.style.width = "100%";
  progressText.textContent = timeLeft;

  const q = questions[currentIndex];
  questionEl.innerHTML = q.question;
  answersEl.innerHTML = "";
  q.options.forEach(opt => {
    const div = document.createElement("div");
    div.className = "answer";
    div.textContent = opt;
    div.onclick = () => {
      document.querySelectorAll(".answer").forEach(a => a.classList.remove("selected"));
      div.classList.add("selected");
      submitBtn.disabled = false;
    };
    answersEl.appendChild(div);
  });

  currentEl.textContent = currentIndex + 1;
  submitBtn.disabled = true;
  startTimer();
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    progressBar.style.width = `${(timeLeft / timePerQ) * 100}%`;
    progressText.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      handleSubmit();
    }
  }, 1000);
}

function handleSubmit() {
  clearInterval(timer);
  const selected = document.querySelector(".answer.selected");
  const q = questions[currentIndex];

  if (selected) {
    if (selected.textContent === q.correct) {
      selected.classList.add("correct");
      score++;
    } else {
      selected.classList.add("wrong");
      document.querySelectorAll(".answer").forEach(a => {
        if (a.textContent === q.correct) a.classList.add("correct");
      });
    }
  } else {
    document.querySelectorAll(".answer").forEach(a => {
      if (a.textContent === q.correct) a.classList.add("correct");
    });
  }

  submitBtn.disabled = true;

  // Delay before moving to next question
  setTimeout(() => {
    currentIndex++;
    if (currentIndex < questions.length) {
      loadQuestion();
    } else {
      endQuiz();
    }
  }, 1500);
}

function endQuiz() {
  showScreen(endScreen);
  finalScoreEl.textContent = score;
  totalScoreEl.textContent = questions.length;
  percentageEl.textContent = `Percentage: ${Math.round((score / questions.length) * 100)}%`;
}

function restartQuiz() {
  showScreen(startScreen);
}

function toggleTheme() {
  document.body.classList.toggle("light");
}

// Event listeners
startBtn.addEventListener("click", fetchQuestions);
submitBtn.addEventListener("click", handleSubmit);
restartBtn.addEventListener("click", restartQuiz);
themeToggleBtn.addEventListener("click", toggleTheme);
