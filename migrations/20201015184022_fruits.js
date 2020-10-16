exports.up = async function(knex) {
	// translates to `CREATE TABLE fruits (...);`
	await knex.schema.createTable("fruits", (table) => {
		// translates to `"id" INTEGER NOT NULL UNIQUE PRIMARY KEY`
		// table.integer("id").notNull().unique().primary()
		
		// a shortcut for the above
		table.increments("id")
		table.text("name").notNull().unique()
		table.float("avgWeightOz").notNull()
		table.boolean("delicious").defaultTo(true)
		table.text("color")
	})
}

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("fruits")
}
