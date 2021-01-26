// Import MySQL connection
const connection = require("../config/connection.js");

const orm = {
    selectWhere: function(tableInput, colToSearch, valOfCol, callback) {
        const queryString = "SELECT * FROM ?? WHERE ?? = ?";

        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
            if (err) throw err;
            callback(result);
        });
    }
};

// Export the orm object for the model (burger.js)
module.exports = orm;
