exports.up = async function(knex) {
	// translates to `CREATE TABLE "fruits"`
	await knex.schema.createTable("fruits", (table) => {
		// translates to `"id" INTEGER NOT NULL UNIQUE PRIMARY KEY`
		// table.integer("id").notNull().unique().primary()
		table.increments("id")
		// translates to `"name" TEXT NOT NULL UNIQUE`
		table.text("name").notNull().unique()
		// translates to `"avgWeightOz" FLOAT NOT NULL`
		table.float("avgWeightOz").notNull()
		// translates to `"delicious" BOOLEAN DEFAULT true`
		table.boolean("delicious").defaultTo(true)
	})
}

exports.down = async function(knex) {
	// translates to `DROP TABLE IF EXISTS "fruits"`
	await knex.schema.dropTableIfExists("fruits")
}
