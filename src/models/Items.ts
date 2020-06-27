import { Model } from "objection";
import _ from "lodash";
import Backpack from "@michaelkramer/backpack";
import Users from "./Users";
import ItemPair from "./Item-Pair";
const log = new Backpack.Logger(__filename);

export default class Items extends Model {
  id!: number;
  userId!: number;
  name!: string;
  tags?: Array<string>;
  description?: string;
  itemPairId?: number;
  createdAt!: Date;
  updatedAt?: Date;

  user?: Users;
  pair?: ItemPair;

  // Table name is the only required property.
  static tableName = "items";

  static jsonSchema = {
    type: "object",
    required: ["userId", "name"],

    properties: {
      id: { type: "integer" },
      userId: { type: "integer" },
      name: { type: "string" },
      tags: {
        type: ["array", "null"],
      },
      description: { type: ["string", "null"] },
      itemPairId: { type: ["integer", "null"] },
      createdAt: { type: "string" },
      updatedAt: { type: ["string", "null"] },
    },
  };

  static relationMappings = () => ({
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: Users,
      join: {
        from: "items.user_id",
        to: "users.id",
      },
    },
    pair: {
      relation: Model.BelongsToOneRelation,
      modelClass: ItemPair,
      join: {
        from: "items.item_pair_id",
        to: "item_pair.id",
      },
    },
  });

  static get jsonAttributes() {
    return [];
  }
}
