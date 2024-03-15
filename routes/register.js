const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const path = require('path');
const createUser = require('../db/create/users');

const dbFile = path.join(__dirname, '../db/users.db');


router.get('/', (req, res) => {
  res.redirect('/');
});

router.post('/', (req, res) => {
  console.log(req.body);
  const encryptedPassword = bcrypt.hashSync(req.body.password, 10);
  console.log(encryptedPassword);
  const decryptedPassword = bcrypt.compareSync(req.body.password, encryptedPassword);
  console.log(decryptedPassword);

  const username = req.body.username;
  createUser(dbFile, username, encryptedPassword);

  res.redirect('/');
});

module.exports = router;
