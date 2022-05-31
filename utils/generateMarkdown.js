function generateMarkdown(data) {
    if (data.licenses === "MIT License") {
      data.licenses = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
    if (data.licenses === "APACHE 2.0") {
      data.licenses = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
  
      
    return `# Table of Contents\n
    1. [Title](#Title)\n
    2. [Description](#Description)\n
    3. [Installation](#Installation Instructions)\n
    4. [Usage](#Usage Instructions)\n
    5. [Contribution](#Contribution Instructions)\n
    6. [Test](#Test Instructions)\n
    7. [Username](#Github Username)\n
    8. [Email](#Email)\n
    9. [License](#Licenses)\n
    
  #${data.title}\n\n
  # Description
  ${data.description}\n\n
  # Installation Instructions
  ${data.installation}\n\n
  # Usage Instructions
  ${data.usage}\n\n
  # Contribution Instructions
  ${data.contribution}\n\n
  # Test Instructions
  ${data.test}\n\n
  # Github Username
  ${data.username}\n\n
  # Email
  ${data.email}\n\n
  # Licenses
  ${data.license}\n\n
    `;
}
    
module.exports = generateMarkdown;