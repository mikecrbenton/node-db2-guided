
// DATABASE CONFIG 
// ROOT/BASE CODE FOR KNEX
// IT IS EXPORTED TO config.js

module.exports = {
   client: "sqlite3", // DBMS you are using
   useNullAsDefault: true, // required for SQLite3
   connection: {
      filename: "./data/produce.db3", // location of database file
   }
}