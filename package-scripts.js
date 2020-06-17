const { series, rimraf } = require("nps-utils");
const { description } = require("commander");
module.exports = {
  scripts: {
    default: "nps start",
    /**
     * Serves the current app and watches for changes to restart it
     */
    start: {
      script: series(
        //"nps banner.start",
        "webpack",
        "nps transpile",
        "nodemon ./dist/src/index.js web"
        // "concurrently -c 'bgBlue.bold,bgMagenta.bold' -n 'webpack,server' 'webpack --watch' 'nodemon --watch src --watch .env'",
      ),
      description:
        "Serves the current app and watches for changes to restart it",
    },
    serve: {
      // inspector: {
      //   script: series(
      //     "nps banner.serve",
      //     //"nodemon --watch src --watch .env --inspect",
      //     "concurrently -c 'bgBlue.bold,bgMagenta.bold' -n 'webpack,server' 'webpack --watch' 'nodemon --watch src --watch .env --inspect'",
      //   ),
      //   description:
      //     "Serves the current app and watches for changes to restart it, you may attach inspector to it.",
      // },
      script: series(
        "nps banner.serve",
        "nps webpack",
        `nodemon ./src/index.ts web`,
        // "concurrently -c 'bgBlue.bold,bgMagenta.bold' -n 'webpack,server' 'webpack --watch' 'nodemon --watch src --watch .env'",
      ),
      description:
        "For Back End Developing. Serves the current app and watches for changes to restart it",
    },
    developing: {
      script: series(
        "concurrently -c 'bgBlue.bold,bgMagenta.bold' -n 'webpack,server' 'webpack --watch --info-verbosity verbose' 'nodemon ./src/index.ts web'"),
        description: "For Front or Back End Developing. Serves the current app and watches for changes to restart it"
    },
    webpack: {
      script: series("nps banner.webpack",
      `concurrently -c 'bgBlue.bold,bgMagenta.bold' -n 'webpack,server' 'webpack --watch --info-verbosity verbose' '${runFast("./src/index.ts web")}'`
      ),
      description: "For Front End Developing. Serves the current app and watches for changes to restart it"
      //, "webpack --watch --info-verbosity verbose"),
    },
    build: {
      script: series("nps banner.build","nps transpile")
    },
    clean: {
      default: {
        script: series(`nps banner.clean`, `nps clean.dist`),
        description: "Deletes the ./dist folder",
      },
      dist: {
        script: rimraf("./dist"),
        hiddenFromHelp: true,
      },
    },
    db: {
      scripts: "use `knex migrate:make migration_name -x ts`"
    },
    /**
     * Transpile your app into javascript
     */
    transpile: {
      script: `tsc --project ./tsconfig.json`,
      hiddenFromHelp: true,
    },
    lint: {
      script: eslint(`./src/**/*.ts`),
      hiddenFromHelp: true,
    },
    /**
     * This creates pretty banner to the terminal
     */
    banner: {
      build: banner("build"),
      start: banner("start"),
      eval: banner("emulators"),
      serve: banner("serve"),
      testUnit: banner("test.unit"),
      testIntegration: banner("test.integration"),
      testE2E: banner("test.e2e"),
      migrate: banner("migrate"),
      seed: banner("seed"),
      revert: banner("revert"),
      clean: banner("clean"),
      generate: banner("db.generate"),
      new: banner("db.new"),
      webpack: banner("webpack"),
    },
  }
};

function runFast(path) {
  return `ts-node --transpile-only ${path}`;
}

function banner(name) {
  return {
    hiddenFromHelp: true,
    silent: true,
    description: `Shows ${name} banners to the console`,
    script: runFast(`./scripts/banner.ts ${name}`),
  };
}

function eslint(path) {
  return `eslint ${path} --format stylish`;
}
