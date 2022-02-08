const inquirer = require('inquirer');
const fs = require('fs');
const index = require('../index');


  
  function renderLicenseBadge(license) {
    let badge = '';
    if(license === 'MIT') {
      badge = '![Liscense: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }else if (license === 'Apache 2.0') {
      badge = '![Liscense:ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    }else if (license === 'GPL v3.0') {
      badge= '![License:LGPL v3](https//img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
    }else {
     badge = ''
    }
      return badge;
    }


   function renderLicenseLink(license) {
     let licenseLink = '';
     if(license === 'MIT') {
      licenseLink = 'https://opensource.org/licenses/MIT'
    }else if (license === 'Apache 2.0') {
      licenseLink = 'https://opensource.org/licenses/ISC'
    }else if (license === 'GPL v3.0') {
      licenseLink= 'https://www.gnu.org/licenses/lgpl-3.0'
    }else {
     licenseLink = '' 
    }
    return licenseLink;
  }

  function renderLicenseSection(license) {
    let licenseSection = '';
    if(license === 'None') {
      licenseSection = ''
    }else {
      licenseSection=`License: ${license}`
    }
      return licenseSection
    }
  
  
  function generateMarkdown(response){
    return `

  # ${response.title}

  
  ## Table of Content
  ### * [Author](#author) 
  ### * [Credits](#credits)
  ### * [Motivation](#motivation)
  ### * [Purpose](#purpose)
  ### * [Key features](#keyFeatures)
  ### * [Stage](#stage)
  ### * [Future plan](#futurePlan)
  ### * [Email address](#emailAddress)
  ### * [Github username](#githubUsername)
  ### * [License](#license)
  

  ## Author
  ${response.author}

  ## Credits
  ${response.credits}

  ## Motivation
  ${response.motivation}

  ## Purpose
  ${response.purpose}

  ## Key features
  ${response.keyFeatures}

  ## Stage
  ${response.stage}

  ## Future plan
  ${response.futurePlan}

  ## Email address
  ${response.emailAddress}

  ## Github username
  ${response. githubUsername}

  ## License
  ${renderLicenseBadge(response.license)} 
  ${renderLicenseSection(response.license)}
  ${renderLicenseLink(response.license)}

  `
  }


  
module.exports= generateMarkdown;