const { Pool } = require('pg');

const PG_URI =
  'postgres://oyvwsidn:zBSbUsL3Ryh7srsRJSxyoqgY2fz88lb8@suleiman.db.elephantsql.com:5432/oyvwsidn';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
