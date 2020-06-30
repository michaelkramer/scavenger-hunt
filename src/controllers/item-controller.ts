import Backpack from "@michaelkramer/backpack";
import _ from "lodash";
import { env } from "../env";
import authenticationMiddleware from "../middlewares/authentication-middleware";
import Items from "../models/Items";
import * as Constants from "../constants";

const log = new Backpack.Logger(__filename);

export function routes(app: any) {
  app.get("/api/items", authenticationMiddleware, itemsHandler);
  app.get("/api/items/:id(\\d+)", authenticationMiddleware, itemIdHandler);

  app.put("/api/items", authenticationMiddleware, putItemHandler);
  app.post("/api/items", authenticationMiddleware, postItemHandler);
}

async function itemsHandler(req, res) {
  const { query } = req;

  const customFilteredKeys = ["name", "description", "tags"];

  const sql = Items.query();
  if (query.name) {
    sql.where("name", "ilike", `%${query.name}%`);
  }

  if (query.description) {
    sql.where("description", "ilike", `%${query.description}%`);
  }

  if (query.tags) {
    const tags = _.isArray(query.tags) ? query.tags : query.tags.split(",");

    sql.where(
      Backpack.db.mk.raw("LOWER(tags::text)::text[]"),
      "@>",
      tags.map((tag) => tag.toLowerCase().trim())
    );
  }

  sql.where(_.omit(query, customFilteredKeys));

  const items = await sql;
  return res.send(items);
}

async function itemIdHandler(req, res) {
  const { id } = req.params;

  const item = await Items.query().findById(id).withGraphJoined("user");
  return res.send(item);
}

async function putItemHandler(req, res) {
  const { id } = req.user;
  const payload = _.omitBy(_.assign({}, req.body, { userId: id }), _.isNil);
  if (!payload.tags.length) {
    _.set(payload, "tags", null);
  }
  const response = await Items.query().patchAndFetchById(payload.id, payload);
  return res.send(response);
}

async function postItemHandler(req, res) {
  const { id } = req.user;
  const payload = _.omitBy(_.assign({}, req.body, { userId: id }), _.isNil);
  const response = await Items.query().insert(payload);
  return res.send(response);
}
