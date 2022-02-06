class MarkDown {
  
  static renderLicenseBadge(license) {
    const badges = {
      mit: '[![Liscense: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      isc: '[![Liscense:ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
      gnugplv3: '[![License:LGPL v3](https//img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
      
    }
    return badges[license]
  }

  static rendorLicenseLink(license){
    const licenseLinks = {
      mit:'[MIT](https://choosealicense.com/licenses/mit/)',
      isc: '[ISC](https://choosealicense.com/licenses/isc/)',
      gnugplv3: '[GNUGPLv3](https://choosealicense.com/licenses/gpl-3.0/)',
    }

    return licenseLinks[link]
  }

  static renderLicenseSection(license){
    if(license){
      return `Licensed under the ${this.renderLicenseLink(license)} license`
    }else{
      return ''
    }
  }
  
  static generateReadme(response){
    return `

  # ${response.title}
  ${this.renderLicenseBadge(response.license)}


  ## Table of Content
  -[Author](#author) 
  -[Credits](#credits)
  -[Motivation](#motivation)
  -[Purpose](#purpose)
  -[Key features](#key features)
  -[Stage](#stage)
  -[Future plan] (#future plan)
  -[Email address] (#email address)
  -[Github username] (#github username)
  -[License] (#license)

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
  ${this.responseLicenseSection(response.license)}

  `
  }

}
  
module.exports= MarkDown  