
// THIS FILE IS CONNECTED TO DB

const knex = require("knex")
const knexfile = require("../knexfile")

module.exports = knex(knexfile)