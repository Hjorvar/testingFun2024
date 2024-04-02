const express = require('express');
const router = express.Router();
const path = require('path');
const getFiveCards = require('../db/read/getFiveCards');

const dbFile = path.join(__dirname, '../db/cards.db');

router.get('/', (req, res) => {
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index
      const j = Math.floor(Math.random() * (i + 1));
      // Swap elements at indices i and j
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  const title = 'Memory';
  let cards = getFiveCards(dbFile);
  cards = shuffle(cards.concat(cards));
  res.render('memory', { title, cards });
});

// Route to handle the search request
router.post('/', (req, res) => {

});

module.exports = router;
