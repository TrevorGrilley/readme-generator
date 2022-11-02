// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genRead = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

inquirer.prompt(
    [
        //Project title
        {
            type: 'input',
            message: 'Enter project title',
            name: 'title',
            //validation to check if user entered a proper response
            validate: (value)=>{ if(value){return true} else {return 'Please enter response to continue'}},
        },

        //Project description
        {
            type: 'input',
            message: 'Enter project description',
            name: 'title',
            //validation to check if user entered a proper response
            validate: (value)=>{ if(value){return true} else {return 'Please enter response to continue'}},
        },

        //Installation instructions
        {
            type: 'input',
            message: 'Enter installation instructions',
            name: 'title',
            //validation to check if user entered a proper response
            validate: (value)=>{ if(value){return true} else {return 'Please enter response to continue'}},
        },

        //Usage information
        {
            type: 'input',
            message: 'Enter usage information',
            name: 'title',
            //validation to check if user entered a proper response
            validate: (value)=>{ if(value){return true} else {return 'Please enter response to continue'}},
        },

        //Contribution Guidelines
        {
            type: 'input',
            message: 'Enter contribution guidelines',
            name: 'title',
            //validation to check if user entered a proper response
            validate: (value)=>{ if(value){return true} else {return 'Please enter response to continue'}},
        },

        //Test instructions
        {
            type: 'input',
            message: 'Enter test instructions',
            name: 'title',
            //validation to check if user entered a proper response
            validate: (value)=>{ if(value){return true} else {return 'Please enter response to continue'}},
        },

        //Licenses
        {
            type: 'input',
            message: 'Enter licenses used',
            name: 'title',
            //validation to check if user entered a proper response
            validate: (value)=>{ if(value){return true} else {return 'Please enter response to continue'}},
        },

        //Github Username
        {
            type: 'input',
            message: 'Enter github username',
            name: 'title',
            //validation to check if user entered a proper response
            validate: (value)=>{ if(value){return true} else {return 'Please enter response to continue'}},
        },

        //Email
        {
            type: 'input',
            message: 'Enter email',
            name: 'title',
            //validation to check if user entered a proper response
            validate: (value)=>{ if(value){return true} else {return 'Please enter response to continue'}},
        },
    ]
)


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
