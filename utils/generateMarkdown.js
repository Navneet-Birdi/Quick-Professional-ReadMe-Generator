function generatelicenseBadge(license){
  const licenseName = encodeURIComponent(license.replace('_', ' '))
  return`![${license} - licensed] (https://img.shields.io/badge/license-MIT-yellowgreen)`;
}




function generateMarkdown({
title,
license,
github,
installation,
table,
credits,
description,
email,
}) 
{
 return `
 
# ${title}
${generatelicenseBadge(license)} 

# Description: ${description}

# Table Of Contents: ${table}

# Installation: ${installation}

# Contributors: ${credits}

# GitHub Username
Visit my GitHub profile here: [${github}] (https://github.com/${github})

# Email: ${email}
 
 
 
 
 
 
 
 `




}

module.exports = generateMarkdown;
