const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const path = require('path');
const readUser = require('../db/read/user');

const dbFile = path.join(__dirname, '../db/users.db');


router.get('/', (req, res) => {
  const title = 'Login page';
  res.render('login', { title });
});

router.post('/', (req, res) => {
  const username = req.body.username; // same as   const { username } = req.body;
  const plainPassword = req.body.password;
  const user = readUser(dbFile, username);

  if (user) {
    const isPasswordTrue = bcrypt.compareSync(plainPassword, user.password);
    if (isPasswordTrue) {
      req.session.username = username;
      req.session.idUser = user.id
      res.redirect('/');
    } else {
      res.redirect('/login');
    }
  } else {
    res.redirect('/login');
  }

});

module.exports = router;
