import Backpack from "@michaelkramer/backpack";
import Users from "../../models/Users";
import UserOauth from "../../models/User-Oauth";

const log = new Backpack.Logger(__filename);

export interface $OauthSubmitUserPayload {
  user: { id: number };
  oauthProvider: string;
  accessToken: string;
  refreshToken?: string;
  profile: {
    id: string;
    firstName?: string;
    lastName?: string;
    email?: string;
  };
}

export default async function oauthSubmitUser(
  payload: $OauthSubmitUserPayload,
  done: Function
) {
  const profile = payload.profile;
  /**
   * There is a session user
   */
  if (payload.user) {
    const userOauth = await UserOauth.query()
      .findOne({
        oauthProvider: payload.oauthProvider,
        providerId: profile.id,
      })
      .withGraphJoined("user");
    /**
     * There is a session user but it does not match the providerId
     */
    if (userOauth.userId !== payload.user.id) {
      return done(
        new Error(
          `There is already a ${payload.oauthProvider} account that belongs to you. Sign in with that account or delete it, then link it with your current account.`
        )
      );
    }
    /**
     * There is a session user and we need to update the access/refresh token. Just to be sure
     */
    userOauth.acccessToken = payload.accessToken;
    await UserOauth.query().findById(userOauth.id).patch(userOauth);
    const existingUserLoggedIn = userOauth.user;
    return done(null, existingUserLoggedIn);
  } else {
    /**
     * There is no session user
     */
    const userOauth = await UserOauth.query()
      .where({
        oauthProvider: payload.oauthProvider,
        providerId: profile.id,
      })
      .first()
      .withGraphJoined("user");
    /**
     * The user associated with the provider id matched a user
     */
    if (userOauth && userOauth.user) {
      const foundUser = userOauth.user;
      return done(null, foundUser);
    }

    /**
     * The provider id did not match a user so lets look at the email address
     */
    const existingUser = await Users.query().findOne({
      email: profile.email,
    });
    if (existingUser) {
      const newUserOauth = new UserOauth();
      newUserOauth.oauthProvider = payload.oauthProvider;
      newUserOauth.providerId = profile.id;
      newUserOauth.acccessToken = payload.accessToken;
      newUserOauth.refreshToken = payload.refreshToken;
      newUserOauth.expiryDate = new Date();
      if (existingUser.id) {
        newUserOauth.userId = existingUser.id;
        await UserOauth.query().insert(newUserOauth);
      }
      return done(null, existingUser);
    }

    /**
     * Create a new user
     */
    const newUser = new Users();
    newUser.email = profile.email;
    newUser.firstName = profile.firstName;
    newUser.lastName = profile.lastName;

    const newUserOauth = new UserOauth();
    newUserOauth.oauthProvider = payload.oauthProvider;
    newUserOauth.providerId = profile.id;
    newUserOauth.acccessToken = payload.accessToken;
    newUserOauth.refreshToken = payload.refreshToken;
    newUserOauth.expiryDate = new Date();

    const user = await Users.query().insert(newUser);
    if (user.id) {
      newUserOauth.userId = user.id;
      await UserOauth.query().insert(newUserOauth);
    }
    return done(null, user);
  }
}
