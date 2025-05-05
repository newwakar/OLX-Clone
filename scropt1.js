var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});




-- Create a database (if it doesn't exist)
CREATE DATABASE IF NOT EXISTS user_management;

-- Use the created database
USE user_management;

-- Create a table to store user information
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    gender VARCHAR(10),
    phone VARCHAR(15),
    isAuthenticated BOOLEAN DEFAULT FALSE
);

-- Insert a new user into the users table
INSERT INTO users (name, email, gender, phone, isAuthenticated) VALUES
('John Doe', 'john@example.com', 'Male', '1234567890', TRUE),
('Jane Smith', 'jane@example.com', 'Female', '0987654321', FALSE);

-- Retrieve user information by email
SELECT * FROM users WHERE email = 'john@example.com';

-- Update user authentication status
UPDATE users SET isAuthenticated = TRUE WHERE email = 'john@example.com';

-- Delete a user by email
DELETE FROM users WHERE email = 'jane@example.com';

-- Example of selecting all users
SELECT * FROM users;
