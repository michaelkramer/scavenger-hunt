import { bootstrapMicroframework } from "microframework";
import Backpack from "@michaelkramer/backpack";
import { banner } from "./lib/banner";
import expressLoader from "./loaders/express-loader";
import expressSessionLoader from "./loaders/express-session-loader";
import monitorLoader from "./loaders/monitor-loader";
import publicLoader from "./loaders/public-loader";
import routeLoader from "./loaders/route-loader";
import passportLoader from "./loaders/passport-loader";
import bodyParserLoader from "./loaders/body-parser-loader";
const log = new Backpack.Logger(__filename);

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
      // expressAPILoader,
      expressSessionLoader,
      bodyParserLoader,
      passportLoader,
      // //swaggerLoader,
      monitorLoader,
      routeLoader,
      publicLoader,
    ],
  })
    .then(() => banner(log))
    .catch((error) => log.error("Application is crashed: " + error));
}
