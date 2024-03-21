const express = require('express');
const router = express.Router();
const path = require('path');
const searchUsers = require('../db/read/searchUsers');

const dbFile = path.join(__dirname, '../db/users.db');

// Route to handle the search request
router.post('/', (req, res) => {
  const searchTerm = req.body.search;
  const users = searchUsers(dbFile, searchTerm);
  // Send the users back to the client
  res.json(users);
});

module.exports = router;
