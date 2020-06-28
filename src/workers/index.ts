import Backpack from "@michaelkramer/backpack";
import chalk from "chalk";
import ImportIntoTags from "./import-into-tags";

const log = new Backpack.Logger(__filename);

export default function startWorkerServer() {
  try {
    log.info(chalk.blue("Hi I'm the worker server"));
    ImportIntoTags.run();
  } catch (error) {
    console.log(error);
  }
}
