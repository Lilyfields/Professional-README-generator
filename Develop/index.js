const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

  const questions =[
    /* Pass your questions in here */
    {
        
        name: 'title',
        type: 'input',
        message: "What is the title of your project?",
        validate: (response) => {
            if (response === ''){
                return 'Please enter a valid title.'
            }
            return true
        }

    },

    {
        name:'author',
        type: 'input',
        message: "What is the author's name?",
        validate: (response) => {
            if (response === ''){
                return 'Please enter a valid author.'
            }
            return true
        }

    },

    {
        name:'credits',
        type: 'input',
        message: "Please list all your collaborators?",
        validate: (response) => {
            if (response === ''){
                return 'Please enter valid names.'
            }
            return true
        }
    },
    

    {
        name:'motivation',
        type: 'input',
        message: "What was your motivation?",
        validate: (response) => {
            if (response === ''){
                return 'Please share your motivation to continue.'
            }
            return true
        }
    },

    {
        name:'purpose',
        type: 'input',
        message: "What does your project aim to achieve?",
        validate: (response) => {
            if (response === ''){
                return 'Please share the purpose of your project to continue.'
            }
            return true
        }
    },

    {
        name:'keyFeatures',
        type: 'input',
        message: "Please discribe the key features of your project that makes it unique? ",
        validate: (response) => {
            if (response === ''){
                return 'Please share the key features of your project to continue.'
            }
            return true
        }
    },

    {
        name:'stage',
        type:'input',
        message: "Please discribe the stages for your project?",
        validate: (response) => {
            if (response === ''){
                return 'Please discuss the stage of your project to continue.'
            }
            return true
        }
    },

    {
        name:'futurePlan',
        type: 'input',
        message: "Please share your future plans for this project?",
        validate: (response) => {
            if (response === ''){
                return 'Please discuss the future plan for your project to continue.'
            }
            return true
        }
    },

    {
        name:'emailAddress',
        type: 'input',
        message: "What is your email address?",
        validate: function (value){
            let pass =value.match (
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
            if (pass) {
                return true;
            }else{
                return "Please enter a valid email address";
            }
        }
    },

    {
        name:'githubUsername',
        type: 'input',
        message:"What is your Github username?",
        validate: function (value){
            let pass =value.match (
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
            if (pass) {
                return true;
            }else{
                return "Please enter a valid github username";
            }
        }
    },

    {
        name:'license',
        type: 'list',
        message: 'License for project?',
        choices: ['MIT','ISC','Apachae 2.0','LGPL v3.0','None'], 
        validate: licenseInput = () => {
            if (licenseInput){
                return true;
            }else{
                console.log ('Please select one of these options');
                return false;
            }
        }

    },

  ]

  const writeToFile = fileContent => {
      return new Promise((resolve, reject) => {
          fs.writeFile('./generatedREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return console.log ('Could not save file',err);
            }
            resolve({
                
                
            });
          });
      });
  };

  function init () {
      inquirer.prompt (questions)
      .then(function(response) {
          console.log(response);
          var fileContent = generateMarkdown(response);
          writeToFile(fileContent)
      });
  }

  init();

  module.exports=questions;
