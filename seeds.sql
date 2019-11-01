-- Create Bamazon Database

DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

-- Create Products Table

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(45) NOT NULL,
    department_name VARCHAR(45) DEFAULT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT(10) NOT NULL,
    PRIMARY KEY (item_id)
);

-- Populate Products Table

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Stranger in a Strange Land', 'Books', 24.99, 24);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Lego Millenium Falcon', 'Toys', 219.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Playstation 4', 'Electronics', 349.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Avengers: Endgame', 'Movies', 19.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Resident Evil 2', 'Video Games', 59.99, 35);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Book of Eli', 'Movies', 12.99, 27);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Cat's Cradle", 'Books', 9.99, 17);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ('Gundam Suit Unicorn Model', 'Toys', 89.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ('God of War 4', 'Video Games', 39.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ('LG 50" Smart TV', 'Electronics', 599.99, 4);

SELECT * FROM products;