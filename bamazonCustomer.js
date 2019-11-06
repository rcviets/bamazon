// NPM Packages

let inquirer = require('inquirer');
let mysql = require('mysql');

// MySQL Server Info

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Plzgtf0k!',
    database: 'bamazon_db'
});

// Check Connection to Database

connection.connect(function (err) {
    if (err) throw err;
    console.log('Connected to Bamazon');
    readProducts();
    connection.end();
});

// Read the Products Table

function readProducts() {
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;

        let idArr = [];
        let productArr = [];
        let priceArr = [];
        let quantityArr = [];

        for (let i = 0; i < res.length; i++) {
            if (res[i].stock_quantity > 0) {
                idArr.push(res[i].item_id);
                productArr.push(res[i].product_name);
                priceArr.push(res[i].price);
                quantityArr.push(res[i].stock_quantity);
            }
        }
        console.log('Products Available');
        console.log('+++++++++++++++++++++++++++++');
        for (let i = 0; i < idArr.length; i++) {
            console.log('Item ID: ' + idArr[i]);
            console.log('Product: ' + productArr[i]);
            console.log('Price: $' + priceArr[i]);
            console.log('++++++++++++++++++++++++++++++')
        }

        purchaseProduct();
    });
}

function purchaseProduct() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'buyID',
            message: "What is the ID # of the product you would like to purchase?"
        },
        {
            type: 'input',
            name: 'butQTY',
            message: 'How many would you like to purchase?'
        }
    ]).then(function (answer) {

        for (let i = 0; i < productArr.length; i++) {
            if (answer.buyID == productArr[i]) {

                if (answer.buyQTY > quantityArr[i]) {
                    console.log('Insufficient Quantity!');
                }
            }        
        }
    })
}