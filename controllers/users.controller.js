const connection = require("../config/db");

exports.getUser = (req, res) => {
  connection.query(
    "SELECT * FROM users WHERE id=?",
    [req.params.id],
    (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    }
  );
};
exports.users = (req, res) => {
  connection.query(
    "SELECT * FROM users",
    [req.params.id],
    (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    }
  );
};

exports.saveUser = (req, res) => {
  const { name, email, password } = req.body;
  connection.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, password],
    (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    }
  );
};
