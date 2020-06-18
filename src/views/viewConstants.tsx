/**
 * ***************************
 * * These are constants used with in the view pages
 * ***************************
 */

const OAUTH_PROVIDERS = window["oauthProviders"];

const localOauthLogins = [];
const avatarImportProviders = [];
if (OAUTH_PROVIDERS.includes("facebook")) {
  localOauthLogins.push({ name: "facebook", path: "/auth/facebook" });
  avatarImportProviders.push("facebook");
}

if (OAUTH_PROVIDERS.includes("google")) {
  localOauthLogins.push({ name: "google", path: "/auth/google" });
  avatarImportProviders.push("google");
}

export const USER_PATH = "/api/user";
export const LOGOUT_PATH = "/auth/logout";

export const AVATAR_IMPORT_PROVIDERS = avatarImportProviders;

export const LOCAL_OAUTH_PATH = "/api/auth/local";

export const OAUTH_LOGINS = localOauthLogins;

function toBool(value: string): boolean {
  return value === "true";
}
