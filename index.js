// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

// An array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your project\'s name?',
    name: 'title'
  },
  {
    type: 'input',
    message: 'Please write a short description of your project.',
    name: 'desc'
  },
  {
    type: 'list',
    message: 'What kind of license should your project have?',
    name: 'license',
    choices: ['Apache', 'Boost Software', 'GNU', 'MIT', 'Mozilla', 'None']
  },
  {
    type: 'input',
    message: 'What command should be run to install dependencies?',
    name: 'dependencies',
    default: 'npm i'
  },
  {
    type: 'input',
    message: 'What command should be run for tests?',
    name: 'tests',
    default: 'npm test'
  },
  {
    type: 'input',
    message: 'What does the user need to know about using the repo?',
    name: 'usage'
  },
  {
    type: 'input',
    message: 'What is your Github username?',
    name: 'username'
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email'
  }
];

/**
 * Takes the data from the questions, generates a README and writes it to file based on the path provided. 
 * @param {string} fileName The filename for the README
 * @param {object} data The responses from the inquirer prompt
 * @returns {void} Nothing
 */
function writeToFile(fileName, data) {
  let path = './sample';
  if(!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
  path += '/' + fileName;
  fs.writeFile(path, markdown(data), (err) =>
    err ? console.error(err) : console.log('Generated README in Sample folder.')
  );
}

// TODO: Create a function to 
/**
 * Initializes the application on run.
 * @returns {void} Nothing
 */
function init() {
  inquirer
    .prompt(questions)
    .then((response) =>
      writeToFile('README.md', response)
    )
}

// Function call to initialize app
init();
