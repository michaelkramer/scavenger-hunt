import _ from "lodash";
import path from "path";
import * as functions from "firebase-functions";
import glob from "glob";

import express, { Express } from "express";

const app: Express = express();

// [START middleware]
const cors = require("cors")({ origin: true });
app.use(cors);
// [END middleware]

// [START routes]
const filePattern: string = path.resolve(
  "lib/web/{controllers,api/controllers}/**/*.{ts,js}",
);
glob(filePattern, (err, files) => {
  files.forEach((file) => {
    const controller = require(file);
    if (_.isFunction(controller.routes)) {
      controller.routes(app);
    }
  });
});
// [END routes]

// [START export]
// Export the express app as an HTTP Cloud Function
export const start = functions.https.onRequest(app);
// [END export]
