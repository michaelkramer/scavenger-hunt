import * as express from "express";
import { MicroframeworkLoader, MicroframeworkSettings } from "microframework";
import Backpack from "@michaelkramer/backpack";
import * as path from "path";
import favicon from "serve-favicon";
import { env } from "../env";

const log = new Backpack.Logger(__filename);

const publicLoader: MicroframeworkLoader = (
  settings: MicroframeworkSettings | undefined
) => {
  if (settings) {
    const expressApp = settings.getData("express_app");
    //log.info("Public Loader");
    expressApp
      // Serve static files like images from the public folder
      .use(
        express.static(path.join(__dirname, "../../", "public"), {
          //maxAge: 31557600000,
        })
      );
    // A favicon is a visual cue that client software, like browsers, use to identify a site
    expressApp.use(
      favicon(path.join(__dirname, "../../", "public", "favicon.ico"))
    );
  }
};

export default publicLoader;
