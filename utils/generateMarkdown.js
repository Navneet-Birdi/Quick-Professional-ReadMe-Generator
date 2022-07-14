function generatelicenseBadge(license){
  const licenseName = encodeURIComponent(license.replace('_', ' '))
  return`![${license} - licensed](https://img.shields.io/badge/license-MIT-yellowgreen)`;
}




function generateMarkdown({
title,
license,
github,
installation,
credits,
description,
email,
usage,
tests,
}) 
{
 return `
 
# ${title}
${generatelicenseBadge(license)} 

# Description: 
${description}

# Table Of Contents:
* [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#credits)
  * [Tests](#tests)
  * [Questions](#questions)

# Installation: 
${installation}

# Usage:
${usage}

# Tests:
${tests}

# Contributors: 
${credits}




# Questions? 
Email Me
[${email}](mailto:${email})

Visit my GitHub profile for more here: [${github}] (https://github.com/${github})
 `
}

module.exports = generateMarkdown;
