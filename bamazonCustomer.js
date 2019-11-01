// NPM Packages

let inquirer = require('inquirer');
let mysql = require('mysql');

// MySQL Server Info

let connection = mysql.createConnection ({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Plzgtf0k!',
    database: 'bamazon'
});