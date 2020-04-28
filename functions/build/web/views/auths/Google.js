"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SignIn = _interopRequireDefault(require("./SignIn"));

var _SignUp = _interopRequireDefault(require("./SignUp"));

var _ProfilePage = _interopRequireDefault(require("./ProfilePage"));

var _PasswordReset = _interopRequireDefault(require("./PasswordReset"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { BrowserRouter } from "react-router-dom";
const Google = () => {
  const user = null;
  return user ? /*#__PURE__*/_react.default.createElement(_ProfilePage.default, null) : /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_SignUp.default, null), /*#__PURE__*/_react.default.createElement(_SignIn.default, null), /*#__PURE__*/_react.default.createElement(_PasswordReset.default, null));
};

var _default = Google;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy93ZWIvdmlld3MvYXV0aHMvR29vZ2xlLnRzeCJdLCJuYW1lcyI6WyJHb29nbGUiLCJ1c2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFKQTtBQUtBLE1BQU1BLE1BQU0sR0FBRyxNQUFNO0FBQ25CLFFBQU1DLElBQUksR0FBRyxJQUFiO0FBQ0EsU0FBT0EsSUFBSSxnQkFDVCw2QkFBQyxvQkFBRCxPQURTLGdCQUdULHVEQUNFLDZCQUFDLGVBQUQsT0FERixlQUVFLDZCQUFDLGVBQUQsT0FGRixlQUdFLDZCQUFDLHNCQUFELE9BSEYsQ0FIRjtBQVNELENBWEQ7O2VBWWVELE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vL2ltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IFNpZ25JbiBmcm9tIFwiLi9TaWduSW5cIjtcbmltcG9ydCBTaWduVXAgZnJvbSBcIi4vU2lnblVwXCI7XG5pbXBvcnQgUHJvZmlsZVBhZ2UgZnJvbSBcIi4vUHJvZmlsZVBhZ2VcIjtcbmltcG9ydCBQYXNzd29yZFJlc2V0IGZyb20gXCIuL1Bhc3N3b3JkUmVzZXRcIjtcbmNvbnN0IEdvb2dsZSA9ICgpID0+IHtcbiAgY29uc3QgdXNlciA9IG51bGw7XG4gIHJldHVybiB1c2VyID8gKFxuICAgIDxQcm9maWxlUGFnZSAvPlxuICApIDogKFxuICAgIDxkaXY+XG4gICAgICA8U2lnblVwIC8+XG4gICAgICA8U2lnbkluIC8+XG4gICAgICA8UGFzc3dvcmRSZXNldCAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEdvb2dsZTtcbiJdfQ==