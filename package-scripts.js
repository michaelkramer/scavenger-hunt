const { series, rimraf } = require("nps-utils");
module.exports = {
  scripts: {
    default: "nps start",
    /**
     * Serves the current app and watches for changes to restart it
     */
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
        "webpack",
        `nodemon ./src/index.ts web`,
        // "concurrently -c 'bgBlue.bold,bgMagenta.bold' -n 'webpack,server' 'webpack --watch' 'nodemon --watch src --watch .env'",
      ),
      description:
        "Serves the current app and watches for changes to restart it",
    },
    webpack: {
      script: series("nps banner.webpack", "webpack --watch"),
    },
    build: {
      script: series("nps banner.build",'nps transpile')
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
    /**
     * Transpile your app into javascript
     */
    transpile: {
      script: `tsc --project ./tsconfig.json`,
      hiddenFromHelp: true,
    },
    // serve: 'nps "build firebase emulators:start --only functions"',
    // shell: 'nps "build firebase functions:shell"',
    // default: 'nps shell',
    // deploy: 'firebase deploy --only functions',
    // logs: 'firebase functions:log'
    /**
     * This creates pretty banner to the terminal
     */
    banner: {
      build: banner("build"),
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
