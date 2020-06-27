import Backpack from "@michaelkramer/backpack";
import { knexSnakeCaseMappers, Model } from "objection";
import { env } from "./env";
import appServer from "./app-server";
import program from "commander";
import startWorkerServer from "./workers";

const log = new Backpack.Logger(__filename);

program
  .command("web")
  .description("start a web server")
  .action(async () => await appServer());

program
  .command("worker")
  .description("start workers server")
  .action(async () => {
    console.log("starting");
    await startWorkerServer();
  });

(async () => {
  try {
    Backpack.init({
      db: { mk: { connection: env.db.connection, ...knexSnakeCaseMappers() } },
    });

    Model.knex(Backpack.db.mk);
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
