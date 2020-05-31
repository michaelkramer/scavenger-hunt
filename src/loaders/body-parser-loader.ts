import { MicroframeworkLoader, MicroframeworkSettings } from "microframework";
import Backpack from "@michaelkramer/backpack";
import bodyParser from "body-parser";

const log = new Backpack.Logger(__filename);

const bodyParserLoader: MicroframeworkLoader = (
  settings: MicroframeworkSettings | undefined
) => {
  if (settings) {
    const expressApp = settings.getData("express_app");

    expressApp.use(bodyParser.json());
    expressApp.use(bodyParser.urlencoded());
  }
};

export default bodyParserLoader;
