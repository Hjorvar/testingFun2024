const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const path = require('path');
const readUser = require('../db/read/user');

const dbFile = path.join(__dirname, '../db/users.db');


router.get('/', (req, res) => {
  res.redirect('/');
});

router.post('/', (req, res) => {
  const plainPassword = req.body.password;
  const { username } = req.body;
  const user = readUser(dbFile, username);

  if (user) {
    const decryptedPassword = bcrypt.compareSync(req.body.password, user.password);
    if (decryptedPassword) {
      req.session.user = username;
      res.redirect('/forbidden');
      return;
    }
  } else {
    res.redirect('/')
  }

  res.redirect('/');
});

module.exports = router;
