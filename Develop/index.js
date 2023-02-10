// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Title of Project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter a description (prompts what? why? how?):',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Enter installation information: ',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Enter Usage information:',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'Choose a license: ',
            name: 'license',
            choices: ['MIT', 'Apache', 'GNU'],
        },
        {
            type: 'input',
            message: 'Contributing:',
            name: 'contribute',
        },
        {
            type: 'input',
            message: 'Tests: ',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'Questions:',
            name: 'questions',
        },
    ]);
};

// TODO: Create a function to write README file
const generateReadMe = ({ title, description, installation, usage, license, contribute, tests, questions }) =>
    `# ${title}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#How to Contribute)
- [License](#license)
- [Tests](#tests)
- [questions](#questions)

## Installation

${installation}

## Usage

${usage}

## How to Contribute

${contribute}

## License

${license}

## Tests

${tests}

## Questions

${questions}`;

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
        .then((answers) => writeFile('README.md', generateReadMe(answers)))
        .then(() => console.log('Success!'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
