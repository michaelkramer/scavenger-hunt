import * as Knex from "knex";
import * as bcrypt from "bcrypt";
require("dotenv").config();

export async function seed(knex: Knex): Promise<any> {
  const systemUser = await knex("users").where("id", 0).first();
  if (!systemUser) {
    return knex("users").insert([
      {
        id: 0,
        first_name: "System",
        last_name: "User",
        email: process.env.SYSTEM_USER_EMAIL,
        password: await hashPassword(
          process.env.SYSTEM_USER_PASSWORD || "password"
        ),
      },
    ]);
  }
  return;
}

function hashPassword(password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        return reject(err);
      }
      resolve(hash);
    });
  });
}
