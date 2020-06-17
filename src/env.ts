const dotenv = require("dotenv");
import * as path from "path";
import fs from "fs";
import assign from "lodash/assign";
import * as pkg from "../package.json";
import {
  getOsEnv,
  getOsEnvOptional,
  getOsPath,
  getOsPaths,
  normalizePort,
  toBool,
  toNumber,
} from "./lib/env";

type $ENV = {
  node: string;
  isProduction: boolean;
  isTest: boolean;
  isDevelopment: boolean;
  KNEX_DEBUG: string;
  app: {
    name: string;
    version: string;
    description: string;
    host: string;
    schema: string;
    routePrefix: string;
    port: string | number | boolean;
    banner: boolean;
    dirs: {
      controllers: string;
      middlewares: string;
    };
  };
  log: {
    level: string;
    json: boolean;
    output: string;
  };
  db: { connection: string };
  monitor: {
    enabled: boolean;
    route: string;
    username: string;
    password: string;
  };
  oauth: {
    facebook: {
      enabled: boolean;
      clientId: string;
      clientSecret: string;
      callBack: string;
    };
    goodreads: {
      enabled: boolean;
      appKey: string;
      appSecret: string;
      callBack: string;
    };
    google: {
      enabled: boolean;
      clientId: string;
      clientSecret: string;
      callBack: string;
    };
  };
};

/**
 * Environment variables
 */
//let env: $ENV;

//function initEnv(): $ENV {
/**
 * Load .env file or for tests the .env.test file.
 */
const envPath = path.join(
  process.cwd(),
  `.env${process.env.NODE_ENV === "test" ? ".test" : ""}`
);

if (process.env.NODE_ENV !== "development") {
  dotenv.config({
    path: envPath,
  });
} else {
  dotenv.config();
}

const html = fs.readFileSync(
  path.join(__dirname, "../public/index.html"),
  "utf8"
);

//console.log(result.parsed);

//console.log(process.env.KNEX_DEBUG);
const env = {
  node: process.env.NODE_ENV || "development",
  isProduction: process.env.NODE_ENV === "production",
  isTest: process.env.NODE_ENV === "test",
  isDevelopment: process.env.NODE_ENV === "development",
  KNEX_DEBUG: getOsEnv("KNEX_DEBUG"),
  app: {
    name: getOsEnv("APP_NAME"),
    version: (pkg as any).version,
    description: (pkg as any).description,
    host: getOsEnv("APP_HOST"),
    schema: getOsEnv("APP_SCHEMA"),
    routePrefix: getOsEnv("APP_ROUTE_PREFIX"),
    port: normalizePort(process.env.PORT || getOsEnv("APP_PORT")),
    banner: toBool(getOsEnv("APP_BANNER")),
    dirs: {
      // migrations: getOsPaths("TYPEORM_MIGRATIONS"),
      // migrationsDir: getOsPath("TYPEORM_MIGRATIONS_DIR"),
      // entities: getOsPaths("TYPEORM_ENTITIES"),
      // entitiesDir: getOsPath("TYPEORM_ENTITIES_DIR"),
      controllers: getOsPath("CONTROLLERS"),
      middlewares: getOsPath("MIDDLEWARES"),
    },
  },
  log: {
    level: getOsEnv("LOG_LEVEL"),
    json: toBool(getOsEnvOptional("LOG_JSON")),
    output: getOsEnv("LOG_OUTPUT"),
  },
  db: {
    connection: getOsEnv("DATABASE_URL"),
  },
  monitor: {
    enabled: toBool(getOsEnv("MONITOR_ENABLED")),
    route: getOsEnv("MONITOR_ROUTE"),
    username: getOsEnv("MONITOR_USERNAME"),
    password: getOsEnv("MONITOR_PASSWORD"),
  },
  oauth: {
    facebook: {
      enabled: toBool(getOsEnv("FACEBOOK_ENABLED")),
      clientId: getOsEnv("FACEBOOK_ID"),
      clientSecret: getOsEnv("FACEBOOK_SECRET"),
      callBack: getOsEnv("FACEBOOK_CALLBACK") || "/auth/facebook/callback",
    },
    google: {
      enabled: toBool(getOsEnv("GOOGLE_ENABLED")),
      clientId: getOsEnv("GOOGLE_ID"),
      clientSecret: getOsEnv("GOOGLE_SECRET"),
      callBack: getOsEnv("GOOGLE_CALLBACK") || "/auth/google/callback",
    },
    goodreads: {
      enabled: toBool(getOsEnv("GOODREADS_ENABLED")),
      appKey: getOsEnv("GOODREADS_KEY"),
      appSecret: getOsEnv("GOODREADS_SECRET"),
      callBack: getOsEnv("GOODREADS_CALLBACK") || "/auth/goodreads/callback",
    },
  },
  html,
};

export { env };
