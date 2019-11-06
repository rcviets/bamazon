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
        
        let productArr = [];

        for (let i = 0; i < res.length; i++) {
            productArr.push(res[i].item_id + ' | ' + res[i].product_name + ' | ' + 'Price: ' + 
                res[i].price + ' | ' + 'Quantity: ' + res[i].stock_quantity);
        }
        console.log(productArr);
        console.log('+++++++++++++++++++++++++++++');
        inquirer.prompt([
            {   
                type: 'input',
                name:'item_id',
                message: "What is the ID # of the product you would like to purchase?"
            },
            {
                type: 'input',
                name: 'purchase_quantity',
                message: 'How many would you like to purchase?'
            }
        ])
    });
}