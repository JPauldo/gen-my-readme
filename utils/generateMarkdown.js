// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

![ [Insert Badge Here] ](https://img.shields.io/badge/Badge-Placeholder-brightgreen)

## Description

[Insert Description Info Here]

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [How to Contribute](#how-to-contribute)

## Installation

If you would like to run this application, please run the following command(s) to install the necessary requirements:
\`\`\`
\`\`\`

## Usage

Below is a demonstration of the application: 

![Alt Text for Placeholder](https://via.placeholder.com/150)

## License

[Insert License Info Here]

## Tests

If you would like to run tests for this repo, please run the following command(s):
\`\`\`
\`\`\`

## How to Contribute

If you would like to contribute, feel free to reach out to me at [alias@email.com](mailto:alias@email.com).

If you like what you see here, please feel free to checkout my other work on [my Github page](https://github.com/).
`;
}

module.exports = generateMarkdown;
