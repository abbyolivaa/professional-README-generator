const inquirer = require ('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js')


//wreite instructions
const instructions = () => {
    console.log(
        `
        =============================================\n
        Welcome to the Professional README generator!\n
        =============================================\n
        Instructions: \n
        - Answer each question with the information requested 
        - (MUST answer *required* questions)\n
        - If you make an error and can't go back to fix it, don't worry! \n
         Just exit out of the project with Ctrl + C (or Command + C for Mac users) \n
        - Once you are satisfied with the criteria you entered in the generator and complated all the questions, \n
         there will be a prompt telling you were to find your new file!\n
        - PS: you can always edit your README.md after it is created\n
        - Have fun :)
        `)
}

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title? (Required) ',
        validate:  titleInput => {
            if(titleInput) {
               return true; 
            } else{ 
                console.log ('Please enter your project title!')
                return false
            }

        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project'
    },
    {
        type: 'input',
        name: 'installation', 
        message: 'How do you install your project? Enter your installation instructions.'
    },
    {
        type: 'input',
        name: 'usage', 
        message: 'How do you use your project? Enter your usage instructions.'
    },
    {
        type: 'input',
        name: 'contribution', 
        message: 'Please enter any contribution instructions for other users.'
    },
    {
        type: 'input',
        name: 'test', 
        message: 'Please enter any test instructions for your project.'
    },
    {
        type: 'input',
        name:'username',
        message: 'Enter your GitHub username. (Required)',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log ('Please enter your GitHub username')
                return false
            }
        }
    },
    {
        type: 'input',
        name:'email',
        message: 'Enter your email address. (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log ('Please enter your email address')
                return false
            }
        }
    },
    {
        type: 'list',
        name:'license',
        message:' What license do you want to use?',
        choices: ['MIT', 'LGPL 3.0', 'MPL 2.0', 'AGPL 3.0', 'GPL 3.0', 'Apache 2.0', 'Unlicense'],
        validate: licenseInput => {
            if(licenseInput) {
                return true;
            } else {
                console.log('Please choose a license')
                return false;
            }
        }
    },
    {
        type: 'list',
        message: 'Do you want a license document? ',
        name: 'licenseDoc',
        choices: ['Yes', 'No']
    },
];

// TODO: Create a function to initialize app
function init() {

    instructions();
    let folder = './dist';

    if(process.argv.length > 2) {
        folder = './' + process.argv[2];
    }

    inquirer.prompt(questions).then((data) => {
        console.log(data)
        fs.writeFile('dist/GeneratedREADME.md', generateMarkdown(data), (err) => err? console.error(err):
        console.log("Success! Your Generated README.md will be in the 'dist' folder in the project root :)"))
    })

    
}

// Function call to initialize app
init();
