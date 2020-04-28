import path from "path";
import FireAdmin from "firebase-admin";
import RenderReact from "../lib/render-react";

import { Express, Response, Request } from "express";
import { Query } from "express-serve-static-core";

export function routes(app: Express) {
  app.get("/", handler);
  app.get("/testme", testHandler);
}

function handler(req: Request, res: Response) {
  const { query } = req;
  return RenderReact("", res, { name: "john" });
}

function testHandler(req: Request, res: Response) {
  if (!FireAdmin.apps.length) {
    FireAdmin.initializeApp();
  }

  let db = FireAdmin.firestore();
  const collRef = db.collection("users");

  const userRef = db
    .collection("users")
    .add({
      fullname: "John",
      email: "john@hop.com",
    })
    .then((doc) => {
      // if (doc.exists) {
      //return res.status(200).send("here");
      // } else {
      //  return res.status(400).json({"message":"User ID not found."});
    })
    .catch((error) => {
      return res
        .status(400)
        .json({ message: "Unable to connect to Firestore." });
    });
  //return res.send(userRef);
  // console.log("==>", collRef);
  collRef
    .get()
    .then((snapshot) => {
      if (snapshot.empty) {
        return res.send("No data");
      }

      snapshot.forEach((doc) => {
        return res.send(doc.data());
      });
      return res.send("No need to seed");
    })
    .catch((err) => {
      console.log("Error getting documents", err);
    });
  // console.log("==>", userRef);
  // const users = userRef.docs.map((doc) => {
  //   return doc.data();
  // });
  // return res.send(users);
  // FireAdmin.auth()
  //   .getUser(uid)
  //   .then(function (userRecord) {
  //     // See the UserRecord reference doc for the contents of userRecord.
  //     console.log("Successfully fetched user data:", userRecord.toJSON());
  //   })
  //   .catch(function (error) {
  //     console.log("Error fetching user data:", error);
  //   });
}

const j = (t: Query) => {
  console.log(t);
  return "absyyyy";
};

const jj = function () {
  return "abs";
};
