import glob from "glob";
import path from "path";
import _ from "lodash";

import { MicroframeworkLoader, MicroframeworkSettings } from "microframework";

import { env } from "../env";
const routeLoader: MicroframeworkLoader = (
  settings: MicroframeworkSettings | undefined
) => {
  if (settings) {
    const expressApp = settings.getData("express_app");
    // [START routes]
    const filePattern: string = path.resolve(env.app.dirs.controllers);
    glob(filePattern, (err, files) => {
      files.forEach((file) => {
        const controller = require(file);
        if (_.isFunction(controller.routes)) {
          controller.routes(expressApp);
        }
      });
    });
    expressApp.get("*", (req, res, next) => {
      const routePaths = [
        "/api",
        "/assets",
        "/favicon",
        "/android-chrome",
        "/apple-touch",
        "/auth",
      ];

      if (!_.find(routePaths, (route) => req.path.includes(route))) {
        const html = env.html.replace("//HERE//", `page='${req.path}';`);
        return res.send(html);
      }
      return next();
    });
    // Landing page

    // [END routes]
  }
};

export default routeLoader;
