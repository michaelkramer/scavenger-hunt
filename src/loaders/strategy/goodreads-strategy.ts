import { Strategy as GoodReadsStrategy } from "passport-goodreads";
import Backpack from "@michaelkramer/backpack";
import { env } from "../../env";
import oauthSubmitUser from "./oauth-submit-user";

const log = new Backpack.Logger(__filename);

export default function goodreads() {
  return new GoodReadsStrategy(
    {
      consumerKey: env.oauth.goodreads.appKey,
      consumerSecret: env.oauth.goodreads.appSecret,
      callbackURL: "/auth/goodreads/callback",
      profileFields: ["name", "email"],
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      //console.log("==> profile", JSON.stringify(profile, null, "\t"));

      const { displayName } = profile;
      const { firstName, lastName } = Backpack.splitFullName(displayName);

      return oauthSubmitUser(
        {
          user: req.user,
          oauthProvider: "goodreads",
          accessToken,
          refreshToken,
          profile: {
            id: profile.id,
            firstName,
            lastName,
          },
        },
        done
      );
    }
  );
}
