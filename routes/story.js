const express = require('express');
const path = require('path');
const router = express.Router();
const getUserText = require('../db/read/userText');
const getTextOptions = require('../db/read/getTextOptions');
const updatePlayerPosistion = require('../db/update/playerPosistion');

const dbFile = path.join(__dirname, '../db/users.db');

router.get('/', (req, res) => {

  if(req.session.username) {
    const title = 'Story';
    const text = getUserText(dbFile, req.session.idUser);
    const options = getTextOptions(dbFile, text.id);
    const username = req.session.username;
    res.render('story', { title, text, username, options });
  } else {
    res.redirect('/');
  }
});

router.post('/', (req, res) => {
    if(req.session.username) {
      updatePlayerPosistion(dbFile, req.session.idUser, req.body.idText);
      const title = 'Story';
      const text = getUserText(dbFile, req.session.idUser);
      const options = getTextOptions(dbFile, text.id);
      const username = req.session.username;
      res.render('story', { title, text, username, options });
    } else {
      res.redirect('/');
    }
  });

module.exports = router;
