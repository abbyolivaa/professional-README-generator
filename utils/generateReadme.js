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