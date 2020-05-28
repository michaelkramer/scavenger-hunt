import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  await knex.raw(`CREATE FUNCTION update_record()
  RETURNS trigger
  LANGUAGE plpgsql
  AS $$
  BEGIN
      NEW.updated_at = now();
      RETURN NEW;
  END
  $$;`);
  await knex.raw(
    `CREATE TABLE "users" (
        "id" SERIAL NOT NULL PRIMARY KEY,
        "first_name" text NOT NULL,
        "last_name" text NOT NULL,
        "email" text NOT NULL,
        "password" text NOT NULL,
        "created_at" timestamptz DEFAULT NOW(),
        "updated_at" timestamptz)`
  );
  await knex.raw(
    `CREATE TRIGGER update_users BEFORE UPDATE ON users FOR EACH ROW EXECUTE PROCEDURE update_record();`
  );
  await knex.raw(
    `CREATE TABLE "pets" (
        "id" SERIAL NOT NULL PRIMARY KEY,
        "name" text NOT NULL,
        "age" integer NOT NULL,
        "user_id" integer,
        "created_at" timestamptz DEFAULT NOW(),
        "updated_at" timestamptz,
        FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE);`
  );
  await knex.raw(
    `CREATE TRIGGER update_pets BEFORE UPDATE ON pets FOR EACH ROW EXECUTE PROCEDURE update_record();`
  );
}

export async function down(knex: Knex): Promise<any> {
  await knex.raw(`DROP TABLE "pets"`);
  await knex.raw(`DROP TABLE "users"`);
  await knex.raw(`DROP FUNCTION "update_record"`);
}
