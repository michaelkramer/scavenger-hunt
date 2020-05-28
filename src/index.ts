import Backpack from "@michaelkramer/backpack";
import { env } from "./env";
import appServer from "./appServer";
import program from "commander";

const log = new Backpack.Logger(__filename);

program
  .command("web")
  .description("start a web server")
  .action(async () => await appServer());

(async () => {
  try {
    console.log(env.db.connection);
    Backpack.init({ db: { mk: { connection: env.db.connection } } });
    const i = Backpack.db.mk.raw("select srid from spatial_ref_sys limit 1");

    i.then((x) => log.error(JSON.stringify(x)));
  } catch (e) {
    log.error(e);
    log.error("Failed to load app config.  Exiting.");
    process.exit(1);
  }
  //appServer();
  program.parse(process.argv);
  if (!process.argv.slice(2).length) {
    program.outputHelp();
    process.exit(1);
  }
})();
