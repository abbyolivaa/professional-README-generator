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
