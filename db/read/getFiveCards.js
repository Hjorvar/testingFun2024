const Database = require('better-sqlite3');

module.exports = function getFiveCards(dbFile) {
  const db = new Database(dbFile);
  const stmt = db.prepare('SELECT * FROM cards ORDER BY RANDOM() LIMIT 5;');
  const cards = stmt.all();
  db.close();
  return cards;
};