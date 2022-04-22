const inquirer = require ('inquirer')

// TODO: Create an array of questions for user input
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
                    console.log ('Please enter yout project title!')
                }

            }
        }
    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
