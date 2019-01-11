let orm = require("../config/orm");

// Create the burger object
let burger = {
    // Select all burger table entries
    selectAll: (cb) => {
        orm.selectAll('burgers', (res) => {
            cb(res);
        });
    },
    // Insert record into burger table
    insertOne: (valOne, valTwo, cb) => {
        orm.insertOne('burgers', 'burger_name', 'devoured', valOne, valTwo, (res) => {
            cb(res);
        });
    },
    // Update record from burger table
    updateOne: (objColVals, condition, cb) => {
        orm.updateOne('burgers', objColVals, condition, (res) => {
            cb(res);
        })
    }
}

// Export the database functions for the controller (burgerController.js).
module.exports = burger;