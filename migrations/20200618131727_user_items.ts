import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  await knex.raw(
    `CREATE TABLE "item_pair" (
      "id" SERIAL NOT NULL PRIMARY KEY,
      "name" text NOT NULL
    );`
  );

  await knex.raw(
    `
    CREATE TABLE "items" (
      "id" SERIAL NOT NULL PRIMARY KEY,
      "user_id" int NOT NULL DEFAULT 0 REFERENCES "users"("id") ON DELETE SET DEFAULT,
      "name" text NOT NULL,
      "tags" text[],
      "description" text,
      "item_pair_id" int REFERENCES "item_pair"("id") ON DELETE SET NULL,
      "created_at" timestamptz DEFAULT NOW(),
      "updated_at" timestamptz);`,
    undefined
  );
  //
  await knex.raw(
    `CREATE TRIGGER update_items BEFORE UPDATE ON items FOR EACH ROW EXECUTE PROCEDURE update_record();`
  );
}

export async function down(knex: Knex): Promise<any> {
  await knex.raw(`DROP TABLE items;`);
  await knex.raw(`DROP TABLE item_pair;`);
}
