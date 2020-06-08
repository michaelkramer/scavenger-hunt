import Backpack from "@michaelkramer/backpack";
import UserOauth from "../models/User-Oauth";
import { env } from "../env";
const log = new Backpack.Logger(__filename);

export function routes(app: any) {
  //console.log("some");
  app.get("/t", (req, res) => {
    log.info(`route t ${env.app.name} end`);
    const date = new Date();
    const hours = (date.getHours() % 12) + 1; // London is UTC + 1hr;
    res.send(`
      <!doctype html>
      <head>
        <title>Time</title>
        <link rel="stylesheet" href="/style.css">
        <script src="/script.js"></script>
      </head>
      <body>
        <p>In London, the clock strikes:
          <span id="bongs">${"BONG ".repeat(hours)}</span></p>
        <button onClick="refresh(this)">Refresh</button>
      </body>
    </html>`);
  });

  app.get("/api", (req, res) => {
    log.info(`route api ${env.app.name} end`);
    const date = new Date();
    const hours = (date.getHours() % 12) + 1; // London is UTC + 1hr;
    res.json({ bongs: "BONG ".repeat(hours) });
  });
  app.get("/in", handler);
}
async function handler(req: any, res: any) {
  //const { query } = req;
  const userOauth = await UserOauth.query()
    .findOne({
      oauthProvider: "facebook",
      providerId: "10223137320487636",
    })
    .withGraphJoined("user");
  return res.send({ userOauth });
}
