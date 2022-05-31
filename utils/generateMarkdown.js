function generateMarkdown(data) {
    if (data.licenses === "MIT License") {
      data.licenses = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
    if (data.licenses === "APACHE 2.0") {
      data.licenses = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
  
      
    return `  # **${data.title}**\n 

# Table of Contents\n
1. [Title](#Title)\n

2. [Description](#Description)\n

3. [Installation Instructions](#Installation-Instructions)\n

4. [Usage Instructions](#Usage-Instructions)\n

5. [Contribution Instructions](#Contribution-Instructions)\n

6. [Test Instructions](#Test-Instructions)\n

7. [Github Username](#Github-Username)\n

8. [Email](#Email)\n

9. [Licenses](#Licenses)\n

    
  # Description
  ${data.description}\n

  # Installation Instructions
  ${data.installation}\n
  # Usage Instructions
  ${data.usage}\n
  # Contribution Instructions
  ${data.contribution}\n
  # Test Instructions
  ${data.test}\n
  # Github Username
  ${data.username}\n
  # Email
  ${data.email}\n
  # Licenses
  ${data.license}\n
    `;
}
    
module.exports = generateMarkdown;