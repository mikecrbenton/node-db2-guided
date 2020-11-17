
// LATEST
// npx knex migrate:latest  
exports.up = async function(knex) {
  await knex.schema.createTable("fruits", (table) => {

      //table.integer("id").notNull().unique().primary()
      // SHORTCUT TO ABOVE
      table.increments("id")
      table.text("name").notNull().unique()
      table.float("avgWeightOz").notNull()
      table.boolean("delicious").defaultTo(true)
      table.text("color")
  })
};

// ROLLBACK
// npx knex migrate:rollback   
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("fruits")
};
