const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const title = 'Register';
  const funnyText = 'ELLI, you are so funny, and please teach me how to play guitar';

  let isLoggedIn = false;
  if(req.session.user) {
    isLoggedIn = true;
  }
  res.render('index', { title, isLoggedIn, funnyText });
});

module.exports = router;
