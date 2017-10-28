DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  item_id INT(11) NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(80) NOT NULL,
  department_name VARCHAR(80) NOT NULL,
  price DECIMAL(10,4) NOT NULL,
  stock_quantity INT(11) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ruffles", "Groceries", 3.95, 500);

INSERT iNTO products (product_name, department_name, price, stock_quantity)
VALUES ("Beef Jerky", "Groceries", 5.95, 300);
INSERT INTO products (product_name, department_name, price, stock_quantity)

VALUES ("Toilet Paper", "Toiletries", 4.85, 550);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dove Shampoo", "Toiletries", 5.75, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pens", "School Supplies", 2.75, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pillows", "Bedroom", 10.75, 245);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Towels", "Bathroom", 12.75, 135);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Monopoly", "Toys", 23.75, 195);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("PS4", "Electronics", 563.75, 95);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kindle", "Electronics", 183.25, 55);






