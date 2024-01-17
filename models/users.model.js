const connection = require("../config/db");

const allUsers = connection.query(
  "SELECT * FROM users",
  (error, results, fields) => {
    if (error) throw error;
    return results;
  }
);

module.exports = allUsers;
