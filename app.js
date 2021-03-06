/**
 * Example store structure
 */
const store = {
  questions: [
    {
      questionText: 'How many boys has Christina tasted?',  
      answers: [
        '1',
        '3',
        '5',
        '6'
      ],
      correctAnswer: '3'
    },
    {
      questionText: 'What is Christina’s boyfriend’s name?',
      answers: [
        'Zachary',
        'Joseph',
        'TJ',
        'Blake'
      ],
      correctAnswer: 'Zachary'
    },
    {
      questionText: 'Who was Christina’s favorite boy before her current one?',
      answers: [
        'Zachary',
        'Joseph',
        'TJ',
        'Blake'
      ],
      correctAnswer: 'Blake'
    },
    {
      questionText: 'Who does Christina want to have after her current boyfriend?',
      answers: [
        '1',
        '3',
        '5',
        '6'
      ],
      correctAnswer: '3'
    },
    {
      questionText: 'Does Christina love her current boyfriend more than he loves her or does he love her more than she loves him?',
      answers: [
        'Christina’s love is stronger!',
        'Christina’s boyfriend’s love is stronger!'
      ],
      correctAnswer: "Christina’s love is stronger!"
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

function renderQuiz() {
  //this will be responsible for rendering the quiz to the dom
  const landingPage =   
  `
  <div class=" h-screen flex flex-col items-center justify-center bg-green-800">
    <p class="pb-6 text-3xl  text-white">How well do you know Wistina?</p>
    <button class="p-9 start bg-blue-500 rounded">Start!</button>
  </div>
  `;
  $('main').html(landingPage);
}

function renderHeader() {
  const header =
  `
  <header class="flex justify-center bg-green-600">
    <h1 class="text-5xl">Christina's World</h1>
  </header>
  `;
  $('body').prepend(header);
}

function handleStart() {
  $(document).on('click', '.start', function(event) {
    generateCurrentQuestionString();
  });
}

function generateQuestionElement(question) {  //create an element for each question passed
  return `
  <div>
    <div class="mb-10 bg-green-500">
      <p>Question ${store.questionNumber+1} out of ${store.questions.length}</p>
      <p> You've gotten ${store.score} out of ${store.questions.length} questions right!</p>
    </div>
    <div>
      <form class="question-form">
        <fieldset>
          <legend class="bg-green-800 text-center">${question.questionText}</legend>
          ${generateQuestionAnswers(question.answers)}
        </fieldset>
        <div class="text-center mb-5"><button class="p-9 check bg-blue-500 rounded">Check your answer!</button></div>
      </form>
    </div>
  </div>
  `
}

function generateCurrentQuestionString() {  //create a string that holds all of the store questions
  const question = store.questions[store.questionNumber];
  const questionString = generateQuestionElement(question);
  $('main').html(questionString);  //print the string after its been passed through generate question element
}

function generateQuestionAnswers(answers) {
  let answersString = '<div class="pt-10 pb-6 md:grid md:grid-cols-2 md:gap-4">';
  for (const answer of answers) {
    answersString += `
    <div class="mb-5 bg-red-300 p-10">
      <label for="${answer}">
        <input type="radio" id="${answer}" name="answer" value="${answer}" required="required">
        ${answer}
      </label>
    </div>
  `
  }
  answersString += '</div>';
  return answersString;
}

function checkAnswer(userAnswer) {
    let message = '';
    if (userAnswer === store.questions[store.questionNumber].correctAnswer) {
      let correctScore = store.score++
      message = handleCorrectAnswer();
    } else {
      message = handleWrongAnswer();
    }
    $('main').html(message);
}

function handleUserAnswer() {
  $(document).on('submit', '.question-form', function(event) {
    event.preventDefault();
    const userAnswer = $('input[name="answer"]:checked').val();
    checkAnswer(userAnswer);
  })
}

function handleCorrectAnswer() {
  return `
  <div class="text-center pt-10 pl-2 pr-2 text-3xl h-screen md:flex md:flex-col md:items-center">
    <img src="images/IMG_0044.jpg" class="pb-10">
    <p class="pb-10">Biiiiiiitch, yeeeeeees</p>
    <button class="mb-8 p-9 next bg-blue-500 rounded">Next question!</button>
  </div>
  `
}

function handleWrongAnswer() {
  return `
  <div class="text-center pt-10 pl-2 pr-2 text-3xl h-screen md:flex md:flex-col md:items-center">
    <img src="images/IMG_0045.jpg" class="pb-10">
    <p class="pb-3">Really, bitch?</p>
    <p class="pb-10">The correct answer is ${store.questions[store.questionNumber].correctAnswer}!</p>
    <button class="p-9 next bg-blue-500 rounded">Next question!</button>
  </div>
  `
}

function handleNextButton() {
  $(document).on('click', '.next', function(event) {  //bubble up
    store.questionNumber++;

    if (store.questionNumber < store.questions.length) {
      generateCurrentQuestionString(store.questions[store.questionNumber]);
    } else {
      const finalPage = 
      `
      <div class="flex flex-col items-center justify-center h-screen">
        <p class="pb-10">Your final score is ${store.score} out of ${store.questions.length}!<p>
        <button class="restart bg-blue-500 rounded border-2 border-transparent p-16 block">Restart!</button>
      </div>
      `
      $('main').html(finalPage);
    }
  })  
}

function handleRestart() {
  $(document).on('click', '.restart', function(event) {
    store.questionNumber = 0;
    store.score = 0;
    renderQuiz();
  })
}

function handleQuizApp() {
  renderQuiz();
  renderHeader();
  handleStart();
  handleUserAnswer();
  handleCorrectAnswer();
  handleWrongAnswer();
  handleNextButton();
  handleRestart();
}

$(handleQuizApp);

/** 

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)