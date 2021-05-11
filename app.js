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
  `<p>How well do you know Wistina?</p>
  <button class="start">Start!</button>
  `;
  $('main').html(landingPage);
}

function handleStart() {
  console.log($('.start').click(generateCurrentQuestionString));
}

function generateQuestionElement(question) {  //create an element for each question passed
  return `
    <p>Question ${store.questionNumber+1} out of  ${store.questions.length}</p>
    <p> You've gotten ${store.score} out of ${store.questions.length} questions right!</p>
    <form class="question-form">
      <fieldset>
        <legend>${question.questionText}</legend>
        ${generateQuestionAnswers(question.answers)}
      </fieldset>
      <button class="check">Check your answer!</button>
    </form>
  `
}

function generateCurrentQuestionString() {  //create a string that holds all of the store questions
  const question = store.questions[store.questionNumber];
  const questionString = generateQuestionElement(question);
  $('main').html(questionString);  //print the string after its been passed through generate question element
}

function generateQuestionAnswers(answers) {
  let answersString = '';
  for (const answer of answers) {
    answersString += `
    <input type="radio" name="answer" value="${answer}" required="required">
    <label for="${answer}">${answer}</label>
  `
  }
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
    <p>Biiiiiiitch, yeeeeeees</p>
    <button class="next">Next question!</button>
  `
}

function handleWrongAnswer() {
  return `
    <p>Really, bitch?</p>
    <p>The correct answer is ${store.questions[store.questionNumber].correctAnswer}</p>
    <button class="next">Next question!</button>
  `
}

function handleNextButton() {
  $(document).on('click', '.next', function(event) {  //bubble up
    store.questionNumber++;

    if (store.questionNumber < store.questions.length) {
      generateCurrentQuestionString(store.questions[store.questionNumber]);
    }
  })  
}

function handleClose() {
  console.log('handled close!');
}

function handleQuizApp() {
  renderQuiz();
  handleStart();
  handleUserAnswer();
  handleCorrectAnswer();
  handleWrongAnswer();
  handleNextButton();
  handleClose();
}

$(handleQuizApp);

/** 

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

// If they were incorrect, they should be told the correct answer.
// be moved onto the next question (or interact with an element to move on).
// Users should be shown their overall score at the end of the quiz. In other words, how many questions they got right out of the total questions asked.
// Users should be able to start a new quiz.