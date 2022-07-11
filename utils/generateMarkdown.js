function generatelicenseBadge(license){
  const licenseName = encodeURIComponent(license.replace('_', ' '))
  return`![${license} - licensed] (https://img.shields.io/badge/license-MIT-yellowgreen)`;
}




function generateMarkdown({
title,
license,
github

}) 
{
 return `
 
 
# ${title}
${generatelicenseBadge(license)} 


Desc
This project is about ...............
## Table Of Contents

## Installation

## Contribiutors

## GitHub Username
Visit my GitHub profile here: [${github}] (https://github.com/${github})

## Email
 
 
 
 
 
 
 
 `




}

module.exports = generateMarkdown;
