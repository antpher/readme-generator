// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter contribution guidelines'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter test instructions',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license do you have for your application?',
        choices: ['MIT', 'BASH', 'GIMP', 'Apache', 'GNU', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
      if (err) {
        console.log(err);
        }  else console.log('success')
        
    })
        
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile('./README.md', generateMarkdown({ ...answers }));
    })
}

// Function call to initialize app
init();