import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  await knex.raw(`
    ALTER TABLE item_tags
    ADD category text;
  `);
  await knex.raw(
    `CREATE INDEX idx_item_tags_category ON item_tags (category);`
  );
}

export async function down(knex: Knex): Promise<any> {
  await knex.raw(`DROP INDEX idx_item_tags_category;`);
  await knex.raw(`
    ALTER TABLE item_tags
    DROP COLUMN category;
  `);
}
