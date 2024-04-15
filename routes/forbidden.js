const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

  if(req.session.username) {
    const title = 'Forbidden';
    const text = 'WHO, how did you get in here?';
    const username = req.session.username;
    res.render('forbidden', { title, text, username });
  } else {
    res.redirect('/');
  }
});

module.exports = router;
