import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  await knex.raw(
    `
    CREATE TABLE "user_oauth" (
      "id" SERIAL NOT NULL PRIMARY KEY,
      "user_id" int NOT NULL,
      "oauth_provider" text NOT NULL,
      "provider_id" text NOT NULL,
      "expiry_date" timestamptz,
      "acccess_token" text NOT NULL,
      "refresh_token" text,
      "created_at" timestamptz DEFAULT NOW(),
      "updated_at" timestamptz,
      FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE);`,
    undefined
  );
  await knex.raw(
    `CREATE TRIGGER update_user_oauth BEFORE UPDATE ON user_oauth FOR EACH ROW EXECUTE PROCEDURE update_record();`
  );
}

export async function down(knex: Knex): Promise<any> {
  await knex.raw(`DROP TABLE "user_oauth"`);
}
