const Employee = require ('./lib/Employee');
const Engineer = require ('./lib/Engineer');
const Manager = require ('./lib/Manager');
const Intern = require ('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');

let managers = [];
let engineers = [];
let interns = [];

let promptQuestions = employeeData => {
    // if (!employeeData.managers) {
    //     employeeData.managers = [];
    // }
    // if (!employeeData.engineers) {
    //     employeeData.engineers = [];
    // }
    // if (!employeeData.interns) {
    //     employeeData.interns = [];
    // }

    return inquirer.prompt ([
        {
            type: "list",
            name: "employeeType",
            message: "Which type of employee would you like to enter",
            choices: ['Manager', 'Engineer', 'Intern'],
        },
        {
            type: "input",
            name: "name",
            message: "Enter employee name:",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Enter employee name:');
                  return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Enter employee id:",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Enter employee id:');
                  return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter employee email:",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Enter employee email:');
                  return false;
                }
            }
        },
        {
            type: "input",
            name: "office",
            message: "Enter Manager's office number:",
            when: function (data) {
              if (data.employeeType === "Manager") {
                return true;
              } else {
                return false;
              }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Enter Engineer's github username:",
            when: function (data) {
              if (data.employeeType === "Engineer") {
                return true;
              } else {
                return false;
              }
            }
        },
        {
            type: "input",
            name: "school",
            message: "Enter Intern's school:",
            when: function (data) {
              if (data.employeeType === "Intern") {
                return true;
              } else {
                return false;
              }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAnotherEmployee',
            message: 'Would you like to enter another employee?',
            default: false
        },
    ])
    .then(answerData => {
        if (answerData.employeeType === "Manager") {
            let manager = new Manager (answerData.name, answerData.id, answerData.email, answerData.office);
            managers.push(manager);
        }
        if (answerData.employeeType === "Engineer") {
            let engineer = new Engineer (answerData.name, answerData.id, answerData.email, answerData.github);
            engineers.push(engineer);
        }
        if (answerData.employeeType === "Intern") {
            let intern = new Intern (answerData.name, answerData.id, answerData.email, answerData.school);
            interns.push(intern);
        }
        if (answerData.confirmAnotherEmployee) {
          return promptQuestions(employeeData);
        } else {
          return employeeData;
        }
      });
}

function showData () {
    console.log(managers);
    console.log(engineers);
    console.log(interns);
}

function generateHTML() {
    return `
    Enter HTML Here`;

}

// function to write the readme file to its location
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/team_profile.html', fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };






function start() {
    promptQuestions()
    // .then(data => {
    //     showData();
    // })
    showData();
    writeFile(generateHTML());
    // then catch errors
    // .catch(err => {
    //     console.log(err);
    // });
}

start();




