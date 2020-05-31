import Backpack from "@michaelkramer/backpack";
import { knexSnakeCaseMappers, Model } from "objection";
import { env } from "./env";
import appServer from "./app-server";
import program from "commander";
import Users from "./models/Users";
import UserOauth from "./models/User-Oauth";

const log = new Backpack.Logger(__filename);

program
  .command("web")
  .description("start a web server")
  .action(async () => await appServer());

(async () => {
  try {
    //console.log(env.db.connection);
    Backpack.init({
      db: { mk: { connection: env.db.connection, ...knexSnakeCaseMappers() } },
    });

    Model.knex(Backpack.db.mk);

    // const i = Backpack.db.mk.raw("select srid from spatial_ref_sys limit 1");

    // i.then((x) => log.error(JSON.stringify(x)));

    //const me = Users.query().findById(1); //.query().where("firstName", "Mike");

    // const all = await UserOauth.query()
    //   //.relatedQuery("user")
    //   //.joinRelated("user")
    //   // .joinRelated("userOauths", {
    //   //   alias: "uo",
    //   // })
    //   .first()
    //   .for(me)
    //   // .column(["*"]);
    //   .withGraphJoined("user");
    // log.info("all", JSON.stringify(all));
    // log.info("user", JSON.stringify(all.user));

    //await Users.query().where({ id: 1 }).update({ firstName: "Michael" });
    // const you = await Users.query().findById(1).withGraphJoined("userOauths");

    // log.info("you", JSON.stringify(you));
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
