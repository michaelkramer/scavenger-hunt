"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = routes;

var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));

var _renderReact = _interopRequireDefault(require("../lib/render-react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function routes(app) {
  app.get("/", handler);
  app.get("/testme", testHandler);
}

function handler(req, res) {
  const {
    query
  } = req;
  console.log("==>testNice mn");
  return (0, _renderReact.default)("", res, {});
}

function testHandler(req, res) {
  if (!_firebaseAdmin.default.apps.length) {
    _firebaseAdmin.default.initializeApp();
  }

  let db = _firebaseAdmin.default.firestore();

  const collRef = db.collection("users");
  const userRef = db.collection("users").add({
    fullname: "John",
    email: "john@hop.com"
  }).then(doc => {// if (doc.exists) {
    //return res.status(200).send("here");
    // } else {
    //  return res.status(400).json({"message":"User ID not found."});
  }).catch(error => {
    return res.status(400).json({
      message: "Unable to connect to Firestore."
    });
  }); //return res.send(userRef);
  // console.log("==>", collRef);

  collRef.get().then(snapshot => {
    if (snapshot.empty) {
      return res.send("No data");
    }

    snapshot.forEach(doc => {
      return res.send(doc.data());
    });
    return res.send("No need to seed");
  }).catch(err => {
    console.log("Error getting documents", err);
  }); // console.log("==>", userRef);
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

const j = t => {
  console.log(t);
  return "absyyyy";
};

const jj = function () {
  return "abs";
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93ZWIvY29udHJvbGxlcnMvaW5kZXgudHMiXSwibmFtZXMiOlsicm91dGVzIiwiYXBwIiwiZ2V0IiwiaGFuZGxlciIsInRlc3RIYW5kbGVyIiwicmVxIiwicmVzIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiRmlyZUFkbWluIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJkYiIsImZpcmVzdG9yZSIsImNvbGxSZWYiLCJjb2xsZWN0aW9uIiwidXNlclJlZiIsImFkZCIsImZ1bGxuYW1lIiwiZW1haWwiLCJ0aGVuIiwiZG9jIiwiY2F0Y2giLCJlcnJvciIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwic25hcHNob3QiLCJlbXB0eSIsInNlbmQiLCJmb3JFYWNoIiwiZGF0YSIsImVyciIsImoiLCJ0IiwiamoiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7OztBQUtPLFNBQVNBLE1BQVQsQ0FBZ0JDLEdBQWhCLEVBQThCO0FBQ25DQSxFQUFBQSxHQUFHLENBQUNDLEdBQUosQ0FBUSxHQUFSLEVBQWFDLE9BQWI7QUFDQUYsRUFBQUEsR0FBRyxDQUFDQyxHQUFKLENBQVEsU0FBUixFQUFtQkUsV0FBbkI7QUFDRDs7QUFFRCxTQUFTRCxPQUFULENBQWlCRSxHQUFqQixFQUErQkMsR0FBL0IsRUFBOEM7QUFDNUMsUUFBTTtBQUFFQyxJQUFBQTtBQUFGLE1BQVlGLEdBQWxCO0FBQ0FHLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0FBQ0EsU0FBTywwQkFBWSxFQUFaLEVBQWdCSCxHQUFoQixFQUFxQixFQUFyQixDQUFQO0FBQ0Q7O0FBRUQsU0FBU0YsV0FBVCxDQUFxQkMsR0FBckIsRUFBbUNDLEdBQW5DLEVBQWtEO0FBQ2hELE1BQUksQ0FBQ0ksdUJBQVVDLElBQVYsQ0FBZUMsTUFBcEIsRUFBNEI7QUFDMUJGLDJCQUFVRyxhQUFWO0FBQ0Q7O0FBRUQsTUFBSUMsRUFBRSxHQUFHSix1QkFBVUssU0FBVixFQUFUOztBQUNBLFFBQU1DLE9BQU8sR0FBR0YsRUFBRSxDQUFDRyxVQUFILENBQWMsT0FBZCxDQUFoQjtBQUVBLFFBQU1DLE9BQU8sR0FBR0osRUFBRSxDQUNmRyxVQURhLENBQ0YsT0FERSxFQUViRSxHQUZhLENBRVQ7QUFDSEMsSUFBQUEsUUFBUSxFQUFFLE1BRFA7QUFFSEMsSUFBQUEsS0FBSyxFQUFFO0FBRkosR0FGUyxFQU1iQyxJQU5hLENBTVBDLEdBQUQsSUFBUyxDQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsR0FYYSxFQVliQyxLQVphLENBWU5DLEtBQUQsSUFBVztBQUNoQixXQUFPbkIsR0FBRyxDQUNQb0IsTUFESSxDQUNHLEdBREgsRUFFSkMsSUFGSSxDQUVDO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBRkQsQ0FBUDtBQUdELEdBaEJhLENBQWhCLENBUmdELENBeUJoRDtBQUNBOztBQUNBWixFQUFBQSxPQUFPLENBQ0pkLEdBREgsR0FFR29CLElBRkgsQ0FFU08sUUFBRCxJQUFjO0FBQ2xCLFFBQUlBLFFBQVEsQ0FBQ0MsS0FBYixFQUFvQjtBQUNsQixhQUFPeEIsR0FBRyxDQUFDeUIsSUFBSixDQUFTLFNBQVQsQ0FBUDtBQUNEOztBQUVERixJQUFBQSxRQUFRLENBQUNHLE9BQVQsQ0FBa0JULEdBQUQsSUFBUztBQUN4QixhQUFPakIsR0FBRyxDQUFDeUIsSUFBSixDQUFTUixHQUFHLENBQUNVLElBQUosRUFBVCxDQUFQO0FBQ0QsS0FGRDtBQUdBLFdBQU8zQixHQUFHLENBQUN5QixJQUFKLENBQVMsaUJBQVQsQ0FBUDtBQUNELEdBWEgsRUFZR1AsS0FaSCxDQVlVVSxHQUFELElBQVM7QUFDZDFCLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaLEVBQXVDeUIsR0FBdkM7QUFDRCxHQWRILEVBM0JnRCxDQTBDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOztBQUVELE1BQU1DLENBQUMsR0FBSUMsQ0FBRCxJQUFjO0FBQ3RCNUIsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkyQixDQUFaO0FBQ0EsU0FBTyxTQUFQO0FBQ0QsQ0FIRDs7QUFLQSxNQUFNQyxFQUFFLEdBQUcsWUFBWTtBQUNyQixTQUFPLEtBQVA7QUFDRCxDQUZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBGaXJlQWRtaW4gZnJvbSBcImZpcmViYXNlLWFkbWluXCI7XG5pbXBvcnQgUmVuZGVyUmVhY3QgZnJvbSBcIi4uL2xpYi9yZW5kZXItcmVhY3RcIjtcblxuaW1wb3J0IHsgRXhwcmVzcywgUmVzcG9uc2UsIFJlcXVlc3QgfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiZXhwcmVzcy1zZXJ2ZS1zdGF0aWMtY29yZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcm91dGVzKGFwcDogRXhwcmVzcykge1xuICBhcHAuZ2V0KFwiL1wiLCBoYW5kbGVyKTtcbiAgYXBwLmdldChcIi90ZXN0bWVcIiwgdGVzdEhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVyKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSByZXE7XG4gIGNvbnNvbGUubG9nKFwiPT0+dGVzdE5pY2UgbW5cIik7XG4gIHJldHVybiBSZW5kZXJSZWFjdChcIlwiLCByZXMsIHt9KTtcbn1cblxuZnVuY3Rpb24gdGVzdEhhbmRsZXIocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XG4gIGlmICghRmlyZUFkbWluLmFwcHMubGVuZ3RoKSB7XG4gICAgRmlyZUFkbWluLmluaXRpYWxpemVBcHAoKTtcbiAgfVxuXG4gIGxldCBkYiA9IEZpcmVBZG1pbi5maXJlc3RvcmUoKTtcbiAgY29uc3QgY29sbFJlZiA9IGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKTtcblxuICBjb25zdCB1c2VyUmVmID0gZGJcbiAgICAuY29sbGVjdGlvbihcInVzZXJzXCIpXG4gICAgLmFkZCh7XG4gICAgICBmdWxsbmFtZTogXCJKb2huXCIsXG4gICAgICBlbWFpbDogXCJqb2huQGhvcC5jb21cIixcbiAgICB9KVxuICAgIC50aGVuKChkb2MpID0+IHtcbiAgICAgIC8vIGlmIChkb2MuZXhpc3RzKSB7XG4gICAgICAvL3JldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChcImhlcmVcIik7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy8gIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7XCJtZXNzYWdlXCI6XCJVc2VyIElEIG5vdCBmb3VuZC5cIn0pO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAuc3RhdHVzKDQwMClcbiAgICAgICAgLmpzb24oeyBtZXNzYWdlOiBcIlVuYWJsZSB0byBjb25uZWN0IHRvIEZpcmVzdG9yZS5cIiB9KTtcbiAgICB9KTtcbiAgLy9yZXR1cm4gcmVzLnNlbmQodXNlclJlZik7XG4gIC8vIGNvbnNvbGUubG9nKFwiPT0+XCIsIGNvbGxSZWYpO1xuICBjb2xsUmVmXG4gICAgLmdldCgpXG4gICAgLnRoZW4oKHNuYXBzaG90KSA9PiB7XG4gICAgICBpZiAoc25hcHNob3QuZW1wdHkpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zZW5kKFwiTm8gZGF0YVwiKTtcbiAgICAgIH1cblxuICAgICAgc25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgIHJldHVybiByZXMuc2VuZChkb2MuZGF0YSgpKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlcy5zZW5kKFwiTm8gbmVlZCB0byBzZWVkXCIpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZ2V0dGluZyBkb2N1bWVudHNcIiwgZXJyKTtcbiAgICB9KTtcbiAgLy8gY29uc29sZS5sb2coXCI9PT5cIiwgdXNlclJlZik7XG4gIC8vIGNvbnN0IHVzZXJzID0gdXNlclJlZi5kb2NzLm1hcCgoZG9jKSA9PiB7XG4gIC8vICAgcmV0dXJuIGRvYy5kYXRhKCk7XG4gIC8vIH0pO1xuICAvLyByZXR1cm4gcmVzLnNlbmQodXNlcnMpO1xuICAvLyBGaXJlQWRtaW4uYXV0aCgpXG4gIC8vICAgLmdldFVzZXIodWlkKVxuICAvLyAgIC50aGVuKGZ1bmN0aW9uICh1c2VyUmVjb3JkKSB7XG4gIC8vICAgICAvLyBTZWUgdGhlIFVzZXJSZWNvcmQgcmVmZXJlbmNlIGRvYyBmb3IgdGhlIGNvbnRlbnRzIG9mIHVzZXJSZWNvcmQuXG4gIC8vICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSBmZXRjaGVkIHVzZXIgZGF0YTpcIiwgdXNlclJlY29yZC50b0pTT04oKSk7XG4gIC8vICAgfSlcbiAgLy8gICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGZldGNoaW5nIHVzZXIgZGF0YTpcIiwgZXJyb3IpO1xuICAvLyAgIH0pO1xufVxuXG5jb25zdCBqID0gKHQ6IFF1ZXJ5KSA9PiB7XG4gIGNvbnNvbGUubG9nKHQpO1xuICByZXR1cm4gXCJhYnN5eXl5XCI7XG59O1xuXG5jb25zdCBqaiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFwiYWJzXCI7XG59O1xuIl19