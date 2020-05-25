import express from "express";
import { MicroframeworkLoader, MicroframeworkSettings } from "microframework";
import { env } from "../env";

const expressLoader: MicroframeworkLoader = (
  settings: MicroframeworkSettings | undefined
) => {
  if (settings) {
    const expressApp = express();
    const cors = require("cors")({ origin: true });
    expressApp.use(cors);

    // if (!env.isTest) {
    //   const server = expressApp.listen(env.app.port);
    //   settings.setData("express_server", server);
    // }

    // Here we can set the data for other loaders
    const server = expressApp.listen(env.app.port);
    settings.setData("express_server", server);
    settings.setData("express_app", expressApp);
  }
};

export default expressLoader;
