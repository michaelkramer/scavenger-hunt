import { Strategy as LocalStrategy } from "passport-local";
import Backpack from "@michaelkramer/backpack";
import Users from "../../models/Users";

const log = new Backpack.Logger(__filename);

export default function local() {
  return new LocalStrategy(async (username, password, done) => {
    try {
      const email = username;
      console.log("==> local str", email, password);
      const user = await Users.query().findOne({
        email,
      });
      if (!user) {
        console.log("no user");
        return done(null, false);
      }
      if (!Users.comparePassword(user, password)) {
        console.log("bad password");
        return done(null, false);
      }
      console.log("success", user);
      return done(null, user);
    } catch (err) {
      console.log("err", err);
      return done(err);
    }
  });
}
