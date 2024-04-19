const Database = require('better-sqlite3');

module.exports = function getUserText(dbFile, idUser) {
  const db = new Database(dbFile);
  const stmt = db.prepare(' SELECT texts.id, texts.chapter, texts.text \
                            FROM texts INNER JOIN users \
                            ON texts.id = users.id_position \
                            WHERE users.id = ?;');
  const text = stmt.get(idUser);
  db.close();
  return text;
};