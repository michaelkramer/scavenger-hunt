import { Facebook } from "fb";
import { google } from "googleapis";
import Backpack from "@michaelkramer/backpack";
import Users from "models/Users";
import { $FacebookData } from "../../types";
import { env } from "../../env";

const log = new Backpack.Logger(__filename);

const SocialMedia = {
  facebook: {
    fetchProfile: async (user: Users) => {
      const facebookOauth = await user.userOauths.find(
        (u) => u.oauthProvider === "facebook"
      );
      const fb = new Facebook({
        accessToken: facebookOauth.acccessToken,
        appId: env.oauth.facebook.clientId,
        appSecret: env.oauth.facebook.clientSecret,
      });
      const result: $FacebookData = await fb.api(
        "/me?fields=picture,email,name"
      );
      if (result && result.error) {
        if (result.error.code === "ETIMEDOUT") {
          log.info("request timeout");
        } else {
          log.error("FB Error", result);
        }
      }
      return result;
    },
    picturePath: "picture.data.url",
  },
  google: {
    fetchProfile: async (user: Users) => {
      const googleOauth = await user.userOauths.find(
        (u) => u.oauthProvider === "google"
      );

      const oauth2Client = new google.auth.OAuth2(
        env.oauth.google.clientId,
        env.oauth.google.clientSecret,
        "/auth/google/callback"
      );
      oauth2Client.setCredentials({ access_token: googleOauth.acccessToken });
      var oauth2 = google.oauth2({
        auth: oauth2Client,
        version: "v2",
      });
      const result = (await oauth2.userinfo.get()).data;
      return result;
    },
    picturePath: "picture",
  },
};

export default SocialMedia;
