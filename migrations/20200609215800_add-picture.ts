import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  await knex.raw(
    `ALTER TABLE users
    ADD picture jsonb;`,
    undefined
  );
}

export async function down(knex: Knex): Promise<any> {
  await knex.raw(
    `ALTER TABLE users
    DROP picture;`,
    undefined
  );
}
