"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const SignUp = () => {
  const [email, setEmail] = (0, _react.useState)("");
  const [password, setPassword] = (0, _react.useState)("");
  const [displayName, setDisplayName] = (0, _react.useState)("");
  const [error, setError] = (0, _react.useState)(null);

  const createUserWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
    setDisplayName("");
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
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-8"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "text-3xl mb-2 text-center font-bold"
  }, "Sign Up"), /*#__PURE__*/_react.default.createElement("div", {
    className: "border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8"
  }, error !== null && /*#__PURE__*/_react.default.createElement("div", {
    className: "py-4 bg-red-600 w-full text-white text-center mb-3"
  }, error), /*#__PURE__*/_react.default.createElement("form", {
    className: ""
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "displayName",
    className: "block"
  }, "Display Name:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "my-1 p-1 w-full ",
    name: "displayName",
    value: displayName,
    placeholder: "E.g: Faruq",
    id: "displayName",
    onChange: event => onChangeHandler(event)
  }), /*#__PURE__*/_react.default.createElement("label", {
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
      createUserWithEmailAndPasswordHandler(event, email, password);
    }
  }, "Sign up")), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-center my-3"
  }, "or"), /*#__PURE__*/_react.default.createElement("button", {
    className: "bg-red-500 hover:bg-red-600 w-full py-2 text-white"
  }, "Sign In with Google"), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-center my-3"
  }, "Already have an account?", " ", /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/",
    className: "text-blue-500 hover:text-blue-600"
  }, "Sign in here"))));
};

