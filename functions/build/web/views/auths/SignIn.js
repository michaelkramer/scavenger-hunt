"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const SignIn = () => {
  const [email, setEmail] = (0, _react.useState)("");
  const [password, setPassword] = (0, _react.useState)("");
  const [error, setError] = (0, _react.useState)(null);

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
  };

  const onChangeHandler = event => {
    const {
      name,
      value
    } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-8"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "text-3xl mb-2 text-center font-bold"
  }, "Sign In"), /*#__PURE__*/_react.default.createElement("div", {
    className: "border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8"
  }, error !== null && /*#__PURE__*/_react.default.createElement("div", {
    className: "py-4 bg-red-600 w-full text-white text-center mb-3"
  }, error), /*#__PURE__*/_react.default.createElement("form", {
    className: ""
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "userEmail",
    className: "block"
  }, "Email:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "email",
    className: "my-1 p-1 w-full",
    name: "userEmail",
    value: email,
    placeholder: "E.g: faruq123@gmail.com",
    id: "userEmail",
    onChange: event => onChangeHandler(event)
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "userPassword",
    className: "block"
  }, "Password:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "password",
    className: "mt-1 mb-3 p-1 w-full",
    name: "userPassword",
    value: password,
    placeholder: "Your Password",
    id: "userPassword",
    onChange: event => onChangeHandler(event)
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "bg-green-400 hover:bg-green-500 w-full py-2 text-white",
    onClick: event => {
      signInWithEmailAndPasswordHandler(event, email, password);
    }
  }, "Sign in")), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-center my-3"
  }, "or"), /*#__PURE__*/_react.default.createElement("button", {
    className: "bg-red-500 hover:bg-red-600 w-full py-2 text-white"
  }, "Sign in with Google"), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-center my-3"
  }, "Don't have an account?", " ", /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "signUp",
    className: "text-blue-500 hover:text-blue-600"
  }, "Sign up here"), " ", /*#__PURE__*/_react.default.createElement("br", null), " ", /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "passwordReset",
    className: "text-blue-500 hover:text-blue-600"
  }, "Forgot Password?"))));
};

