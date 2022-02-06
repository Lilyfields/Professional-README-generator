class MarkDown {
  
  static renderLicenseBadge(license) {
    const badge = {
      MIT: '[![Liscense: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      ISC:'[![Liscense:ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
      GnuPG: '[![License:LGPL v3](https//img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
          
    }
    return badge[license]

  }

  static renderLicenseLink(license){
    const licenseLink = {
      MIT:'[MIT](https://choosealicense.com/licenses/mit/)',
      ISC: '[ISC](https://choosealicense.com/licenses/isc/)',
      GnuPG: '[GNUGPLv3](https://choosealicense.com/licenses/gpl-3.0/)',
    }

    return licenseLink[license]
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
  ${this.renderLicenseSection(response.license)}

  `
  }

}
  
module.exports= MarkDown