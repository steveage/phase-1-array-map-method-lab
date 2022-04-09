const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(upperCase);
}

function upperCase(tutorial) {
  const tutorialWords = tutorial.split(/(\s+)/);
  const upperCaseWords = tutorialWords.map(upperCaseWord);
  const upperCaseTutorial = upperCaseWords.join('');
  return upperCaseTutorial;
}

function upperCaseWord(word) {
  const upperCaseFirstLetter = word[0].toUpperCase();
  const remainingLetters = word.length > 1 ? word.substr(1) : ``;
  const upperCaseWord = `${upperCaseFirstLetter}${remainingLetters}`;
  return upperCaseWord;
}