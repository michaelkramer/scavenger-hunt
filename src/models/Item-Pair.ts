import { Model } from "objection";
import Backpack from "@michaelkramer/backpack";
import Items from "./items";
const log = new Backpack.Logger(__filename);

export default class ItemPair extends Model {
  id!: number;
  name!: string;
  item?: Items;

  // Table name is the only required property.
  static tableName = "item_pair";

  static jsonSchema = {
    type: "object",
    required: ["name"],

    properties: {
      id: { type: "integer" },
      name: { type: "string" },
    },
  };

  static relationMappings = () => ({
    userOauths: {
      relation: Model.HasManyRelation,
      modelClass: Items,
      join: {
        from: "item_pair.id",
        to: "items.item_pair_id",
      },
    },
  });
}
