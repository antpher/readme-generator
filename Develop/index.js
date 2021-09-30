// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
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
        choices: ['Public domain', 'Permissive', 'LGPL', 'Copyleft', 'Proprietary', 'None']
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();