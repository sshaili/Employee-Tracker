const inquirer = require('inquirer');
const init = require('../EmployeeTracker');
var mysql = require("mysql");
var connection = require("../connect.js");
const { printTable } = require('console-table-printer');

function viewEmployees(){
        connection.query(`SELECT e.id AS "ID", e.first_name AS "FIRST NAME", e.last_name AS "LAST NAME", 
        r.title AS "ROLE", d.name AS "DEPARTMENT", r.salary AS "SALARY"
        FROM employee e 
        LEFT JOIN role r ON e.role_id=r.id
        LEFT JOIN department d ON r.department_id = d.id`, function(err, res) {
          if (err) throw err;
          // Log all results of the SELECT statement
          printTable(res);
        });
      }

function viewByDepartment(){
    inquirer.prompt({
        name: "departments",
        type: "list",
        message: "Please select the department of the employee",
        choices: [ "Sales",
                    "Engineering",
                    "Finance" ,
                    "Legal"]
    })
    .then(async function(answer) {
        var department = answer.departments;
        connection.query(`SELECT e.id AS "ID", e.first_name AS "FIRST NAME", e.last_name AS "LAST NAME", 
        r.title AS "ROLE", d.name AS "DEPARTMENT", r.salary AS "SALARY"
        FROM employee e 
        LEFT JOIN role r ON e.role_id=r.id
        LEFT JOIN department d ON r.department_id = d.id WHERE d.name="${department}"`, function(err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            printTable(res);
    })
})
}

function viewByRoles(){
    inquirer.prompt({
        name: "roles",
        type: "list",
        message: "Please select the Roles of the employee",
        choices: [ "Sales Lead",
                    "SalesPerson",
                    "Lead Engineer" ,
                    "Software Engineer",
                    "Accountant",
                    "Legal Team Lead",
                    "Lawyer",
                    "Lead Engineer"
                ]
    })
    .then(async function(answer) {
        var role = answer.roles;
        connection.query(`SELECT e.id AS "ID", e.first_name AS "FIRST NAME", e.last_name AS "LAST NAME", 
        r.title AS "ROLE", d.name AS "DEPARTMENT", r.salary AS "SALARY"
        FROM employee e 
        LEFT JOIN role r ON e.role_id=r.id
        LEFT JOIN department d ON r.department_id = d.id WHERE r.title="${role}"`, function(err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            printTable(res);
    })
})
}

function viewDepartments(){
    connection.query(`SELECT d.id AS "ID", d.name AS "Department NAME" FROM department d`, function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      printTable(res);
    });
}

function viewRoles(){
    connection.query(`SELECT r.id AS "ID", r.title AS "JOB TITLE", r.salary FROM role r`, function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        printTable(res);
      });
}

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

      module.exports = {viewEmployees,viewByDepartment,viewByRoles,viewDepartments,viewRoles,addEmployee,addDepartment};