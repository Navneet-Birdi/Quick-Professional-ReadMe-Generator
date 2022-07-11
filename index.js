//import inquire
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs/promises');
const path = require('path');

//all the questions
inquirer.prompt([
    {
        type:'input',
        message: "What is the project title",
        name: 'title',
    },
    {
        type:'input',
        message: "What is the Description",
        name: 'description',
    },
    {
        type:'checkbox',
        message: "What are table of contents",
        name: 'table',
        choices:['Installation', 'Credits', 'License'],
    },
    {
        type:'text',
        message: "How to Install",
        name: 'installation',
    },
    
    {
        type:'list',
        message: "What is the license",
        name: 'license',
        choices: [
            'MIT', 'GPL-v2', 'Apache-v2', 'NO License',
        ]
    },
    {
        type:'text',
        message: "Who are contributers",
        name: 'credits',
    },
    
    {
        type:'input',
        message: "What is your github username",
        name: 'github',
    },
    {
        type:'input',
        message: "What is your email address",
        name: 'email',
    },

]).then((ans) => {
    //once all questions asked
    console.log(ans);

//generating readme file based on reponse
const markdown = generateMarkdown(ans);

//Results of responses in output folder
const outputPath = path.join(__dirname, 'output', 'readme.md');

  fs.writeFile(outputPath, markdown, 'utf-8')
  //refering to documentation
    .then(() => {
      console.log('readme!')
    });

})







