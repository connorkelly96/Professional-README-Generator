//dependencies
const fs = require('fs');
const inquirer = require('inquirer');
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
//an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "what is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "what is your email?"
    },
    {
      type: "input",
    name: "title",
    message: "What is your project name?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project."
    },
    {
        type: "input",
        name: "license",
        message: "What license does your project have?",
        choices: ["APACHE2.0", "Boost1.0", "GPL3.0", "BSD2" ,"BSD3", "MIT", "None"]
    },
    {
        type: "input",
        name: "dependencies",
        message: "Did you have any dependencies to install?",
        default: "npm i"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage of this repo?"
    },
    {
        type: "input",
        name: "test",
        message: "what command do you want running the tests?",
        default: "npm test"
    },
    {
        type: "input",
        name: "contributors",
        message: "Who are the contributors of this repo?"  
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer    
        .prompt(questions)
        .then(answers => {
            console.log("Generating answers now...");
            writeToFile("./dist/README.md", generateMarkdown({...inquirerAnswers }));
            //do stuff with the answers
            console.log(answers)

            //after all answers are colleced, write to file!
            //TODO - build a string that uses our answers to generate some markdown and write that to 
            //our file as the 'data' parameter. (replace the test values below)
        });
    };
// Function call to initialize app
init();
