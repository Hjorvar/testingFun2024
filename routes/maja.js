const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const title = 'Maja';
  res.render('forbidden', { title });
});

module.exports = router;
