"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _template = _interopRequireDefault(require("./template"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
//import ServerApp from "./server.bundle";
// Helper function to get the markup from React, inject the initial state, and
// send the server-side markup to the client
const renderApplication = (url, res, initialState) => {
  // const html = ReactDOMServer.renderToString(
  //   React.createElement(ServerApp, {
  //     url,
  //     context: {},
  //     initialState,
  //   }),
  // );
  const templatedHtml = (0, _template.default)({
    body: "",
    initialState: JSON.stringify(initialState)
  });
  res.send(templatedHtml);
};

var _default = renderApplication;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93ZWIvbGliL3JlbmRlci1yZWFjdC50cyJdLCJuYW1lcyI6WyJyZW5kZXJBcHBsaWNhdGlvbiIsInVybCIsInJlcyIsImluaXRpYWxTdGF0ZSIsInRlbXBsYXRlZEh0bWwiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInNlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQTs7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsTUFBTUEsaUJBQWlCLEdBQUcsQ0FBQ0MsR0FBRCxFQUFXQyxHQUFYLEVBQTBCQyxZQUExQixLQUFnRDtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU1DLGFBQWEsR0FBRyx1QkFBUztBQUM3QkMsSUFBQUEsSUFBSSxFQUFFLEVBRHVCO0FBRTdCRixJQUFBQSxZQUFZLEVBQUVHLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixZQUFmO0FBRmUsR0FBVCxDQUF0QjtBQUlBRCxFQUFBQSxHQUFHLENBQUNNLElBQUosQ0FBU0osYUFBVDtBQUNELENBYkQ7O2VBZWVKLGlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NU2VydmVyIGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSBcIi4vdGVtcGxhdGVcIjtcbi8vIEB0cy1pZ25vcmVcbi8vaW1wb3J0IFNlcnZlckFwcCBmcm9tIFwiLi9zZXJ2ZXIuYnVuZGxlXCI7XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBnZXQgdGhlIG1hcmt1cCBmcm9tIFJlYWN0LCBpbmplY3QgdGhlIGluaXRpYWwgc3RhdGUsIGFuZFxuLy8gc2VuZCB0aGUgc2VydmVyLXNpZGUgbWFya3VwIHRvIHRoZSBjbGllbnRcbmNvbnN0IHJlbmRlckFwcGxpY2F0aW9uID0gKHVybDogYW55LCByZXM6IFJlc3BvbnNlLCBpbml0aWFsU3RhdGU6IGFueSkgPT4ge1xuICAvLyBjb25zdCBodG1sID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoXG4gIC8vICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZXJ2ZXJBcHAsIHtcbiAgLy8gICAgIHVybCxcbiAgLy8gICAgIGNvbnRleHQ6IHt9LFxuICAvLyAgICAgaW5pdGlhbFN0YXRlLFxuICAvLyAgIH0pLFxuICAvLyApO1xuICBjb25zdCB0ZW1wbGF0ZWRIdG1sID0gdGVtcGxhdGUoe1xuICAgIGJvZHk6IFwiXCIsXG4gICAgaW5pdGlhbFN0YXRlOiBKU09OLnN0cmluZ2lmeShpbml0aWFsU3RhdGUpLFxuICB9KTtcbiAgcmVzLnNlbmQodGVtcGxhdGVkSHRtbCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJBcHBsaWNhdGlvbjtcbiJdfQ==