// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your project\'s name?',
    name: 'title'
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
