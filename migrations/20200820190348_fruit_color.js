exports.up = async function(knex) {
	// translates to `ALTER TABLE "fruits" ADD COLUMN "color" TEXT`
	await knex.schema.alterTable("fruits", (table) => {
		table.text("color")
	})
}

exports.down = async function(knex) {
	await knex.schema.alterTable("fruits", (table) => {
		table.dropColumn("color")
	})
}
