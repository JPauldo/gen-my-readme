// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return '';
}

// TODO: Create a function to generate markdown for README
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

If you like what you see here, please feel free to checkout my other work on [my Github page](https://github.com/${data.username}).
`;
}

module.exports = generateMarkdown;
