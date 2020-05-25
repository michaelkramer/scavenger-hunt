import * as dotenv from "dotenv";
import * as path from "path";

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

/**
 * Load .env file or for tests the .env.test file.
 */
dotenv.config({
  path: path.join(
    process.cwd(),
    `.env${process.env.NODE_ENV === "test" ? ".test" : ""}`
  ),
});

/**
 * Environment variables
 */
export const env = {
  node: process.env.NODE_ENV || "development",
  isProduction: process.env.NODE_ENV === "production",
  isTest: process.env.NODE_ENV === "test",
  isDevelopment: process.env.NODE_ENV === "development",
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
    type: getOsEnv("TYPEORM_CONNECTION"),
    host: getOsEnvOptional("TYPEORM_HOST"),
    port: toNumber(getOsEnvOptional("TYPEORM_PORT")),
    username: getOsEnvOptional("TYPEORM_USERNAME"),
    password: getOsEnvOptional("TYPEORM_PASSWORD"),
    database: getOsEnv("TYPEORM_DATABASE"),
    synchronize: toBool(getOsEnvOptional("TYPEORM_SYNCHRONIZE")),
    logging: getOsEnv("TYPEORM_LOGGING"),
  },
  monitor: {
    enabled: toBool(getOsEnv("MONITOR_ENABLED")),
    route: getOsEnv("MONITOR_ROUTE"),
    username: getOsEnv("MONITOR_USERNAME"),
    password: getOsEnv("MONITOR_PASSWORD"),
  },
  oauth: {
    facebook: {
      clientId: getOsEnv("FACEBOOK_ID"),
      clientSecret: getOsEnv("FACEBOOK_SECRET"),
    },
    goodreads: {
      appKey: getOsEnv("GOODREADS_KEY"),
      appSecret: getOsEnv("GOODREADS_SECRET"),
    },
  },
};
