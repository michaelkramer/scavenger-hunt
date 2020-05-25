import chalk from "chalk";
import * as figlet from "figlet";

figlet.text(process.argv[2], (error: any, data: any) => {
  if (error) {
    return process.exit(1);
  }
  // eslint-disable-next-line no-console
  console.log(chalk.blue(data));
  // eslint-disable-next-line no-console
  console.log("");
  return process.exit(0);
});
