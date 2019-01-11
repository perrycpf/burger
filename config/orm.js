var connection = require("./connection.js");

// Create the ORM object to perform SQL queries
let orm = {
    // Function returns all records from table
    selectAll: (tableInput, cb) => {
        var queryString = "SELECT * FROM ??";
  
        connection.query(queryString, [tableInput], (err, result) => {
            if (err) throw err;
            console.log(result);
            cb (result);
        });
    },
    // Function inserts row into a table
    insertOne: (tableInput, colOne, colTwo, valOne, valTwo, cb) => {
        var queryString = "INSERT INTO ?? (??,??) VALUES (?,?)";
 
        connection.query(queryString, [tableInput, colOne, colTwo, valOne, valTwo], (err, result) => {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },

    // Function updates a record from table
    updateOne: (tableInput, objColVals, condition, cb) => {
        var queryString = `UPDATE ${tableInput} SET devoured = ? WHERE id = ?`;
  
        connection.query(queryString, [objColVals, condition], (err, result) => {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    }
}
// Export the orm object for use in other modules
module.exports = orm;