var _default = SignUp;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy93ZWIvdmlld3MvYXV0aHMvU2lnblVwLnRzeCJdLCJuYW1lcyI6WyJTaWduVXAiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImRpc3BsYXlOYW1lIiwic2V0RGlzcGxheU5hbWUiLCJlcnJvciIsInNldEVycm9yIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkSGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJvbkNoYW5nZUhhbmRsZXIiLCJuYW1lIiwidmFsdWUiLCJjdXJyZW50VGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUNBLE1BQU1BLE1BQU0sR0FBRyxNQUFNO0FBQ25CLFFBQU0sQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLElBQW9CLHFCQUFTLEVBQVQsQ0FBMUI7QUFDQSxRQUFNLENBQUNDLFFBQUQsRUFBV0MsV0FBWCxJQUEwQixxQkFBUyxFQUFULENBQWhDO0FBQ0EsUUFBTSxDQUFDQyxXQUFELEVBQWNDLGNBQWQsSUFBZ0MscUJBQVMsRUFBVCxDQUF0QztBQUNBLFFBQU0sQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLElBQW9CLHFCQUFTLElBQVQsQ0FBMUI7O0FBQ0EsUUFBTUMscUNBQXFDLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRVCxLQUFSLEVBQWVFLFFBQWYsS0FBNEI7QUFDeEVPLElBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUNBVCxJQUFBQSxRQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0FFLElBQUFBLFdBQVcsQ0FBQyxFQUFELENBQVg7QUFDQUUsSUFBQUEsY0FBYyxDQUFDLEVBQUQsQ0FBZDtBQUNELEdBTEQ7O0FBTUEsUUFBTU0sZUFBZSxHQUFJRixLQUFELElBQVc7QUFDakMsVUFBTTtBQUFFRyxNQUFBQSxJQUFGO0FBQVFDLE1BQUFBO0FBQVIsUUFBa0JKLEtBQUssQ0FBQ0ssYUFBOUI7O0FBQ0EsUUFBSUYsSUFBSSxLQUFLLFdBQWIsRUFBMEI7QUFDeEJYLE1BQUFBLFFBQVEsQ0FBQ1ksS0FBRCxDQUFSO0FBQ0QsS0FGRCxNQUVPLElBQUlELElBQUksS0FBSyxjQUFiLEVBQTZCO0FBQ2xDVCxNQUFBQSxXQUFXLENBQUNVLEtBQUQsQ0FBWDtBQUNELEtBRk0sTUFFQSxJQUFJRCxJQUFJLEtBQUssYUFBYixFQUE0QjtBQUNqQ1AsTUFBQUEsY0FBYyxDQUFDUSxLQUFELENBQWQ7QUFDRDtBQUNGLEdBVEQ7O0FBVUEsc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxlQURGLGVBRUU7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0dQLEtBQUssS0FBSyxJQUFWLGlCQUNDO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNHQSxLQURILENBRkosZUFNRTtBQUFNLElBQUEsU0FBUyxFQUFDO0FBQWhCLGtCQUNFO0FBQU8sSUFBQSxPQUFPLEVBQUMsYUFBZjtBQUE2QixJQUFBLFNBQVMsRUFBQztBQUF2QyxxQkFERixlQUlFO0FBQ0UsSUFBQSxJQUFJLEVBQUMsTUFEUDtBQUVFLElBQUEsU0FBUyxFQUFDLGtCQUZaO0FBR0UsSUFBQSxJQUFJLEVBQUMsYUFIUDtBQUlFLElBQUEsS0FBSyxFQUFFRixXQUpUO0FBS0UsSUFBQSxXQUFXLEVBQUMsWUFMZDtBQU1FLElBQUEsRUFBRSxFQUFDLGFBTkw7QUFPRSxJQUFBLFFBQVEsRUFBR0ssS0FBRCxJQUFXRSxlQUFlLENBQUNGLEtBQUQ7QUFQdEMsSUFKRixlQWFFO0FBQU8sSUFBQSxPQUFPLEVBQUMsV0FBZjtBQUEyQixJQUFBLFNBQVMsRUFBQztBQUFyQyxjQWJGLGVBZ0JFO0FBQ0UsSUFBQSxJQUFJLEVBQUMsT0FEUDtBQUVFLElBQUEsU0FBUyxFQUFDLGlCQUZaO0FBR0UsSUFBQSxJQUFJLEVBQUMsV0FIUDtBQUlFLElBQUEsS0FBSyxFQUFFVCxLQUpUO0FBS0UsSUFBQSxXQUFXLEVBQUMseUJBTGQ7QUFNRSxJQUFBLEVBQUUsRUFBQyxXQU5MO0FBT0UsSUFBQSxRQUFRLEVBQUdTLEtBQUQsSUFBV0UsZUFBZSxDQUFDRixLQUFEO0FBUHRDLElBaEJGLGVBeUJFO0FBQU8sSUFBQSxPQUFPLEVBQUMsY0FBZjtBQUE4QixJQUFBLFNBQVMsRUFBQztBQUF4QyxpQkF6QkYsZUE0QkU7QUFDRSxJQUFBLElBQUksRUFBQyxVQURQO0FBRUUsSUFBQSxTQUFTLEVBQUMsc0JBRlo7QUFHRSxJQUFBLElBQUksRUFBQyxjQUhQO0FBSUUsSUFBQSxLQUFLLEVBQUVQLFFBSlQ7QUFLRSxJQUFBLFdBQVcsRUFBQyxlQUxkO0FBTUUsSUFBQSxFQUFFLEVBQUMsY0FOTDtBQU9FLElBQUEsUUFBUSxFQUFHTyxLQUFELElBQVdFLGVBQWUsQ0FBQ0YsS0FBRDtBQVB0QyxJQTVCRixlQXFDRTtBQUNFLElBQUEsU0FBUyxFQUFDLHdEQURaO0FBRUUsSUFBQSxPQUFPLEVBQUdBLEtBQUQsSUFBVztBQUNsQkQsTUFBQUEscUNBQXFDLENBQUNDLEtBQUQsRUFBUVQsS0FBUixFQUFlRSxRQUFmLENBQXJDO0FBQ0Q7QUFKSCxlQXJDRixDQU5GLGVBb0RFO0FBQUcsSUFBQSxTQUFTLEVBQUM7QUFBYixVQXBERixlQXFERTtBQUFRLElBQUEsU0FBUyxFQUFDO0FBQWxCLDJCQXJERixlQXdERTtBQUFHLElBQUEsU0FBUyxFQUFDO0FBQWIsaUNBQzJCLEdBRDNCLGVBRUUsNkJBQUMsb0JBQUQ7QUFBTSxJQUFBLEVBQUUsRUFBQyxHQUFUO0FBQWEsSUFBQSxTQUFTLEVBQUM7QUFBdkIsb0JBRkYsQ0F4REYsQ0FGRixDQURGO0FBb0VELENBekZEOztlQTBGZUgsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5jb25zdCBTaWduVXAgPSAoKSA9PiB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtkaXNwbGF5TmFtZSwgc2V0RGlzcGxheU5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZEhhbmRsZXIgPSAoZXZlbnQsIGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0RW1haWwoXCJcIik7XG4gICAgc2V0UGFzc3dvcmQoXCJcIik7XG4gICAgc2V0RGlzcGxheU5hbWUoXCJcIik7XG4gIH07XG4gIGNvbnN0IG9uQ2hhbmdlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKG5hbWUgPT09IFwidXNlckVtYWlsXCIpIHtcbiAgICAgIHNldEVtYWlsKHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwidXNlclBhc3N3b3JkXCIpIHtcbiAgICAgIHNldFBhc3N3b3JkKHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwiZGlzcGxheU5hbWVcIikge1xuICAgICAgc2V0RGlzcGxheU5hbWUodmFsdWUpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LThcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtYi0yIHRleHQtY2VudGVyIGZvbnQtYm9sZFwiPlNpZ24gVXA8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWJsdWUtNDAwIG14LWF1dG8gdy0xMS8xMiBtZDp3LTIvNCByb3VuZGVkIHB5LTggcHgtNCBtZDpweC04XCI+XG4gICAgICAgIHtlcnJvciAhPT0gbnVsbCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00IGJnLXJlZC02MDAgdy1mdWxsIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgbWItM1wiPlxuICAgICAgICAgICAge2Vycm9yfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRpc3BsYXlOYW1lXCIgY2xhc3NOYW1lPVwiYmxvY2tcIj5cbiAgICAgICAgICAgIERpc3BsYXkgTmFtZTpcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktMSBwLTEgdy1mdWxsIFwiXG4gICAgICAgICAgICBuYW1lPVwiZGlzcGxheU5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e2Rpc3BsYXlOYW1lfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFLmc6IEZhcnVxXCJcbiAgICAgICAgICAgIGlkPVwiZGlzcGxheU5hbWVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gb25DaGFuZ2VIYW5kbGVyKGV2ZW50KX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlckVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2tcIj5cbiAgICAgICAgICAgIEVtYWlsOlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktMSBwLTEgdy1mdWxsXCJcbiAgICAgICAgICAgIG5hbWU9XCJ1c2VyRW1haWxcIlxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFLmc6IGZhcnVxMTIzQGdtYWlsLmNvbVwiXG4gICAgICAgICAgICBpZD1cInVzZXJFbWFpbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBvbkNoYW5nZUhhbmRsZXIoZXZlbnQpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyUGFzc3dvcmRcIiBjbGFzc05hbWU9XCJibG9ja1wiPlxuICAgICAgICAgICAgUGFzc3dvcmQ6XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIG1iLTMgcC0xIHctZnVsbFwiXG4gICAgICAgICAgICBuYW1lPVwidXNlclBhc3N3b3JkXCJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBQYXNzd29yZFwiXG4gICAgICAgICAgICBpZD1cInVzZXJQYXNzd29yZFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBvbkNoYW5nZUhhbmRsZXIoZXZlbnQpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNDAwIGhvdmVyOmJnLWdyZWVuLTUwMCB3LWZ1bGwgcHktMiB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmRIYW5kbGVyKGV2ZW50LCBlbWFpbCwgcGFzc3dvcmQpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTaWduIHVwXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXktM1wiPm9yPC9wPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTYwMCB3LWZ1bGwgcHktMiB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgU2lnbiBJbiB3aXRoIEdvb2dsZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXktM1wiPlxuICAgICAgICAgIEFscmVhZHkgaGF2ZSBhbiBhY2NvdW50P3tcIiBcIn1cbiAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwIGhvdmVyOnRleHQtYmx1ZS02MDBcIj5cbiAgICAgICAgICAgIFNpZ24gaW4gaGVyZVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgU2lnblVwO1xuIl19