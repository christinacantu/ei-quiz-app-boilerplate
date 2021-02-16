/**
 * Example store structure
 */
const store = {
  questions: [
    {
      question: 'How many boys has Christina tasted?',
      answers: [
        '1',
        '3',
        '5',
        '6'
      ],
      correctAnswer: '3'
    },
    {
      question: 'What is Christina’s boyfriend’s name?',
      answers: [
        'Zachary',
        'Joseph',
        'TJ',
        'Blake'
      ],
      correctAnswer: 'Zachary'
    },
    {
      question: 'Who was Christina’s favorite boy before her current one?',
      answers: [
        'Zachary',
        'Joseph',
        'TJ',
        'Blake'
      ],
      correctAnswer: 'Blake'
    },
    {
      question: 'Who does Christina want to have after her current boyfriend?',
      answers: [
        '1',
        '3',
        '5',
        '6'
      ],
      correctAnswer: '3'
    },
    {
      question: 'Does Christina love her current boyfriend more than he loves her or does he love her more than she loves him?',
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
  console.log('rendered render quiz');
  const landingPage = 
  `<p>How well do you know Wistina?</p>
  <button class="start">Start!</button>
  `;
  $('main').html(landingPage);
}

function handleStart() {
  console.log('handled start!');
  $('.start').click(generateQuestionElement);
}

function generateQuestionElement(question, index) {
  console.log('generate question element!');
console.log(index)
console.log(question)
  return `
    <p>Question what out of what</p>
    <form>
      <fieldset>
        <legend>questions.question</legend>
        <label for="answer">questions.answers.answer</label>
        <input type="radio" name="answer">
      </fieldset>
      <button class="next">Next</button>
    </form>
  `
}

function generateQuestionsString() {
  console.log('generate questions string!');

  const questions = store.questions.map((question, index) => generateQuestionElement(question, index));
  return questions.join('');
}

function handleCheckAnswer() {
  console.log('handled next button');
}

function handleCorrectAnswer() {
  console.log('handled correct answer!');
}

function handleWrongAnswer() {
  console.log('handled wrong answer!');
}

function handleNextButton() {
  console.log('handled next button!');
}

function handleClose() {
  console.log('handled close!');
}

function handleQuizApp() {
  renderQuiz();
  handleStart();
  handleCheckAnswer();
  handleCorrectAnswer();
  handleWrongAnswer();
  handleNextButton();
  handleClose();
}

$(handleQuizApp);



/**
 * Landing page 
 * Next question
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)