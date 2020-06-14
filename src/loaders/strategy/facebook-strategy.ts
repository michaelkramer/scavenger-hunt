import { Strategy as FacebookStrategy } from "passport-facebook";
import Backpack from "@michaelkramer/backpack";
import { env } from "../../env";
import oauthSubmitUser from "./oauth-submit-user";

const log = new Backpack.Logger(__filename);

export default function facebook() {
  return new FacebookStrategy(
    {
      clientID: env.oauth.facebook.clientId,
      clientSecret: env.oauth.facebook.clientSecret,
      callbackURL: "/auth/facebook/callback",
      profileFields: ["name", "email", "picture"],
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      return oauthSubmitUser(
        {
          user: req.user,
          oauthProvider: "facebook",
          accessToken,
          refreshToken,
          profile: {
            id: profile.id,
            email: profile._json.email,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            picture: profile.picture.data.url,
          },
        },
        done
      );
    }
  );
}
