import Backpack from "@michaelkramer/backpack";
import Users from "../models/Users";
import { env } from "../env";
import authenticationMiddleware from "../middlewares/authentication-middleware";

const log = new Backpack.Logger(__filename);

export function routes(app: any) {
  app.get("/api/user", authenticationMiddleware, meHandler);
  app.get("/api/user/:userId(\\d+)", authenticationMiddleware, userHandler);
}

async function userHandler(req: any, res: any) {
  const { userId } = req.params;
  console.log(userId);
  const user = await Users.query().findById(userId);
  return res.json(user || {});
}

async function meHandler(req: any, res: any) {
  return res.json(req.user || {});
}
