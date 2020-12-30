const Employee = require ('./lib/Employee');
const Engineer = require ('./lib/Engineer');


let jim = new Employee('Jim');

console.log (jim.getRole());

let tammy = new Engineer('Tammy',1, 'tammy@email.com', 'tammy@github.com');

console.log ("Tammy's github = " + tammy.getGithub());