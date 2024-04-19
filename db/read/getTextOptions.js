const Database = require('better-sqlite3');

module.exports = function getTextOptions(dbFile, idText) {
  const db = new Database(dbFile);
  const stmt = db.prepare(' SELECT options, id_followup_text \
                            FROM text_options \
                            WHERE id_text = ?;');
  const options = stmt.all(idText);
  db.close();
  return options;
};