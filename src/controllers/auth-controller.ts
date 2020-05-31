import passport from "passport";
//import _ from "lodash";
import { Express, Response, Request } from "express";
import { env } from "../env";
import authenticationMiddleware from "../middlewares/authentication-middleware";

export function routes(app: Express) {
  //app.get("/login", loginHandler);
  app.get("/auth/logout", logoutHandler);
  app.get("/auth", authenticationMiddleware, handler);

  app.post("/api/auth/local", (req, res, next) => {
    console.log(req.query, req.body);
    passport.authenticate("local", (err, user, info) => {
      //console.log("auth", err, info);
      if (err) {
        //console.log(err);
        return next(err);
      }
      if (!user) {
        return res.redirect("/login");
      }
      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }
        return res.redirect("/api/user/" + user.id);
      });
    })(req, res, next);
  });

  app.get(
    "/auth/facebook",
    passport.authenticate("facebook", { scope: ["email", "public_profile"] })
  );

  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook", { failureRedirect: "/login" }),
    authFacebookCallbackHandler
  );

  app.get(
    "/auth/goodreads",
    passport.authenticate("goodreads", { scope: ["email", "public_profile"] })
  );

  app.get(
    "/auth/goodreads/callback",
    passport.authenticate("goodreads", { failureRedirect: "/login" }),
    authFacebookCallbackHandler
  );
}

async function handler(req: any, res: Response) {
  //const { query } = req;
  console.log(req.user);
  const html = env.html.replace("//HERE//", `page='${req.path}';`);
  //   res.send(html);
  return res.send(html);
}

async function logoutHandler(req: any, res: Response) {
  req.logout();
  req.session.destroy((err) => {
    if (err)
      console.log("Error : Failed to destroy the session during logout.", err);
    req.user = null;
    //return res.send({ msg: "logged out" });
    return res.redirect("/");
  });
}
// async function loginHandler(req: any, res: Response) {
//   //const { query } = req;
//   console.log(req.user);
//   return res.send("login");
//   //return RenderReact("", res, {});
// }

// async function authFacebookHandler(req: Request, res: Response) {
//   return passport.authenticate("facebook");
// }

async function authFacebookCallbackHandler(req: Request, res: Response) {
  console.log("success");
  return res.redirect("/");
}
