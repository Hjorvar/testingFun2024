const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

  if(req.session.user) {
    const title = 'Forbidden';
    const text = 'WHO, how did you get in here?';
    const username = req.session.user;
    res.render('forbidden', { title, text, username });
  } else {
    res.redirect('/');
  }
});

module.exports = router;
