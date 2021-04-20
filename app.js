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
  console.log('rendered render quiz');
  const landingPage =   
  `<p>How well do you know Wistina?</p>
  <button class="start">Start!</button>
  `;
  $('main').html(landingPage);
}

function handleStart() {
  console.log('handled start!');
  console.log($('.start').click(generateCurrentQuestionString));
}

function generateQuestionElement(question) {  //create an element for each question passed
  console.log('generate question element!');
  return `
    <p>Question what out of what</p>
    <form>
      <fieldset>
        <legend>${question.questionText}</legend>
        ${generateQuestionAnswers(question.answers)}
      </fieldset>
      <button class="next">Next</button>
    </form>
  `
}

function generateCurrentQuestionString() {  //create a string that holds all of the store questions
  console.log('generate questions string!');
  const question = store.questions[store.questionNumber];
  const questionString = generateQuestionElement(question);
  $('main').html(questionString);  //print the string after its been passed through generate question element
}

function generateQuestionAnswers(answers) {
  console.log('generated answers!');
  let answersString = '';
  for (const answer of answers) {
    console.log(answer);
    answersString += `
    <input type="radio" name="answer">
    <label for="answer">${answer}</label>
  `
  }
  return answersString;
}

function handleCheckAnswer() {
  console.log('handled next button');
  //store user's answer in userAnswer variable
  //take userAnswer and compare it to the correctAnswer
  //if the answer is correct, display handleCorrectAnswer
  //if the answer is wrong, display handleWrongAnswer
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