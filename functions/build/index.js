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

app.use(cors); // app.use(ValidateFirebaseIdToken);
// [END middleware]
//console.log("==>", path.join(__dirname, "/web/views"));
//app.use(express.static(path.join(__dirname, "/web/views")));
// [START routes]

const filePattern = _path.default.resolve("build/web/{controllers,api/controllers}/**/*.{ts,js}");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJhcHAiLCJjb3JzIiwicmVxdWlyZSIsIm9yaWdpbiIsInVzZSIsImZpbGVQYXR0ZXJuIiwicGF0aCIsInJlc29sdmUiLCJlcnIiLCJmaWxlcyIsImZvckVhY2giLCJmaWxlIiwiY29udHJvbGxlciIsIl8iLCJpc0Z1bmN0aW9uIiwicm91dGVzIiwic3RhcnQiLCJmdW5jdGlvbnMiLCJodHRwcyIsIm9uUmVxdWVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUdBOzs7Ozs7OztBQUVBLE1BQU1BLEdBQVksR0FBRyx1QkFBckIsQyxDQUVBOztBQUNBLE1BQU1DLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBUCxDQUFnQjtBQUFFQyxFQUFBQSxNQUFNLEVBQUU7QUFBVixDQUFoQixDQUFiOztBQUNBSCxHQUFHLENBQUNJLEdBQUosQ0FBUUgsSUFBUixFLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxNQUFNSSxXQUFtQixHQUFHQyxjQUFLQyxPQUFMLENBQzFCLHNEQUQwQixDQUE1Qjs7QUFHQSxtQkFBS0YsV0FBTCxFQUFrQixDQUFDRyxHQUFELEVBQU1DLEtBQU4sS0FBZ0I7QUFDaENBLEVBQUFBLEtBQUssQ0FBQ0MsT0FBTixDQUFlQyxJQUFELElBQVU7QUFDdEIsVUFBTUMsVUFBVSxHQUFHVixPQUFPLENBQUNTLElBQUQsQ0FBMUI7O0FBQ0EsUUFBSUUsZ0JBQUVDLFVBQUYsQ0FBYUYsVUFBVSxDQUFDRyxNQUF4QixDQUFKLEVBQXFDO0FBQ25DSCxNQUFBQSxVQUFVLENBQUNHLE1BQVgsQ0FBa0JmLEdBQWxCO0FBQ0Q7QUFDRixHQUxEO0FBTUQsQ0FQRCxFLENBUUE7QUFFQTtBQUNBOztBQUNPLE1BQU1nQixLQUFLLEdBQUdDLFNBQVMsQ0FBQ0MsS0FBVixDQUFnQkMsU0FBaEIsQ0FBMEJuQixHQUExQixDQUFkLEMsQ0FDUCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgKiBhcyBmdW5jdGlvbnMgZnJvbSBcImZpcmViYXNlLWZ1bmN0aW9uc1wiO1xuaW1wb3J0IGdsb2IgZnJvbSBcImdsb2JcIjtcbmltcG9ydCBWYWxpZGF0ZUZpcmViYXNlSWRUb2tlbiBmcm9tIFwiLi93ZWIvbWlkZGxld2FyZS92YWxpZGF0ZS1maXJlYmFzZUlkLXRva2VuXCI7XG5cbmltcG9ydCBleHByZXNzLCB7IEV4cHJlc3MgfSBmcm9tIFwiZXhwcmVzc1wiO1xuXG5jb25zdCBhcHA6IEV4cHJlc3MgPSBleHByZXNzKCk7XG5cbi8vIFtTVEFSVCBtaWRkbGV3YXJlXVxuY29uc3QgY29ycyA9IHJlcXVpcmUoXCJjb3JzXCIpKHsgb3JpZ2luOiB0cnVlIH0pO1xuYXBwLnVzZShjb3JzKTtcbi8vIGFwcC51c2UoVmFsaWRhdGVGaXJlYmFzZUlkVG9rZW4pO1xuLy8gW0VORCBtaWRkbGV3YXJlXVxuLy9jb25zb2xlLmxvZyhcIj09PlwiLCBwYXRoLmpvaW4oX19kaXJuYW1lLCBcIi93ZWIvdmlld3NcIikpO1xuLy9hcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsIFwiL3dlYi92aWV3c1wiKSkpO1xuXG4vLyBbU1RBUlQgcm91dGVzXVxuY29uc3QgZmlsZVBhdHRlcm46IHN0cmluZyA9IHBhdGgucmVzb2x2ZShcbiAgXCJidWlsZC93ZWIve2NvbnRyb2xsZXJzLGFwaS9jb250cm9sbGVyc30vKiovKi57dHMsanN9XCIsXG4pO1xuZ2xvYihmaWxlUGF0dGVybiwgKGVyciwgZmlsZXMpID0+IHtcbiAgZmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgIGNvbnN0IGNvbnRyb2xsZXIgPSByZXF1aXJlKGZpbGUpO1xuICAgIGlmIChfLmlzRnVuY3Rpb24oY29udHJvbGxlci5yb3V0ZXMpKSB7XG4gICAgICBjb250cm9sbGVyLnJvdXRlcyhhcHApO1xuICAgIH1cbiAgfSk7XG59KTtcbi8vIFtFTkQgcm91dGVzXVxuXG4vLyBbU1RBUlQgZXhwb3J0XVxuLy8gRXhwb3J0IHRoZSBleHByZXNzIGFwcCBhcyBhbiBIVFRQIENsb3VkIEZ1bmN0aW9uXG5leHBvcnQgY29uc3Qgc3RhcnQgPSBmdW5jdGlvbnMuaHR0cHMub25SZXF1ZXN0KGFwcCk7XG4vLyBbRU5EIGV4cG9ydF1cbiJdfQ==