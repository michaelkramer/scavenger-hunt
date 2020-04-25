"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _template = _interopRequireDefault(require("./template"));

var _serverBundle = _interopRequireDefault(require("../../server.bundle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// React App
// const ServerApp = React.createFactory(
//   require("../../server.bundle").default,
// );
function render(MyComponent) {
  return _react.default.createElement(MyComponent, {
    foo: "bar"
  });
} // Helper function to get the markup from React, inject the initial state, and
// send the server-side markup to the client


const renderApplication = (url, res, initialState) => {
  const html = _server.default.renderToString( // @ts-ignore
  render(_serverBundle.default, {
    url: url,
    context: {},
    initialState
  }) //ServerApp({ url: url, context: {}, initialState }),
  );

  const templatedHtml = (0, _template.default)({
    body: html,
    initialState: JSON.stringify(initialState)
  });
  res.send(templatedHtml);
};

var _default = renderApplication;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93ZWIvbGliL3JlbmRlci1yZWFjdC50cyJdLCJuYW1lcyI6WyJyZW5kZXIiLCJNeUNvbXBvbmVudCIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsImZvbyIsInJlbmRlckFwcGxpY2F0aW9uIiwidXJsIiwicmVzIiwiaW5pdGlhbFN0YXRlIiwiaHRtbCIsIlJlYWN0RE9NU2VydmVyIiwicmVuZGVyVG9TdHJpbmciLCJTZXJ2ZXJBcHAiLCJjb250ZXh0IiwidGVtcGxhdGVkSHRtbCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQSxNQUFULENBQWdCQyxXQUFoQixFQUFrQztBQUNoQyxTQUFPQyxlQUFNQyxhQUFOLENBQW9CRixXQUFwQixFQUFpQztBQUFFRyxJQUFBQSxHQUFHLEVBQUU7QUFBUCxHQUFqQyxDQUFQO0FBQ0QsQyxDQUNEO0FBQ0E7OztBQUNBLE1BQU1DLGlCQUFpQixHQUFHLENBQUNDLEdBQUQsRUFBV0MsR0FBWCxFQUEwQkMsWUFBMUIsS0FBZ0Q7QUFDeEUsUUFBTUMsSUFBSSxHQUFHQyxnQkFBZUMsY0FBZixFQUNYO0FBQ0FYLEVBQUFBLE1BQU0sQ0FBQ1kscUJBQUQsRUFBWTtBQUNoQk4sSUFBQUEsR0FBRyxFQUFFQSxHQURXO0FBRWhCTyxJQUFBQSxPQUFPLEVBQUUsRUFGTztBQUdoQkwsSUFBQUE7QUFIZ0IsR0FBWixDQUZLLENBT1g7QUFQVyxHQUFiOztBQVNBLFFBQU1NLGFBQWEsR0FBRyx1QkFBUztBQUM3QkMsSUFBQUEsSUFBSSxFQUFFTixJQUR1QjtBQUU3QkQsSUFBQUEsWUFBWSxFQUFFUSxJQUFJLENBQUNDLFNBQUwsQ0FBZVQsWUFBZjtBQUZlLEdBQVQsQ0FBdEI7QUFJQUQsRUFBQUEsR0FBRyxDQUFDVyxJQUFKLENBQVNKLGFBQVQ7QUFDRCxDQWZEOztlQWlCZVQsaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET01TZXJ2ZXIgZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tIFwiLi90ZW1wbGF0ZVwiO1xuaW1wb3J0IFNlcnZlckFwcCBmcm9tIFwiLi4vLi4vc2VydmVyLmJ1bmRsZS5qc1wiO1xuXG4vLyBSZWFjdCBBcHBcbi8vIGNvbnN0IFNlcnZlckFwcCA9IFJlYWN0LmNyZWF0ZUZhY3RvcnkoXG4vLyAgIHJlcXVpcmUoXCIuLi8uLi9zZXJ2ZXIuYnVuZGxlXCIpLmRlZmF1bHQsXG4vLyApO1xuZnVuY3Rpb24gcmVuZGVyKE15Q29tcG9uZW50OiBhbnkpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTXlDb21wb25lbnQsIHsgZm9vOiBcImJhclwiIH0pO1xufVxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGdldCB0aGUgbWFya3VwIGZyb20gUmVhY3QsIGluamVjdCB0aGUgaW5pdGlhbCBzdGF0ZSwgYW5kXG4vLyBzZW5kIHRoZSBzZXJ2ZXItc2lkZSBtYXJrdXAgdG8gdGhlIGNsaWVudFxuY29uc3QgcmVuZGVyQXBwbGljYXRpb24gPSAodXJsOiBhbnksIHJlczogUmVzcG9uc2UsIGluaXRpYWxTdGF0ZTogYW55KSA9PiB7XG4gIGNvbnN0IGh0bWwgPSBSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0cmluZyhcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmVuZGVyKFNlcnZlckFwcCwge1xuICAgICAgdXJsOiB1cmwsXG4gICAgICBjb250ZXh0OiB7fSxcbiAgICAgIGluaXRpYWxTdGF0ZSxcbiAgICB9KSxcbiAgICAvL1NlcnZlckFwcCh7IHVybDogdXJsLCBjb250ZXh0OiB7fSwgaW5pdGlhbFN0YXRlIH0pLFxuICApO1xuICBjb25zdCB0ZW1wbGF0ZWRIdG1sID0gdGVtcGxhdGUoe1xuICAgIGJvZHk6IGh0bWwsXG4gICAgaW5pdGlhbFN0YXRlOiBKU09OLnN0cmluZ2lmeShpbml0aWFsU3RhdGUpLFxuICB9KTtcbiAgcmVzLnNlbmQodGVtcGxhdGVkSHRtbCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJBcHBsaWNhdGlvbjtcbiJdfQ==