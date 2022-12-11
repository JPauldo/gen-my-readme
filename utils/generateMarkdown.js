/**
 * Renders the license badge based on which license is passed in. If there is no license, return an empty string.
 * @param {string} license The name of the license
 * @returns {string} The badge for the license
 */
function renderLicenseBadge(license) {
  let badgeLink;
  let badgeColor;
  
  // Sets the badge color and license name
  switch(license) {
    case 'Apache':
      license += ' License 2.0';
      badgeColor = 'blueviolet';
      break;
    case 'Boost Software':
      license += ' License 1.0';
      badgeColor = 'blue';
      break;
    case 'GNU':
      license += ' General Public License v3.0';
      badgeColor = 'brightgreen';
      break;
    case 'MIT':
      license += ' License';
      badgeColor = 'red';
      break;
    case 'Mozilla':
      license += ' Public License 2.0';
      badgeColor = 'orange';
      break;
    default:
      return '';
  }
  
  // Replaces spaces in the license names for the link
  if(license.includes(' ')) {
    license = license.replaceAll(' ', '%20');
  }
  
  badgeLink = `![${license} Badge](https://img.shields.io/badge/License-${license}-${badgeColor})`;
  
  return badgeLink;
}

/**
 * Creates the license link. 
 * @param {string} license The name of the license
 * @returns {string} The link for the license
 */
function renderLicenseLink(license) {
  let licenseText;

  // Sets the license text for the link
  switch(license) {
    case 'Apache':
      licenseText = 'apache-2.0';
      break;
    case 'Boost Software':
      licenseText = 'bsl-1.0';
      break;
    case 'GNU':
      licenseText = 'gpl-3.0';
      break;
    case 'MIT':
      licenseText = 'mit';
      break;
    case 'Mozilla':
      licenseText = 'mpl-2.0';
      break;
  }
  
  return `[license page](https://choosealicense.com/licenses/${licenseText}/)`;}

/**
 * Renders the license section of README. If there is no license, return an empty string.
 * @param {string} license The name of the license
 * @returns {string} The HTML for the license section
 */
function renderLicenseSection(license) {
  if (license !== 'None') {    
    let licenseLink = renderLicenseLink(license);
    let licenseSection = `## License

This repo utilizes the ${license} license. If you would like to know more information, you can check out its ${licenseLink} for its permissions, conditions and limitations.`;
    
    return licenseSection;
  } 
  else {
    return '';
  }
}

/**
 * Renders the Usage section for the README. If no user input was provided, returns a generic description.
 * @param {string} usageDesc A description provided by the user
 * @returns {string} The HTML for the usage section
 */
function renderUsageSection(usageDesc) {
  let usageText;
  
  // 
  if (usageDesc !== '') {
    usageText = `To use this application, ${usageDesc}`;
    return usageText;
  } else {
    usageText = `It is quite intuitive. Why not just give it a try?`;
    return usageText;
  }
}



/**
 * Formats and generates a README.
 * @param {object} data The response from the inquire
 * @returns {string} The formatted markdown
 */
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.desc}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [How to Contribute](#how-to-contribute)

## Installation

If you would like to run this application, please run the following command(s) to install the necessary requirements:
\`\`\`
${data.dependencies}
\`\`\`

## Usage

${renderUsageSection(data.usage)}

Below is a demonstration of the application: 

![Alt Text for Placeholder](https://via.placeholder.com/150)

${renderLicenseSection(data.license)}

## Tests

If you would like to run tests for this repo, please run the following command(s):
\`\`\`
${data.tests}
\`\`\`

## How to Contribute

If you would like to contribute, feel free to reach out to me at [${data.email}](mailto:${data.email}).

If you like what you see here, please feel free to checkout my other work on my [Github page](https://github.com/${data.username}).
`;
}

module.exports = generateMarkdown;
