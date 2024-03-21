const Database = require('better-sqlite3');

module.exports = function searchUsers(dbFile, username) {
  const db = new Database(dbFile);
  const searchWord = `%${ username }%`;
  const stmt = db.prepare('SELECT * FROM Users WHERE username LIKE ?');
  const users = stmt.all(searchWord);
  db.close();
  return users;
};