import { Model } from "objection";
import Backpack from "@michaelkramer/backpack";
const log = new Backpack.Logger(__filename);

export default class ItemTags extends Model {
  title!: string;
  description?: string;

  // Table name is the only required property.
  static tableName = "item_tags";

  static jsonSchema = {
    type: "object",
    required: ["title"],

    properties: {
      title: { type: "string" },
      description: { type: "string" },
    },
  };

  static get idColumn() {
    return "title";
  }
}