var _default = SignIn;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy93ZWIvdmlld3MvYXV0aHMvU2lnbkluLnRzeCJdLCJuYW1lcyI6WyJTaWduSW4iLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVycm9yIiwic2V0RXJyb3IiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwib25DaGFuZ2VIYW5kbGVyIiwibmFtZSIsInZhbHVlIiwiY3VycmVudFRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsTUFBTTtBQUNuQixRQUFNLENBQUNDLEtBQUQsRUFBUUMsUUFBUixJQUFvQixxQkFBUyxFQUFULENBQTFCO0FBQ0EsUUFBTSxDQUFDQyxRQUFELEVBQVdDLFdBQVgsSUFBMEIscUJBQVMsRUFBVCxDQUFoQztBQUNBLFFBQU0sQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLElBQW9CLHFCQUFTLElBQVQsQ0FBMUI7O0FBQ0EsUUFBTUMsaUNBQWlDLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRUCxLQUFSLEVBQWVFLFFBQWYsS0FBNEI7QUFDcEVLLElBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUNELEdBRkQ7O0FBSUEsUUFBTUMsZUFBZSxHQUFJRixLQUFELElBQVc7QUFDakMsVUFBTTtBQUFFRyxNQUFBQSxJQUFGO0FBQVFDLE1BQUFBO0FBQVIsUUFBa0JKLEtBQUssQ0FBQ0ssYUFBOUI7O0FBRUEsUUFBSUYsSUFBSSxLQUFLLFdBQWIsRUFBMEI7QUFDeEJULE1BQUFBLFFBQVEsQ0FBQ1UsS0FBRCxDQUFSO0FBQ0QsS0FGRCxNQUVPLElBQUlELElBQUksS0FBSyxjQUFiLEVBQTZCO0FBQ2xDUCxNQUFBQSxXQUFXLENBQUNRLEtBQUQsQ0FBWDtBQUNEO0FBQ0YsR0FSRDs7QUFVQSxzQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSSxJQUFBLFNBQVMsRUFBQztBQUFkLGVBREYsZUFFRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDR1AsS0FBSyxLQUFLLElBQVYsaUJBQ0M7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0dBLEtBREgsQ0FGSixlQU1FO0FBQU0sSUFBQSxTQUFTLEVBQUM7QUFBaEIsa0JBQ0U7QUFBTyxJQUFBLE9BQU8sRUFBQyxXQUFmO0FBQTJCLElBQUEsU0FBUyxFQUFDO0FBQXJDLGNBREYsZUFJRTtBQUNFLElBQUEsSUFBSSxFQUFDLE9BRFA7QUFFRSxJQUFBLFNBQVMsRUFBQyxpQkFGWjtBQUdFLElBQUEsSUFBSSxFQUFDLFdBSFA7QUFJRSxJQUFBLEtBQUssRUFBRUosS0FKVDtBQUtFLElBQUEsV0FBVyxFQUFDLHlCQUxkO0FBTUUsSUFBQSxFQUFFLEVBQUMsV0FOTDtBQU9FLElBQUEsUUFBUSxFQUFHTyxLQUFELElBQVdFLGVBQWUsQ0FBQ0YsS0FBRDtBQVB0QyxJQUpGLGVBYUU7QUFBTyxJQUFBLE9BQU8sRUFBQyxjQUFmO0FBQThCLElBQUEsU0FBUyxFQUFDO0FBQXhDLGlCQWJGLGVBZ0JFO0FBQ0UsSUFBQSxJQUFJLEVBQUMsVUFEUDtBQUVFLElBQUEsU0FBUyxFQUFDLHNCQUZaO0FBR0UsSUFBQSxJQUFJLEVBQUMsY0FIUDtBQUlFLElBQUEsS0FBSyxFQUFFTCxRQUpUO0FBS0UsSUFBQSxXQUFXLEVBQUMsZUFMZDtBQU1FLElBQUEsRUFBRSxFQUFDLGNBTkw7QUFPRSxJQUFBLFFBQVEsRUFBR0ssS0FBRCxJQUFXRSxlQUFlLENBQUNGLEtBQUQ7QUFQdEMsSUFoQkYsZUF5QkU7QUFDRSxJQUFBLFNBQVMsRUFBQyx3REFEWjtBQUVFLElBQUEsT0FBTyxFQUFHQSxLQUFELElBQVc7QUFDbEJELE1BQUFBLGlDQUFpQyxDQUFDQyxLQUFELEVBQVFQLEtBQVIsRUFBZUUsUUFBZixDQUFqQztBQUNEO0FBSkgsZUF6QkYsQ0FORixlQXdDRTtBQUFHLElBQUEsU0FBUyxFQUFDO0FBQWIsVUF4Q0YsZUF5Q0U7QUFBUSxJQUFBLFNBQVMsRUFBQztBQUFsQiwyQkF6Q0YsZUE0Q0U7QUFBRyxJQUFBLFNBQVMsRUFBQztBQUFiLCtCQUN5QixHQUR6QixlQUVFLDZCQUFDLG9CQUFEO0FBQU0sSUFBQSxFQUFFLEVBQUMsUUFBVDtBQUFrQixJQUFBLFNBQVMsRUFBQztBQUE1QixvQkFGRixFQUlVLEdBSlYsZUFLRSx3Q0FMRixFQUtTLEdBTFQsZUFNRSw2QkFBQyxvQkFBRDtBQUNFLElBQUEsRUFBRSxFQUFDLGVBREw7QUFFRSxJQUFBLFNBQVMsRUFBQztBQUZaLHdCQU5GLENBNUNGLENBRkYsQ0FERjtBQStERCxDQWpGRDs7ZUFrRmVILE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jb25zdCBTaWduSW4gPSAoKSA9PiB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkSGFuZGxlciA9IChldmVudCwgZW1haWwsIHBhc3N3b3JkKSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICBjb25zdCBvbkNoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuXG4gICAgaWYgKG5hbWUgPT09IFwidXNlckVtYWlsXCIpIHtcbiAgICAgIHNldEVtYWlsKHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwidXNlclBhc3N3b3JkXCIpIHtcbiAgICAgIHNldFBhc3N3b3JkKHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LThcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtYi0yIHRleHQtY2VudGVyIGZvbnQtYm9sZFwiPlNpZ24gSW48L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWJsdWUtNDAwIG14LWF1dG8gdy0xMS8xMiBtZDp3LTIvNCByb3VuZGVkIHB5LTggcHgtNCBtZDpweC04XCI+XG4gICAgICAgIHtlcnJvciAhPT0gbnVsbCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00IGJnLXJlZC02MDAgdy1mdWxsIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgbWItM1wiPlxuICAgICAgICAgICAge2Vycm9yfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJFbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrXCI+XG4gICAgICAgICAgICBFbWFpbDpcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTEgcC0xIHctZnVsbFwiXG4gICAgICAgICAgICBuYW1lPVwidXNlckVtYWlsXCJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRS5nOiBmYXJ1cTEyM0BnbWFpbC5jb21cIlxuICAgICAgICAgICAgaWQ9XCJ1c2VyRW1haWxcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gb25DaGFuZ2VIYW5kbGVyKGV2ZW50KX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlclBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiYmxvY2tcIj5cbiAgICAgICAgICAgIFBhc3N3b3JkOlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBtYi0zIHAtMSB3LWZ1bGxcIlxuICAgICAgICAgICAgbmFtZT1cInVzZXJQYXNzd29yZFwiXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgUGFzc3dvcmRcIlxuICAgICAgICAgICAgaWQ9XCJ1c2VyUGFzc3dvcmRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gb25DaGFuZ2VIYW5kbGVyKGV2ZW50KX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyZWVuLTQwMCBob3ZlcjpiZy1ncmVlbi01MDAgdy1mdWxsIHB5LTIgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmRIYW5kbGVyKGV2ZW50LCBlbWFpbCwgcGFzc3dvcmQpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTaWduIGluXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXktM1wiPm9yPC9wPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTYwMCB3LWZ1bGwgcHktMiB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgU2lnbiBpbiB3aXRoIEdvb2dsZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXktM1wiPlxuICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD97XCIgXCJ9XG4gICAgICAgICAgPExpbmsgdG89XCJzaWduVXBcIiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwIGhvdmVyOnRleHQtYmx1ZS02MDBcIj5cbiAgICAgICAgICAgIFNpZ24gdXAgaGVyZVxuICAgICAgICAgIDwvTGluaz57XCIgXCJ9XG4gICAgICAgICAgPGJyIC8+e1wiIFwifVxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICB0bz1cInBhc3N3b3JkUmVzZXRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMCBob3Zlcjp0ZXh0LWJsdWUtNjAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBGb3Jnb3QgUGFzc3dvcmQ/XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTaWduSW47XG4iXX0=