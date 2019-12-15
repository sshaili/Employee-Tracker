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

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary INT(7),
  department_id INT(50),
  PRIMARY KEY (id),
  CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT(50),
  primary key (id),
  CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id)
);

INSERT INTO department(name)
VALUES ('Sales'),
       ('Engineering'),
       ('Finance'),
       ('Legal');

INSERT INTO role(title, salary, department_id)
VALUES ('Sales Lead', 100000, 1),
       ('Salesperson', 80000, 1),
       ('Lead Engineer', 150000, 2),
       ('Software Engineer', 120000, 2),
       ('Accountant', 125000, 3),
       ('Legal Team Lead', 250000, 4),
       ('Lawyer', 190000, 4),
       ('Lead Engineer', 150000, 2);

INSERT INTO employee(first_name, last_name, role_id)
VALUES ('John', 'Doe', 1),
       ('Mike', 'Chan', 2),
       ('Ashley', 'Rodrigues', 3),
       ('Kevin', 'Tupik', 4),
       ('Malia', 'Brown', 5),
       ('Sarah', 'Lourd', 6),
       ('Tom', 'Allen', 7),
       ('Christian', 'Eckenrode', 3);

      ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Pa55w0rd';