// Create Title and license badge
const createTitle = (title, license) => {
    return `# ${title}\n${createLicenseBadge(license)}\n\n`;
};

// Create Table of Contents
const createTableCont = contents => {
    let returnStr = `<br />\n\n## Table of Contents\n\n`;
    contents.forEach(element => {
        if(element !== ``) {
            returnStr += `- [${element}](#${element.toLowerCase().replace(/\s/g, '-')})\n\n`;
        }   
    });
  
    return returnStr + `\n\n`;
};

//Create a General Section -> Title + content
const createSection = (title, data) => {
    return data.toLowerCase() != '!del' ? 
            `<br />\n\n## ${title}\n\n${data}\n\n` : ``;
};

//Create Questions Section -> creates a github and email link
const createQuestions = (github, email) => {
    const desc = `## Questions\n\nYou can reach me either through GitHub or the email below.\n\n`;
    const githubLink = `[GitHub: ${github}](https://github.com/${github})\n\n`;
    const emailLink = `[${email}](mailto:${email})\n\n`;
  
    return desc + githubLink + emailLink;
};

//Create license Badge
const createLicenseBadge = license => {

    //creates badge with link of selected license
    switch(license) {
        case 'MIT': 
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        case 'LGPL 3.0':
            return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
        case 'MPL 2.0':
            return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
        case 'AGPL 3.0':
            return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
        case 'GPL 3.0':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        case 'Apache 2.0':
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        case 'Unlicense':
            return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
        default:
            return '';
    }
};
