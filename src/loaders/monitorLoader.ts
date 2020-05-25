import basicAuth from "express-basic-auth";
import monitor from "express-status-monitor";
import { MicroframeworkLoader, MicroframeworkSettings } from "microframework";

import { env } from "../env";

const monitorLoader: MicroframeworkLoader = (
  settings: MicroframeworkSettings | undefined
) => {
  if (settings && env.monitor.enabled) {
    const expressApp = settings.getData("express_app");
    expressApp.use(monitor());
    expressApp.get(
      env.monitor.route,
      env.monitor.username
        ? basicAuth({
            users: {
              [`${env.monitor.username}`]: env.monitor.password,
            },
            challenge: true,
          })
        : (req, res, next) => next(),
      monitor().pageRoute
    );
  }
};

export default monitorLoader;
