"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _path = _interopRequireDefault(require("path"));

var functions = _interopRequireWildcard(require("firebase-functions"));

var _glob = _interopRequireDefault(require("glob"));

var _express = _interopRequireDefault(require("express"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)(); // [START middleware]

const cors = require("cors")({
  origin: true
});

app.use(cors); // [END middleware]
// [START routes]

const filePattern = _path.default.resolve("lib/web/{controllers,api/controllers}/**/*.{ts,js}");

(0, _glob.default)(filePattern, (err, files) => {
  files.forEach(file => {
    const controller = require(file);

    if (_lodash.default.isFunction(controller.routes)) {
      controller.routes(app);
    }
  });
}); // [END routes]
// [START export]
// Export the express app as an HTTP Cloud Function

const start = functions.https.onRequest(app); // [END export]

exports.start = start;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJhcHAiLCJjb3JzIiwicmVxdWlyZSIsIm9yaWdpbiIsInVzZSIsImZpbGVQYXR0ZXJuIiwicGF0aCIsInJlc29sdmUiLCJlcnIiLCJmaWxlcyIsImZvckVhY2giLCJmaWxlIiwiY29udHJvbGxlciIsIl8iLCJpc0Z1bmN0aW9uIiwicm91dGVzIiwic3RhcnQiLCJmdW5jdGlvbnMiLCJodHRwcyIsIm9uUmVxdWVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7OztBQUVBLE1BQU1BLEdBQVksR0FBRyx1QkFBckIsQyxDQUVBOztBQUNBLE1BQU1DLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBUCxDQUFnQjtBQUFFQyxFQUFBQSxNQUFNLEVBQUU7QUFBVixDQUFoQixDQUFiOztBQUNBSCxHQUFHLENBQUNJLEdBQUosQ0FBUUgsSUFBUixFLENBQ0E7QUFFQTs7QUFDQSxNQUFNSSxXQUFtQixHQUFHQyxjQUFLQyxPQUFMLENBQzFCLG9EQUQwQixDQUE1Qjs7QUFHQSxtQkFBS0YsV0FBTCxFQUFrQixDQUFDRyxHQUFELEVBQU1DLEtBQU4sS0FBZ0I7QUFDaENBLEVBQUFBLEtBQUssQ0FBQ0MsT0FBTixDQUFlQyxJQUFELElBQVU7QUFDdEIsVUFBTUMsVUFBVSxHQUFHVixPQUFPLENBQUNTLElBQUQsQ0FBMUI7O0FBQ0EsUUFBSUUsZ0JBQUVDLFVBQUYsQ0FBYUYsVUFBVSxDQUFDRyxNQUF4QixDQUFKLEVBQXFDO0FBQ25DSCxNQUFBQSxVQUFVLENBQUNHLE1BQVgsQ0FBa0JmLEdBQWxCO0FBQ0Q7QUFDRixHQUxEO0FBTUQsQ0FQRCxFLENBUUE7QUFFQTtBQUNBOztBQUNPLE1BQU1nQixLQUFLLEdBQUdDLFNBQVMsQ0FBQ0MsS0FBVixDQUFnQkMsU0FBaEIsQ0FBMEJuQixHQUExQixDQUFkLEMsQ0FDUCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgKiBhcyBmdW5jdGlvbnMgZnJvbSBcImZpcmViYXNlLWZ1bmN0aW9uc1wiO1xuaW1wb3J0IGdsb2IgZnJvbSBcImdsb2JcIjtcblxuaW1wb3J0IGV4cHJlc3MsIHsgRXhwcmVzcyB9IGZyb20gXCJleHByZXNzXCI7XG5cbmNvbnN0IGFwcDogRXhwcmVzcyA9IGV4cHJlc3MoKTtcblxuLy8gW1NUQVJUIG1pZGRsZXdhcmVdXG5jb25zdCBjb3JzID0gcmVxdWlyZShcImNvcnNcIikoeyBvcmlnaW46IHRydWUgfSk7XG5hcHAudXNlKGNvcnMpO1xuLy8gW0VORCBtaWRkbGV3YXJlXVxuXG4vLyBbU1RBUlQgcm91dGVzXVxuY29uc3QgZmlsZVBhdHRlcm46IHN0cmluZyA9IHBhdGgucmVzb2x2ZShcbiAgXCJsaWIvd2ViL3tjb250cm9sbGVycyxhcGkvY29udHJvbGxlcnN9LyoqLyoue3RzLGpzfVwiLFxuKTtcbmdsb2IoZmlsZVBhdHRlcm4sIChlcnIsIGZpbGVzKSA9PiB7XG4gIGZpbGVzLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICBjb25zdCBjb250cm9sbGVyID0gcmVxdWlyZShmaWxlKTtcbiAgICBpZiAoXy5pc0Z1bmN0aW9uKGNvbnRyb2xsZXIucm91dGVzKSkge1xuICAgICAgY29udHJvbGxlci5yb3V0ZXMoYXBwKTtcbiAgICB9XG4gIH0pO1xufSk7XG4vLyBbRU5EIHJvdXRlc11cblxuLy8gW1NUQVJUIGV4cG9ydF1cbi8vIEV4cG9ydCB0aGUgZXhwcmVzcyBhcHAgYXMgYW4gSFRUUCBDbG91ZCBGdW5jdGlvblxuZXhwb3J0IGNvbnN0IHN0YXJ0ID0gZnVuY3Rpb25zLmh0dHBzLm9uUmVxdWVzdChhcHApO1xuLy8gW0VORCBleHBvcnRdXG4iXX0=