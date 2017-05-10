
exports.up = function(knex, Promise) {
  return knex.schema.createTable('customers', (table) => {
    table.uuid('_id').notNullable().unique().primary();
    table.string('first_name');
    table.string('last_name');
    table.string('company_name');
    table.string('email');
    table.string('address_line_1');
    table.string('address_line_2');
    table.integer('zip_code');
    table.jsonb('details');
    table.text('notes');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('customers');
};
