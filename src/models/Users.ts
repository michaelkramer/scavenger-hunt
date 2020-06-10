import { Model } from "objection";
import Backpack from "@michaelkramer/backpack";
import * as bcrypt from "bcrypt";
import UserOauth from "./User-Oauth";
const log = new Backpack.Logger(__filename);

export default class Users extends Model {
  id!: number;
  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;
  createdAt!: Date;
  updatedAt?: Date;
  picture?: { url: string; shape: "square" | "circle" };

  userOauths?: UserOauth[];

  // Table name is the only required property.
  static tableName = "users";

  static jsonSchema = {
    type: "object",
    required: ["firstName", "lastName"],

    properties: {
      id: { type: "integer" },
      firstName: { type: "string" },
      lastName: { type: "string" },
      email: { type: "string" },
      password: { type: "string" },
      createdAt: { type: "string" },
      updatedAt: { type: ["string", "null"] },
      picture: { type: ["object", "null"] },
    },
  };

  static relationMappings = () => ({
    userOauths: {
      relation: Model.HasManyRelation,
      modelClass: UserOauth,
      join: {
        from: "users.id",
        to: "user_oauth.user_id",
      },
    },
  });

  async $beforeInsert(context) {
    await super.$beforeInsert(context);

    return this.generateHash();
  }

  async generateHash() {
    const hash = await Users.hashPassword(this.password ?? "1234");
    this.password = hash;
  }

  public static hashPassword(password: string): Promise<string> {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          return reject(err);
        }
        resolve(hash);
      });
    });
  }

  public static comparePassword(
    user: Users,
    password: string
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, res) => {
        resolve(res === true);
      });
    });
  }
}
