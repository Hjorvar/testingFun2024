const Database = require('better-sqlite3');

module.exports = function readUser(dbFile, username) {
  const db = new Database(dbFile);
  const stmt = db.prepare('SELECT * FROM users WHERE username = ?');
  const user = stmt.get(username);
  db.close();
  return user;
};