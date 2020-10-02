var inquirer = require('inquirer');
var fs = require("fs");
var path = require("path")

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Enter an explanation on how to install the app."
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide project usage information."
    },
    {
        type: "input",
        name: "contribution",
        message: "Please provide contribution guidelines."
    },
    {
        type: "input",
        name: "test",
        message: "Please provide testing information."
    },
    {
        type: "input",
        name: "githubUser",
        message: "What is your Github username?."
    },
    {
        type: "list",
        name: "license",
        message: "What type of license would you like to use, nerd?",
        choices: ['MIT', 'GNU GPL v3', 'Apache 2.0', 'Mozilla Public License 2.0']
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
      console.log(answers)
      let markdown = `# ${answers.title}


## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contribution
${answers.contribution}

## Test
${answers.test}

## Github Username
${answers.githubUser}

## License
${answers.license}

## Questions?
Please send questions to ${answers.email}`
      writeToFile("README.md", markdown)
  })
    .catch(error => {
      if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
}

// function call to initialize program
init();

// inquirer
