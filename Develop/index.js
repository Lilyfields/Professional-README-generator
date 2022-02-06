const inquirer = require('inquirer');
const fs = require('fs');
const MarkDown = require('./utils/generateMarkdown');

  const questions =[
    /* Pass your questions in here */
    {
        
        name: 'title',
        type: 'input',
        message: "What is the title of your project?",

    },

    {
        name:'author',
        type: 'input',
        message: "What is the author's name?",

    },

    {
        name:'credits',
        type: 'input',
        message: "Please list all your collaborators?",
    },
    

    {
        name:'motivation',
        type: 'input',
        message: "What was your motivation?",
    },

    {
        name:'purpose',
        type: 'input',
        message: "What does your project aim to achieve?",
    },

    {
        name:'keyFeatures',
        type: 'input',
        message: "Please discribe the key features of your project that makes it unique? ",
    },

    {
        name:'stage',
        type:'input',
        message: "Please discribe the stages for your project?",
    },

    {
        name:'futurePlan',
        type: 'input',
        message: "Please share your future plans for this project?",
    },

    {
        name:'emailAddress',
        type: 'input',
        message: "What is your email address?",
        validate: function (value){
            let pass =value.match (
               /^[a-zA-Z0-9.!#$&'*+/=?^_{!}~`]+@[[a-zA-Z0-9-]+[.com]+)*$/);
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
               /^[a-zA-Z0-9.!#$&'*+/=?^_{!}~`]+@[[a-zA-Z0-9-]+[.com]+)*$/);
            if (pass) {
                return true;
            }else{
                return "Please enter a valid github username";
            }
        }
    },

    {
        name:'license',
        type: 'checkbox',
        message: 'License?',
        choices: ['MIT','ISC','GnuPG'],
        
    },

  ]

  function runQuery(){
      return inquirer.prompt(questions)
      .then((response) => {
          const mark = MarkDown.generateReadme(response)
          fs.writeFile('README.md', mark, function (err) {
              if (err) {
                  console.log ('Could not save file',err)
              } else {
                  console.log ('Success:new README.md file generated inside the current folder')
              }
      })

    })
      .catch ((error) => {
          console.log (error)

      })
  }
 
  runQuery()
