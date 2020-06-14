import { Strategy as LocalStrategy } from "passport-local";
import Backpack from "@michaelkramer/backpack";
import Users from "../../models/Users";

const log = new Backpack.Logger(__filename);

export default function local() {
  return new LocalStrategy(async (username, password, done) => {
    try {
      const email = username;
      const user = await Users.query().findOne({
        email,
      });
      if (!user) {
        return done(null, false);
      }
      if (!Users.comparePassword(user, password)) {
        return done(null, false);
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  });
}
