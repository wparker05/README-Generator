const fs = require('fs');
const inquirer = require('inquirer');
const readMe = ({ }) => {

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
        {   type: 'list',
            message: 'Which license would you like to use?',
            name: 'license',
            choices: [
                "MIT",
                "Apache",
                "MIT/Apache-2.0"
            ]
        },
        {
            message: 'What are the contribution guidelines?',
            name: 'Constributing'
        },
        {
            message: 'What are the test instructions?',
            name: 'Tests'
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

