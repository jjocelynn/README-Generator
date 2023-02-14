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

// this.title=title,
// this.description= description,
// this.installation = installation,
// this.usage =usage,
// this.license = license,
// this.contribute =contribute,
// this.tests= tests,
// this.questions =questions
// )
// function chosenLicense(license) { //move badge to top while text is under license
//     if (!license) {
//         return "";
//     } else if (license === 'MIT') {
//         writeFile('License', `MIT License

// Copyright (c) 2023 jjocelynn

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.`, (err) => err ? console.log(err) : console.log("Successfully wrote a License!"));
//         return `![MIT badge](https://img.shields.io/badge/License-MIT-brightgreen)
        
//         Please refer to the LICENSE in the repo`;
//     } else if (license === "Apache") {
//         writeFile("license", `Copyright 2023 jjocelynn

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.`, (err) => err ? console.log(err) : console.log("Successfully wrote a License!"));
//         return `![Apache badge](https://img.shields.io/badge/License-Apache-blue)
        
//         Please refer to the LICENSE in the repo`
//     } else if (license === "GNU") {
//         writeFile("license", `Copyright (C)  2023 jjocelynn
//     Permission is granted to copy, distribute and/or modify this document
//     under the terms of the GNU Free Documentation License, Version 1.3
//     or any later version published by the Free Software Foundation;
//     with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
//     A copy of the license is included in the section entitled "GNU
//     Free Documentation License" https://www.gnu.org/licenses/fdl-1.3.html.`, (err) => err ? console.log(err) : console.log("Successfully wrote a License!"));
//         return `![Apache badge](https://img.shields.io/badge/License-GNU-orange)
        
//         Please refer to the LICENSE in the repo`
//     }
// }

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(title, description, installation, usage, license, contribute, tests, github, email) {
//     return `# ${title}

// ## Description

// ${description}

// ## Table of Contents

// - [Installation](#installation)
// - [Usage](#usage)
// - [Contribution](#Contribution)
// - [License](#license)
// - [Tests](#tests)
// - [questions](#questions)

// ## Installation

// ${installation}

// ## Usage

// ${usage}

// ## Contribute

// ${contribute}

// ## License

// ${chosenLicense(license)}

// ## Tests

// ${tests}

// ## Questions

// Check out my repos here: https://github.com/${github}
// Or if you have additional questions, email me at: ${email}`;
// }

// TODO: Create a function to initialize app
const init = () => {
    questions()
        .then((answers) => {
            writeFile('README.md', generateMarkdown(answers.title, answers.description, answers.installation, answers.usage, answers.license, answers.contribute, answers.tests, answers.github, answers.email))
        })
        .then(() => console.log('Success!'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
