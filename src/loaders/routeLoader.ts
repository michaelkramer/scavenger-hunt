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
    // [END routes]
  }
};

export default routeLoader;
