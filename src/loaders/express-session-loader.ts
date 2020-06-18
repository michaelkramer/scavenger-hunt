import { MicroframeworkLoader, MicroframeworkSettings } from "microframework";
const session = require("cookie-session");

const expressSessionLoader: MicroframeworkLoader = (
  settings: MicroframeworkSettings | undefined
) => {
  if (settings) {
    const expressApp = settings.getData("express_app");

    // express session middleware setup
    expressApp.use(
      session({
        secret: "W$q4=25*8%v-}UV",
        resave: true,
        saveUninitialized: true,
      })
    );
  }
};

export default expressSessionLoader;
