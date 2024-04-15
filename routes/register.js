const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const path = require('path');
const createUser = require('../db/create/users');

const dbFile = path.join(__dirname, '../db/users.db');


router.get('/', (req, res) => {
  const title = 'Register page';
  res.render('register', { title });
});

router.post('/', (req, res) => {
  // const decryptedPassword = bcrypt.compareSync(req.body.password, encryptedPassword); Used to decode for login
  const encryptedPassword = bcrypt.hashSync(req.body.password, 10);
  const username = req.body.username;
  createUser(dbFile, username, encryptedPassword);

  res.redirect('/');
});

module.exports = router;
