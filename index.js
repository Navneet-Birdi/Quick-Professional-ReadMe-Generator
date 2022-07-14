//import inquire
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs/promises');
const path = require('path');

//all the questions
inquirer.prompt([
    {
        type:'input',
        message: "What is the title of a Project? (Required)",
        name: 'title',
        //condition to check if user enter title or not
        validate: title => {
            if (title){
                return true;
            } 
            else{
                console.log('Please enter title to continue!');
                return false;
            }
        }
    },
    {
        type:'input',
        message: "What is the Description? (Required)",
        name: 'description',
        //tocheck if description for project entered or not
        validate: input => {
            if (input){
                return true;
            } 
            else{
                console.log('Please enter description to continue!');
                return false;
            }
        }
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
        message: "What are contributers",
        name: 'credits',
    },
    {
        type:'text',
        message: "How to use this app",
        name: 'usage', 
    },
    {
        type:'text',
        message: "How to run tests",
        name: 'tests', 
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
const outputPath = path.join(__dirname, 'output', 'README.md');

  fs.writeFile(outputPath, markdown, 'utf-8')
  //refering to documentation
    .then(() => {
      console.log('File Generated!')
    });

})






