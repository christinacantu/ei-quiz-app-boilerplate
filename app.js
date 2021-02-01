/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
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

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
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