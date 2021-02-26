
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

// MIGRATIONS WORK IN BATCHES ( OR STEPS ), WHICH ARE TIME BASED.  
// IF YOU ROLLBACK, IT WILL START AT LATEST 
// UPDATE AND THEN GO BACKWARD FROM THERE 
// WHEN YOU RUN LATEST, IT WILL BATCH AND ADD WHATEVER NEW STEPS HAVEN'T RUN YET 

// ***NEVER ROLLBACK ON A LIVE PRODUCTION - ONLY LOCAL - CAN RESULT IN LOST DATA
// ROLLBACK USED FOR LOCAL DEVELOPMENT ONLY ( IF USED AT ALL )

// EXAMPLE OF BATCHES
//         1 migration   - would rollback 1
//         3 migrations  - would rollback 3
//         1 migration   - would rollback 1
//         4 migrations  - would rollback 4

// migrate:latest will run ALL EXISTING migrations, whether 1 or 1000

