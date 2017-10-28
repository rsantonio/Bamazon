var mysql = require("mysql");

var inquirer = require("inquirer");

var table = require("console.table");

//sql database connection

var connection = mysql.createConnection({

	host: "localhost",
	port: 3306,

	user: "root",

	password: "",
	database: "bamazon_DB"

});

//connetcs server and database

connection.connect(function(err) {

	if(err) throw err;

	launchBamazon();

});

//server starting page
function launchBamazon() {
	console.log("\nWelcome to Bamazon! Meeting all your shopping needs.\n");

	inquirer.prompt({

		name: "enter",
		type: "confirm",
		message: "Would you like to see our inventory?"
	}).then(function(answer) {
		if(answer.enter) {
			displayInventory();
		} else {
			endApp();
		}

	});

}

function endApp() {
	console.log("\nThank you for using Bamazon!\n");
	connection.end();
}

function displayInventory() {

	connection.query("SELECT * FROM products", function(err, res) {
			if(err) throw err;
			console.log("Current inventory");

			var inventory = [];

			for (var i = 0; i < res.length; i++) {
				inventory.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
			}

			var columns = ["Item ID", "Name", "Department", "Price", "Availability"];

			console.table(columns, inventory);

	});
}

//user will input what they want to purchase
function promptPurchase() {

	inquirer.prompt([
		{
			type: "input",
			name: "item_id",
			message: "Enter Item ID you want to purchase."

		},
		{
			type: "input",
			name: "quantity",
			message: "Hom many of the selected item do you want to purchase?"

		}

	]).then(function(input) {

		var item = input.item_id;

		var amount = input.quantity;


		var queryStr = "SELECT * FROM products WHERE?";

		connection.query(queryStr, {item_id: item}, function(err, data) {

			if (err) throw err;

			if (data.length === 0) {
				displayInventory();

			} else {

				var productInfo = data[0];

				if (quantity <= productInfo.stock_quantity) {
					console.log("Congratulations, the product you requested is in stock! Placing order!");

					// Construct the updating query string
					var updateQueryStr = "UPDATE products SET stock_quantity = " + (productInfo.stock_quantity - quantity) + " WHERE item_id = " + item;
					// console.log('updateQueryStr = ' + updateQueryStr);

					// Update the inventory
					connection.query(updateQueryStr, function(err, data) {
						if (err) throw err;

						console.log("Your oder has been placed! Your total is $" + productInfo.price * quantity);
						console.log("Thank you for shopping with us!");
						console.log("\n---------------------------------------------------------------------\n");

						// End the database connection
						connection.end();
					})
				} else {
					console.log("Sorry, there is not enough product in stock, your order can not be placed as is.");
					console.log("Please modify your order.");
					console.log("\n---------------------------------------------------------------------\n");

					displayInventory();

				}

			}
		})
	})

}


