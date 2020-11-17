
exports.up = async function(knex) {
   await knex.schema.alterTable("fruits", (table) => {
      table.boolean("tropical").defaultTo(false)
   })
};

exports.down = async function(knex) {
   await knex.schema.alterTable("fruits", (table) => {
      table.dropColumn("tropical")
   })
};

// MIGRATIONS WORK IN BATCHES ( OR STEPS ), WHICH ARE TIME BASED.  IF YOU ROLLBACK, IT WILL START AT LATEST 
// UPDATE AND THEN GO BACKWARD FROM THERE 
// WHEN YOU RUN LATEST, IT WILL BATCH AND ADD WHATEVER NEW STEPS HAVEN'T RUN YET 

// NEVER ROLLBACK ON A LIVE PRODUCTION - ONLY LOCAL - CAN RESULT IN LOST DATA
// ROLLBACK USED FOR LOCAL DEVELOPMENT ONLY ( IF USED AT ALL )