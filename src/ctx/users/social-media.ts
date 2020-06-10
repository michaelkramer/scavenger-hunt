import { Facebook } from "fb";
import Backpack from "@michaelkramer/backpack";
import Users from "models/Users";
import { $FacebookData } from "../../types";
import { env } from "../../env";

const log = new Backpack.Logger(__filename);

const SocialMedia = {
  facebook: {
    fetchProfile: async (user: Users) => {
      const facebookOauth = user.userOauths.find(
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
          console.log("request timeout");
        } else {
          log.error("FB Error", result);
        }
      }
      return result;
    },
  },
};

export default SocialMedia;
