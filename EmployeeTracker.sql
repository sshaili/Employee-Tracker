/* Schema for SQL database/table. We haven't discussed this type of file yet */
DROP DATABASE IF EXISTS employeeTracker;

/* Create database */
CREATE DATABASE employeeTracker;
USE employeeTracker;

/* Create new table with a primary key that auto-increments, and a text field */
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employeerole (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary INT(7),
  department_id INT(50),
  PRIMARY KEY (id)
);

CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT(50),
  manager_id INT(50),
  primary key (id)
);

INSERT INTO department(name)
VALUES ('Sales'),
       ('Engineering'),
       ('Finance'),
       ('Legal');

INSERT INTO employeerole(title, salary, department_id)
VALUES ('Sales Lead', 100000, 1),
       ('Salesperson', 80000, 2),
       ('Lead Engineer', 150000, 3),
       ('Software Engineer', 120000, 4),
       ('Accountant', 125000, 5),
       ('Legal Team Lead', 250000, 6),
       ('Lawyer', 190000, 7),
       ('Lead Engineer', 150000, 8);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, 1),
       ('Mike', 'Chan', 2, 2),
       ('Ashley', 'Rodrigues', 3, 3),
       ('Kevin', 'Tupik', 4, 4),
       ('Malia', 'Brown', 5, 5),
       ('Sarah', 'Lourd', 6, 6),
       ('Tom', 'Allen', 7, 7),
       ('Christian', 'Eckenrode', 8, 8);