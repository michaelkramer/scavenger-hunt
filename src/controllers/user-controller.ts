import Backpack from "@michaelkramer/backpack";
import _ from "lodash";
import { Facebook } from "fb";
//import Users from "../models/Users";
import { env } from "../env";
import authenticationMiddleware from "../middlewares/authentication-middleware";
import * as Users from "../ctx/users";
import * as Constants from "../constants";

const log = new Backpack.Logger(__filename);

export function routes(app: any) {
  app.get("/api/user", authenticationMiddleware, meHandler);
  app.get("/api/user/:userId(\\d+)", authenticationMiddleware, userHandler);

  app.get(
    "/api/user/facebook",
    authenticationMiddleware,
    fetchFacebookProfileHandler
  );
  app.put("/api/user", authenticationMiddleware, putUserHandler);
  app.put("/api/user/picture", authenticationMiddleware, putUserPicture);
}

async function userHandler(req: any, res: any) {
  const { userId } = req.params;
  console.log(userId);
  const user = await Users.fetchUser(userId);
  return res.json(user || {});
}

async function meHandler(req: any, res: any) {
  const { id } = req.user;
  const user = await Users.fetchUser(id);
  return res.json(user || {});
  //return res.json(req.user || {});
}

async function fetchFacebookProfileHandler(req: any, res: any) {
  const { id } = req.user;
  const user = await Users.fetchUser(id);

  const facebookOauth = user.userOauths.find(
    (u) => u.oauthProvider === "facebook"
  );
  const fb = new Facebook({
    accessToken: facebookOauth.acccessToken,
    appId: env.oauth.facebook.clientId,
    appSecret: env.oauth.facebook.clientSecret,
  });
  const result = await fb.api("/me?fields=picture,email,name");
  if (result && result.error) {
    if (result.error.code === "ETIMEDOUT") {
      console.log("request timeout");
    } else {
      log.error("FB Error", result);
    }
  }
  return res.json(result);
}

async function putUserHandler(req: any, res: any) {
  const user = req.body;
  const { id } = req.user;
  try {
    const payload = _.omit(user, [
      "password",
      "createdAt",
      "updatedAt",
      "userOauths",
    ]);
    const updatedUser = await Users.updateUser(id, payload);
    return res.json(updatedUser);
  } catch (err) {
    return res.status(500).send(err);
  }
}

async function putUserPicture(req: any, res: any) {
  const { provider } = req.body;
  const { id } = req.user;
  try {
    if (!Constants.PICTURE_PROVIDERS.includes(provider)) {
      return res.status(404);
    }
    const user = await Users.fetchUser(id);

    const sm = Users.SocialMedia[provider];
    const result = await sm.fetchProfile(user);
    const picture = _.get(result, "picture.data.url");
    await Users.Users.query()
      .findById(id)
      .patch({ picture: { url: picture, shape: "circle" } });
    user.picture = { url: picture, shape: "circle" };
    return res.json(user);
  } catch (err) {
    return res.status(500).send(err);
  }
}
