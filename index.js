// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create a function to write README file
function writeToFile(readmeContent) {
    fs.writeFile('README.md', readmeContent, (err) =>
    err ? console.error(err) : console.log('Generating README!'))
}
//this takes the info the user passes through the console via inquirer and generates a README using the following template
const generateREADME = ({ projectName, motivation, reason, problem, lesson, installation, usage, credits, license, github, email, tests}, badge) => 
`# ${projectName}  	${badge}

## Description

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

This application is covered under the following license: ${license}

## Tests

${tests}

## Questions
If you have questions about this application you can reach me for more information here - 

Github: github.com/${github}

Email: ${email}`

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
        message: 'Are there any tests you would like to include? Include below.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which licesne would you like to use for your project?',
        choices: ['Apache License 2.0', 'GNUGeneral Public License 2.0', 'MIT License'],
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your Github user name?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      }
    ])
    .then((answers) => {
      //the license badges are a little more complex then just plugging in the value given from the user input so we have this functino below to create the correct license badge
      var badge = "";
      if(answers.license === "Apache License 2.0"){
        badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      }else if(answers.license === "GNUGeneral Public License 2.0") {
        badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
      }else{
        badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      }
      //this generates the readme with the content
      const readmeContent = generateREADME(answers, badge);
      //and then this actually writes the readme to file
      writeToFile(readmeContent);
    })]
 