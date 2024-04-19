const Database = require('better-sqlite3');

module.exports = function updatePlayerPosistion(dbFile, idUser, idText) {
  const db = new Database(dbFile);
  const stmt = db.prepare('UPDATE users SET id_position = ? WHERE id = ?');
  stmt.run(idText, idUser);
  db.close();
  return true;
};