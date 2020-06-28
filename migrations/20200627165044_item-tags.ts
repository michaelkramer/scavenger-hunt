import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  await knex.raw(
    `CREATE TABLE "item_tags" (
      "title" text NOT NULL PRIMARY KEY,
      "description" text
    );`
  );
}

export async function down(knex: Knex): Promise<any> {
  await knex.raw(`DROP TABLE item_tags;`);
}
