import Backpack from "@michaelkramer/backpack";
import Ebay from "ebay-node-api";
import _ from "lodash";
import authenticationMiddleware from "../middlewares/authentication-middleware";
import { env } from "../env";

const log = new Backpack.Logger(__filename);

export function routes(app: any) {
  app.get("/api/ebay-search", authenticationMiddleware, searchHandler); //authenticationMiddleware
}

async function searchHandler(req, res) {
  const { keywords } = req.query;
  try {
    let ebay = new Ebay({
      clientID: env.oauth.ebay.clientId,
      clientSecret: env.oauth.ebay.clientSecret,
      // baseUrl: "api.ebay.com",
      // baseSvcUrl: "svcs.ebay.com",
      // oauthEndpoint: "https://auth.ebay.com/oauth2/authorize",
      // globalID: "EBAY-US",
      //env: "Sandbox",
      body: {
        grant_type: "client_credentials",
        //you may need to define the oauth scope
        scope: "https://api.ebay.com/oauth/api_scope",
      },
    });
    // let redata = {};
    // ebay.getAccessToken().then(
    //   (data) => {
    //     redata = data;
    //     console.log(data); // data.access_token
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    //const data = await ebay.getAccessToken();
    // .then(
    //   (data) => {
    //     console.log(data); // data.access_token
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );

    const items = await ebay.findItemsByKeywords(keywords || "iphone");

    return res.send({ items });
  } catch (error) {
    return res.send(error);
  }
}
