const inquirer = require('inquirer');
var mysql = require("mysql");
var connection = require('./connect.js');
const {viewEmployees,viewByDepartment,viewByRoles,viewDepartments,viewRoles,addEmployee,addDepartment}  = require('./assets/view');
//const viewByDepartment = require('./assets/view');

 function init(){
   
    inquirer.prompt({
        name: "choices",
        type: "list",
        message: "What would you like to do:",
        choices: [ "View ALL Employees", 
                   "View Employees by Department",
                   "View Employees by Roles", 
                   "View Departments", 
                   "View Roles",
                   "Add Employee",
                   "Add Departments"
                //    "Add Role", 
                //    "Update Employee DETAILS",
                //    "CLOSE APPLICATION",
        ]
      })

      .then(async function(answers) {
        // Functions to call based on option choosen
      switch (answers.choices) {
        case "View ALL Employees":
            viewEmployees();
            setTimeout(init, 500);
            break;
    
        case "View Employees by Department":
            viewByDepartment();
            setTimeout(init, 3000);
            break;
                
        
        case "View Employees by Roles":
            viewByRoles();
            setTimeout(init, 3000);
            break;
                        
        case "View Departments":
            viewDepartments();
            setTimeout(init, 3000);
            break;
            
        case "View Roles":
            viewRoles();
            setTimeout(init, 3000);
            break;
    
        case "Add Employee":
            addEmployee();
            setTimeout(init, 10000);
            break;
    
        case "Add Departments":
            addDepartment();
            setTimeout(init, 10000);
            break;
    
        case "Add Role":
            viewByDepartments();
            addRole();
            break;
    
        // case "Update Employee Roles":
        //     employeesJSON();
        //     viewByRoles();
        //     break;
                
        case "CLOSE APPLICATION":
            connection.end();
            console.log("Have a Nice Day ... !!!");
            process.exit();
            break;
         
        }
      });
      }

      

      init();
      module.exports = init;
      