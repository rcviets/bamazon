// NPM Packages

let inquirer = require('inquirer');
let mysql = require('mysql');

// MySQL Server Info

let connection = mysql.createConnection ({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Plzgtf0k!',
    database: 'bamazon_db'
});

// Check Connection to Database

connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected to Bamazon');
    readProducts();
    connection.end();
});

// Read the Products Table

function readProducts() {
    connection.query('SELECT * FROM products', function(err, res) {
        if (err) throw err;
        for (let i = 0; i < res.length; i++) {
            console.log(res[i].item_id + ' | ' + res[i].product_name + ' | ' +
                res[i].department_name + ' | ' + res[i].price + ' | ' + res[i].stock_quantity);
        }
        console.log('++++++++++++++++++++++++++++++');
    });
}