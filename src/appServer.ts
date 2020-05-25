import { bootstrapMicroframework } from "microframework";
import { Logger } from "./lib/logger";
import { banner } from "./lib/banner";

import expressLoader from "./loaders/expressLoader";
import expressSessionLoader from "./loaders/expressSessionLoader";
import monitorLoader from "./loaders/monitorLoader";
import publicLoader from "./loaders/publicLoader";
import routeLoader from "./loaders/routeLoader";

import _ from "lodash";

const log = new Logger(__filename);
console.log("fileName: ", __filename);

//let expressApp;

export default function appServer() {
  bootstrapMicroframework({
    /**
     * Loader is a place where you can configure all your modules during microframework
     * bootstrap process. All loaders are executed one by one in a sequential order.
     */
    loaders: [
      expressLoader,
      // winstonLoader,
      // iocLoader,
      // eventDispatchLoader,
      // typeormLoader,
      // expressAPILoader,
      expressSessionLoader,
      // passportLoader,
      // //swaggerLoader,
      monitorLoader,
      routeLoader,
      publicLoader,
    ],
  })
    .then(() => banner(log))
    .catch((error) => log.error("Application is crashed: " + error));
}
