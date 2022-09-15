// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title};
  ${renderBadge(data.license)}

  ## github URL

[${data.github}](https://github.com/${data.github}/)

  ## Description📝

  ${data.description}

  ## Table of Contents🗒

  * [Installations](#dependencies)

  * [Usage](#usage)

  ${renderLink(data.license)}

  * [Contributors](#contributors)

  * [Test](#test)

  ## Installations (Dependencies) 💻

  To install dependencies, run these commands:

  \`\`\`
  ${data.dependencies}
  \`\`\`

  ## Usage

  ${data.usage}

  ${renderSection(data.license)}

  ## Contributors

  ${data.contributors}

Contact me at ${data.email}


  ## Tests🧪

  To run tests, run these commands:

  \`\`\`
  ${data.test}
  \`\`\`
  
`;
}

//function to render badge
function renderBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}

// Function to render link
function renderLink(license) {
  if (license !== "None") {
    return (
      `\n* [License](#license)\n`
    )
  }
  return ''
}


// Function to render section
function renderSection(license) {
  if (license !== "None") {
    return (
      `## License 📛
      Copyright © ${license}. All rights reserved. 
      
      Licensed under the ${license} license.`

    )
  }
  return ''
}


module.exports = generateMarkdown;
