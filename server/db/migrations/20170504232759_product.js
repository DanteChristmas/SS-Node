
exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', (table) => {
    table.uuid('_id').notNullable().unique().primary();
    table.enu('type', ['STRAP', 'MERCH', 'APPAREL']).notNullable().defaultTo('STRAP');
    table.bool('available').notNullable().defaultTo(false);
    table.string('name');
    table.decimal('price');
    table.jsonb('details');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');
};
