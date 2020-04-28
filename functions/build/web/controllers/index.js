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
  return (0, _renderReact.default)("", res, {
    name: "john"
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93ZWIvY29udHJvbGxlcnMvaW5kZXgudHMiXSwibmFtZXMiOlsicm91dGVzIiwiYXBwIiwiZ2V0IiwiaGFuZGxlciIsInRlc3RIYW5kbGVyIiwicmVxIiwicmVzIiwicXVlcnkiLCJuYW1lIiwiRmlyZUFkbWluIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJkYiIsImZpcmVzdG9yZSIsImNvbGxSZWYiLCJjb2xsZWN0aW9uIiwidXNlclJlZiIsImFkZCIsImZ1bGxuYW1lIiwiZW1haWwiLCJ0aGVuIiwiZG9jIiwiY2F0Y2giLCJlcnJvciIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwic25hcHNob3QiLCJlbXB0eSIsInNlbmQiLCJmb3JFYWNoIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJqIiwidCIsImpqIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFLTyxTQUFTQSxNQUFULENBQWdCQyxHQUFoQixFQUE4QjtBQUNuQ0EsRUFBQUEsR0FBRyxDQUFDQyxHQUFKLENBQVEsR0FBUixFQUFhQyxPQUFiO0FBQ0FGLEVBQUFBLEdBQUcsQ0FBQ0MsR0FBSixDQUFRLFNBQVIsRUFBbUJFLFdBQW5CO0FBQ0Q7O0FBRUQsU0FBU0QsT0FBVCxDQUFpQkUsR0FBakIsRUFBK0JDLEdBQS9CLEVBQThDO0FBQzVDLFFBQU07QUFBRUMsSUFBQUE7QUFBRixNQUFZRixHQUFsQjtBQUNBLFNBQU8sMEJBQVksRUFBWixFQUFnQkMsR0FBaEIsRUFBcUI7QUFBRUUsSUFBQUEsSUFBSSxFQUFFO0FBQVIsR0FBckIsQ0FBUDtBQUNEOztBQUVELFNBQVNKLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQW1DQyxHQUFuQyxFQUFrRDtBQUNoRCxNQUFJLENBQUNHLHVCQUFVQyxJQUFWLENBQWVDLE1BQXBCLEVBQTRCO0FBQzFCRiwyQkFBVUcsYUFBVjtBQUNEOztBQUVELE1BQUlDLEVBQUUsR0FBR0osdUJBQVVLLFNBQVYsRUFBVDs7QUFDQSxRQUFNQyxPQUFPLEdBQUdGLEVBQUUsQ0FBQ0csVUFBSCxDQUFjLE9BQWQsQ0FBaEI7QUFFQSxRQUFNQyxPQUFPLEdBQUdKLEVBQUUsQ0FDZkcsVUFEYSxDQUNGLE9BREUsRUFFYkUsR0FGYSxDQUVUO0FBQ0hDLElBQUFBLFFBQVEsRUFBRSxNQURQO0FBRUhDLElBQUFBLEtBQUssRUFBRTtBQUZKLEdBRlMsRUFNYkMsSUFOYSxDQU1QQyxHQUFELElBQVMsQ0FDYjtBQUNBO0FBQ0E7QUFDQTtBQUNELEdBWGEsRUFZYkMsS0FaYSxDQVlOQyxLQUFELElBQVc7QUFDaEIsV0FBT2xCLEdBQUcsQ0FDUG1CLE1BREksQ0FDRyxHQURILEVBRUpDLElBRkksQ0FFQztBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUZELENBQVA7QUFHRCxHQWhCYSxDQUFoQixDQVJnRCxDQXlCaEQ7QUFDQTs7QUFDQVosRUFBQUEsT0FBTyxDQUNKYixHQURILEdBRUdtQixJQUZILENBRVNPLFFBQUQsSUFBYztBQUNsQixRQUFJQSxRQUFRLENBQUNDLEtBQWIsRUFBb0I7QUFDbEIsYUFBT3ZCLEdBQUcsQ0FBQ3dCLElBQUosQ0FBUyxTQUFULENBQVA7QUFDRDs7QUFFREYsSUFBQUEsUUFBUSxDQUFDRyxPQUFULENBQWtCVCxHQUFELElBQVM7QUFDeEIsYUFBT2hCLEdBQUcsQ0FBQ3dCLElBQUosQ0FBU1IsR0FBRyxDQUFDVSxJQUFKLEVBQVQsQ0FBUDtBQUNELEtBRkQ7QUFHQSxXQUFPMUIsR0FBRyxDQUFDd0IsSUFBSixDQUFTLGlCQUFULENBQVA7QUFDRCxHQVhILEVBWUdQLEtBWkgsQ0FZVVUsR0FBRCxJQUFTO0FBQ2RDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaLEVBQXVDRixHQUF2QztBQUNELEdBZEgsRUEzQmdELENBMENoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7O0FBRUQsTUFBTUcsQ0FBQyxHQUFJQyxDQUFELElBQWM7QUFDdEJILEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxDQUFaO0FBQ0EsU0FBTyxTQUFQO0FBQ0QsQ0FIRDs7QUFLQSxNQUFNQyxFQUFFLEdBQUcsWUFBWTtBQUNyQixTQUFPLEtBQVA7QUFDRCxDQUZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBGaXJlQWRtaW4gZnJvbSBcImZpcmViYXNlLWFkbWluXCI7XG5pbXBvcnQgUmVuZGVyUmVhY3QgZnJvbSBcIi4uL2xpYi9yZW5kZXItcmVhY3RcIjtcblxuaW1wb3J0IHsgRXhwcmVzcywgUmVzcG9uc2UsIFJlcXVlc3QgfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiZXhwcmVzcy1zZXJ2ZS1zdGF0aWMtY29yZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcm91dGVzKGFwcDogRXhwcmVzcykge1xuICBhcHAuZ2V0KFwiL1wiLCBoYW5kbGVyKTtcbiAgYXBwLmdldChcIi90ZXN0bWVcIiwgdGVzdEhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVyKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSByZXE7XG4gIHJldHVybiBSZW5kZXJSZWFjdChcIlwiLCByZXMsIHsgbmFtZTogXCJqb2huXCIgfSk7XG59XG5cbmZ1bmN0aW9uIHRlc3RIYW5kbGVyKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xuICBpZiAoIUZpcmVBZG1pbi5hcHBzLmxlbmd0aCkge1xuICAgIEZpcmVBZG1pbi5pbml0aWFsaXplQXBwKCk7XG4gIH1cblxuICBsZXQgZGIgPSBGaXJlQWRtaW4uZmlyZXN0b3JlKCk7XG4gIGNvbnN0IGNvbGxSZWYgPSBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIik7XG5cbiAgY29uc3QgdXNlclJlZiA9IGRiXG4gICAgLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxuICAgIC5hZGQoe1xuICAgICAgZnVsbG5hbWU6IFwiSm9oblwiLFxuICAgICAgZW1haWw6IFwiam9obkBob3AuY29tXCIsXG4gICAgfSlcbiAgICAudGhlbigoZG9jKSA9PiB7XG4gICAgICAvLyBpZiAoZG9jLmV4aXN0cykge1xuICAgICAgLy9yZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoXCJoZXJlXCIpO1xuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe1wibWVzc2FnZVwiOlwiVXNlciBJRCBub3QgZm91bmQuXCJ9KTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIHJldHVybiByZXNcbiAgICAgICAgLnN0YXR1cyg0MDApXG4gICAgICAgIC5qc29uKHsgbWVzc2FnZTogXCJVbmFibGUgdG8gY29ubmVjdCB0byBGaXJlc3RvcmUuXCIgfSk7XG4gICAgfSk7XG4gIC8vcmV0dXJuIHJlcy5zZW5kKHVzZXJSZWYpO1xuICAvLyBjb25zb2xlLmxvZyhcIj09PlwiLCBjb2xsUmVmKTtcbiAgY29sbFJlZlxuICAgIC5nZXQoKVxuICAgIC50aGVuKChzbmFwc2hvdCkgPT4ge1xuICAgICAgaWYgKHNuYXBzaG90LmVtcHR5KSB7XG4gICAgICAgIHJldHVybiByZXMuc2VuZChcIk5vIGRhdGFcIik7XG4gICAgICB9XG5cbiAgICAgIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgICByZXR1cm4gcmVzLnNlbmQoZG9jLmRhdGEoKSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXMuc2VuZChcIk5vIG5lZWQgdG8gc2VlZFwiKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGdldHRpbmcgZG9jdW1lbnRzXCIsIGVycik7XG4gICAgfSk7XG4gIC8vIGNvbnNvbGUubG9nKFwiPT0+XCIsIHVzZXJSZWYpO1xuICAvLyBjb25zdCB1c2VycyA9IHVzZXJSZWYuZG9jcy5tYXAoKGRvYykgPT4ge1xuICAvLyAgIHJldHVybiBkb2MuZGF0YSgpO1xuICAvLyB9KTtcbiAgLy8gcmV0dXJuIHJlcy5zZW5kKHVzZXJzKTtcbiAgLy8gRmlyZUFkbWluLmF1dGgoKVxuICAvLyAgIC5nZXRVc2VyKHVpZClcbiAgLy8gICAudGhlbihmdW5jdGlvbiAodXNlclJlY29yZCkge1xuICAvLyAgICAgLy8gU2VlIHRoZSBVc2VyUmVjb3JkIHJlZmVyZW5jZSBkb2MgZm9yIHRoZSBjb250ZW50cyBvZiB1c2VyUmVjb3JkLlxuICAvLyAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgZmV0Y2hlZCB1c2VyIGRhdGE6XCIsIHVzZXJSZWNvcmQudG9KU09OKCkpO1xuICAvLyAgIH0pXG4gIC8vICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAvLyAgICAgY29uc29sZS5sb2coXCJFcnJvciBmZXRjaGluZyB1c2VyIGRhdGE6XCIsIGVycm9yKTtcbiAgLy8gICB9KTtcbn1cblxuY29uc3QgaiA9ICh0OiBRdWVyeSkgPT4ge1xuICBjb25zb2xlLmxvZyh0KTtcbiAgcmV0dXJuIFwiYWJzeXl5eVwiO1xufTtcblxuY29uc3QgamogPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBcImFic1wiO1xufTtcbiJdfQ==