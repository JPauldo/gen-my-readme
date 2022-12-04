// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your Github username?',
    name: 'username'
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email'
  },
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
    message: 'What does the user need to know about contributing to the repo?',
    name: 'contribute'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  let path = './sample';
  console.log(fs.existsSync(path));
  if(!fs.existsSync(path)) {
    fs.mkdirSync(path);
    console.log(fs.existsSync(path));
  }
  path += '/' + fileName;
  fs.writeFile(path, markdown(data), (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) =>
      writeToFile('README.md', response)
    )
}

// Function call to initialize app
init();
