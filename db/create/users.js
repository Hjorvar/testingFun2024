const Database = require('better-sqlite3');

module.exports = function createUser(dbFile, username, password) {
  const db = new Database(dbFile);
  const stmt = db.prepare('INSERT INTO users(username, password) \
                          VALUES (?, ?)');
  stmt.run(username, password);

  db.close();
  return true;
};