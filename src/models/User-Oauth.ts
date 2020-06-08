import { Model } from "objection";
import Backpack from "@michaelkramer/backpack";
import path from "path";
import Users from "./Users";
const log = new Backpack.Logger(__filename);

export default class UserOauth extends Model {
  id!: number;
  userId!: number;
  oauthProvider!: string;
  providerId!: string;
  expiryDate: Date;
  acccessToken!: string;
  refreshToken: string;
  createdAt!: Date;
  updatedAt?: Date;

  user?: Users;

  // Table name is the only required property.
  static tableName = "user_oauth";

  static jsonSchema = {
    type: "object",
    required: ["userId", "oauthProvider", "providerId", "acccessToken"],

    properties: {
      id: { type: "integer" },
      userId: { type: "integer" },
      oauthProvider: { type: "string" },
      providerId: { type: "string" },
      expiryDate: { type: "string" },
      acccessToken: { type: "string" },
      refreshToken: { type: "string" },
      createdAt: { type: "string" },
      updatedAt: { type: ["string", "null"] },
    },
  };

  static relationMappings = () => ({
    //const Users = path.join(__dirname, "Users");

    user: {
      relation: Model.BelongsToOneRelation,
      //modelClass: path.join(__dirname, "Users"),
      modelClass: Users,
      join: {
        from: "user_oauth.user_id",
        to: "users.id",
      },
    },
  });
  // static get relationMappings() {
  //   //const Users = path.join(__dirname, "Users");
  //   return {
  //     user: {
  //       relation: Model.BelongsToOneRelation,
  //       //modelClass: path.join(__dirname, "Users"),
  //       modelClass: Users,
  //       join: {
  //         from: "user_oauth.user_id",
  //         to: "users.id",
  //       },
  //     },
  //   };
  // }
}
