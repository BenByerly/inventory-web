const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(bodyParser.json()); // Parse JSON request bodies

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password', // Replace with your MySQL root password
  database: 'inventory_db' // Replace with your database name
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database');
});

// Simple route to check if the server is running
app.get('/', (req, res) => {
  res.send('Inventory Management API');
});

// Route to handle login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM users WHERE username = ?';
  db.query(query, [username], (err, result) => {
    if (err) {
      console.error('Error querying the database: ', err);
      res.status(500).send({ success: false, message: 'Server error' });
      return;
    }

    if (result.length === 0) {
      return res.status(400).send({ success: false, message: 'Invalid credentials' });
    }

    const user = result[0];

    // Compare the password from the database
    if (user.password === password) {
      return res.status(200).send({ success: true, message: 'Login successful' });
    }

    return res.status(400).send({ success: false, message: 'Invalid credentials' });
  });
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
