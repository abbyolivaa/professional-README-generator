const inquirer = require ('inquirer')

//wreite instructions
const instructions = console.log(`
instructions`)

// TODO: Create an array of questions for user input
const questions = [
inquirer
    .prompt([
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
            name: 'instructions', 
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
            message: 'Enter your GitHub username',
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
            message: 'Enter your email address',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log ('Please enter your email address')
                    return false
                }
            }
        }
    ])
];
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
