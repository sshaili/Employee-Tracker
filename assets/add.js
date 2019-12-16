const inquirer = require('inquirer');
var connection = require("../connect.js");

function addEmployee(){
    inquirer.prompt([{
        name: "first_name",
        type: "input",
        message: "What is the employee's first name?",
        validate: function(value){
            var string = value.match(/^\s*\S+.*/);
            if (string) {
              return true;
            } else {
              return "Please enter the Employee's FIRST NAME ";
            }
          }
        },
        {
            name: "last_name",
            type: "input",
            message: "What is the employee's last name?",
            validate: function(value){
                var string = value.match(/^\s*\S+.*/);
                if (string) {
                  return true;
                } else {
                  return "Please enter the Employee's LAST NAME ";
                }
              }
            },
            {
                name: "title",
                type: "list",
                message: "What is the employee's job title?",
                choices: [
                    "Sales Lead",
                    "SalesPerson",
                    "Lead Engineer" ,
                    "Software Engineer",
                    "Accountant",
                    "Legal Team Lead",
                    "Lawyer",
                    "Lead Engineer"
                ],
            }
            ])
        .then(async function(answer){
            var firstName = answer.first_name;
            var lastName = answer.last_name;
            if(answer.title === "Sales Lead"){
                var roleID = 1;
            }else  if(answer.title === "SalesPerson"){
                var roleID = 2;
            }else if(answer.title === "Lead Engineer"){
                var roleID = 3;
            }else if(answer.title === "Software Engineer"){
                var roleID = 4;
            }else if(answer.title === "Accountant"){
                var roleID = 5;
            }else if(answer.title === "Legal Team Lead"){
                var roleID = 6;
            }else if(answer.title === "Lawyer"){
                var roleID = 7;
            }else if(answer.title === "Lead Engineer"){
                var roleID = 8;
            }
            
            connection.query(`INSERT INTO employee (first_name,last_name,role_id) VALUES ("${firstName}","${lastName}","${roleID}")`, function(err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.log(res.affectedRows + "  Record Inserted");
    })

    })
}

function addDepartment(){
    inquirer.prompt([
            {
                name: "department",
                type: "input",
                message: "Please add the department",
                validate: function(value){
                var string = value.match(/^\s*\S+.*/);
                if (string) {
                  return true;
                } else {
                  return "Please enter the DEPARTMENT ";
                }
              }
            }
            ]) .then(async function(answer){
            var department = answer.department;
            connection.query(`INSERT INTO department (name) VALUES ("${department}")`, function(err, res) {
                if (err) throw err;
                // Log all results of the SELECT statement
                console.log(res.affectedRows + "  Record Inserted");
        })
    })
}

function addRole(){
    inquirer.prompt([
        {
            name: "role",
            type: "input",
            message: "Please add the job title",
            validate: function(value){
            var string = value.match(/^\s*\S+.*/);
            if (string) {
              return true;
            } else {
              return "Please enter the JOB TITLE ";
            }
          }
        },
        {
            name: "salary",
            type: "input",
            message: "Please add the job title's salary",
            validate: function(value){
            var string = value.match(/^\s*\S+.*/);
            if (string) {
              return true;
            } else {
              return "Please enter the SALARY";
            }
          }
        },
        {
            name: "department",
            type: "list",
            message: "Please select the department",
            choices: [
                "Sales",
                "Engineering",
                "Finance",
                "Legal",
                "Quality"
            ]
        }
        ]) .then(async function(answer){
        var title = answer.role;
        var salary = answer.salary;
        if(answer.department === "Sales"){
            var departmentid = 1;
        }else if(answer.department === "Engineering"){
            var departmentid = 2;
        }else if(answer.department === "Finance"){
            var departmentid = 3;
        }else if(answer.department === "Legal"){
            var departmentid = 4;
        }else if(answer.department === "Quality"){
            var departmentid = 5;
        }
        connection.query(`INSERT INTO role (title,salary,department_id) VALUES ("${title}","${salary}","${departmentid}")`, function(err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.log(res.affectedRows + "  Record Inserted");
    })
})
}

      module.exports = {addEmployee,addDepartment,addRole};