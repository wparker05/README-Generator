const fs = require('fs');
const inquirer = require('inquirer');

const readMe = ({ title, description, installation, usage, license, contribution, test, github, email }) => {

    const choices={
        MIT : 'https://img.shields.io/badge/license-MIT-brightgreen',
        Apache : 'https://img.shields.io/badge/license-Apache-blue',
        GPL: 'https://img.shields.io/badge/license-GPL-lightgrey' 
    }

    return `# ${title}

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contribution](#Contribution)
- [Test](#Test)
- [Questions](#Questions)
            


![License](${choices[license]})

## Description
            
${description}
            
## Installation

${installation}

## Usage

${usage}

## Contribution

${contribution}

## Test

${test}

## Questions

[Github](https://github.com/${github})

If you have any addtional questions, please contact me by email at: ${email}`;
}

inquirer
    .prompt([
        {
            message: 'What is the name of your title?',
            name: 'title'
        },
        {
            message: 'Describe what your project is?',
            name: 'description'
        },
        {
            message: 'What are the steps required to install this project?',
            name: 'installation'
        },
        {
            message: 'What are the steps to use this program?',
            name: 'usage'
        },
        {
            type: 'list',
            message: 'Which license would you like to use?',
            name: 'license',
            choices: [
                "MIT",
                "Apache",
                "GPL"
            ]
        },
        {
            message: 'What are the contribution guidelines?',
            name: 'contribution'
        },
        {
            message: 'What are the test instructions?',
            name: 'test'
        },
        {
            message: 'What is your Github username?',
            name: 'github'
        },
        {
            message: 'What is your email addres?',
            name: 'email'
        }
    ])
    .then((answers) => {
         fs.writeFile('./dist/README.md', readMe(answers) ,(err) => err ? console.error(err): console.log('Success!'));
    });

