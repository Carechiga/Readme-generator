// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create a function to write README file
function writeToFile(readmeContent) {
    fs.writeFile('README.md', readmeContent, (err) =>
    err ? console.error(err) : console.log('Generating README!'))
}

const generateREADME = ({ projectName, motivation, reason, problem, lesson, installation, usage, credits, license }) => 
`# ${projectName}

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

${motivation}
${reason}
${problem}
${lesson}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## Credits

${credits}

## License

${license}

## Tests`

// TODO: Create an array of questions for user input
const questions = [inquirer
    .prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
      },
      {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation?',
      },
      {
        type: 'input',
        name: 'reason',
        message: 'Why did you build this project?',
      },
      {
        type: 'input',
        name: 'problem',
        message: 'What problem does it solve?',
      },
      {
        type: 'input',
        name: 'lesson',
        message: 'What did you learn?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Is there anything that needs to be installed? How?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How does this program work?',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Did you collaborate with anybody on this project or use code from somewhere?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Is there anything that needs to be installed? How?',
      },
    ])
    .then((answers) => {
      const readmeContent = generateREADME(answers);
      writeToFile(readmeContent);
    })]
 
// // TODO: Create a function to initialize app
// function init() {
//     questions();
// }

// // Function call to initialize app
// init();
