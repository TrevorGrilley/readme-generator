// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {message} = require('statuses');

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
            name: 'Project Description',
            //validation to check if user entered a proper response
            validate: (value)=>{ if(value){return true} else {return 'Please enter response to continue'}},
        },

        //Installation instructions
        {
            type: 'input',
            message: 'Enter installation instructions',
            name: 'Installation',
            //validation to check if user entered a proper response
            validate: (value)=>{ if(value){return true} else {return 'Please enter response to continue'}},
        },

        //Usage information
        {
            type: 'input',
            message: 'Enter usage information',
            name: 'Usage',
            //validation to check if user entered a proper response
            validate: (value)=>{ if(value){return true} else {return 'Please enter response to continue'}},
        },

        //Contribution Guidelines
        {
            type: 'input',
            message: 'Enter contribution guidelines',
            name: 'Contribution',
            //validation to check if user entered a proper response
            validate: (value)=>{ if(value){return true} else {return 'Please enter response to continue'}},
        },

        //Test instructions
        {
            type: 'input',
            message: 'Enter test instructions',
            name: 'Test',
            //validation to check if user entered a proper response
            validate: (value)=>{ if(value){return true} else {return 'Please enter response to continue'}},
        },

        //Licenses
        {
            type: 'input',
            message: 'Enter licenses used',
            name: 'Licenses',
            //validation to check if user entered a proper response
            validate: (value)=>{ if(value){return true} else {return 'Please enter response to continue'}},
        },

        //Github Username
        {
            type: 'input',
            message: 'Enter github username',
            name: 'Github',
            //validation to check if user entered a proper response
            validate: (value)=>{ if(value){return true} else {return 'Please enter response to continue'}},
        },

        //Email
        {
            type: 'input',
            message: 'Enter email',
            name: 'Email',
            //validation to check if user entered a proper response
            validate: (value)=>{ if(value){return true} else {return 'Please enter response to continue'}},
        },
    ]
)


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeFileSync(fileName, data);
}
// TODO: Create a function to initialize app
function init() {
    promptUser().then((data) => {
      writeFile(data);
    });
  }
// Function call to initialize app
init();
