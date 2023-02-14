// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const { writeFile } = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
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
            message: 'Contributing: ',
            name: 'contribute',
        },
        {
            type: 'input',
            message: 'Tests: ',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'GitHub username: ',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Email address: ',
            name: 'email',
        },
    ]);
};

// TODO: Create a function to initialize app
const init = () => {
    questions()
        .then((answers) => {
            writeFile('README.md', generateMarkdown(answers.title, answers.description, answers.installation, answers.usage, answers.license, answers.contribute, answers.tests, answers.github, answers.email))
        })
        .then(() => console.log('Successfully wrote a README!'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
