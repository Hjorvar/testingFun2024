const express = require('express');
const router = express.Router();
const path = require('path');
const searchUsers = require('../db/read/searchUsers');

const dbFile = path.join(__dirname, '../db/users.db');

router.get('/', (req, res) => {
  const title = 'Register';
  const funnyText = 'ELLI, you are so funny, and please teach me how to play guitar';

  let isLoggedIn = false;
  if(req.session.user) {
    isLoggedIn = true;
  }
  res.render('index', { title, isLoggedIn, funnyText });
});

// Route to handle the search request
router.post('/', (req, res) => {
  const searchTerm = req.body.search;
  const users = searchUsers(dbFile, searchTerm);
  // Send the users back to the client
  res.json(users);
});

module.exports = router;
