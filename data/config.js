
// THIS FILE IS CONNECTED TO DB

const knex = require("knex")
const knexfile = require("../knexfile") //  ROOT KNEXFILE.JS IN ROOT

module.exports = knex(knexfile)   // or (knexfile.development)

// QUESTIONS FOR DATABASE SCHEMAS
// - WHAT COLUMNS
// - PRIMARY KEY FOR TABLE
// - WHAT TYPE OF DATA EXPECTED
// - ANY RESTRICTIONS ( NOT NULL ETC.. ) 

// DDL DATA DEFINITION LANGUAGE