// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = requie("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
    name: 'projectName',
    message: 'What is your project name?'
    },
    {
        type:'input',
        name: 'description',
        message: 'Describe your project.'
    },
    {
        type:'input',
        name:'Table of Contents',
        message:'What do you want to put in your Table of Contents?'
    },
    {
        type:'input',
        name:'installation',
        message:'What are the steps required to install your project?'
    },
    {
        type:'input',
        name:'usage',
        message:'Provide onstructions on how to use your project.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => err ? console.log(err) : console.log('Readme Generated'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer    
        .prompt(questions)
        .then(answers => {
            console.log("Generating answers now...");
            writeToFile("README.md", generateMarkdown({...inquirerAnswers}));
            //do stuff with the answers
            console.log(answers)

            //after all answers are colleced, write to file!
            //TODO - build a string that uses our answers to generate some markdown and write that to 
            //our file as the 'data' parameter. (replace the test values below)
        });
    };
// Function call to initialize app
init();
