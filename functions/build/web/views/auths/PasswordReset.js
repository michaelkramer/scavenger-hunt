"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const PasswordReset = () => {
  const [email, setEmail] = (0, _react.useState)("");
  const [emailHasBeenSent, setEmailHasBeenSent] = (0, _react.useState)(false);
  const [error, setError] = (0, _react.useState)(null);

  const onChangeHandler = event => {
    const {
      name,
      value
    } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    }
  };

  const sendResetEmail = event => {
    event.preventDefault();
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-8"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "text-xl text-center font-bold mb-3"
  }, "Reset your Password"), /*#__PURE__*/_react.default.createElement("div", {
    className: "border border-blue-300 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8"
  }, /*#__PURE__*/_react.default.createElement("form", {
    action: ""
  }, emailHasBeenSent && /*#__PURE__*/_react.default.createElement("div", {
    className: "py-3 bg-green-400 w-full text-white text-center mb-3"
  }, "An email has been sent to you!"), error !== null && /*#__PURE__*/_react.default.createElement("div", {
    className: "py-3 bg-red-600 w-full text-white text-center mb-3"
  }, error), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "userEmail",
    className: "w-full block"
  }, "Email:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "email",
    name: "userEmail",
    id: "userEmail",
    value: email,
    placeholder: "Input your email",
    onChange: onChangeHandler,
    className: "mb-3 w-full px-1 py-2"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "w-full bg-blue-400 text-white py-3"
  }, "Send me a reset link")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/",
    className: "my-2 text-blue-700 hover:text-blue-800 text-center block"
  }, "\u2190 back to sign in page")));
};

var _default = PasswordReset;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy93ZWIvdmlld3MvYXV0aHMvUGFzc3dvcmRSZXNldC50c3giXSwibmFtZXMiOlsiUGFzc3dvcmRSZXNldCIsImVtYWlsIiwic2V0RW1haWwiLCJlbWFpbEhhc0JlZW5TZW50Iiwic2V0RW1haWxIYXNCZWVuU2VudCIsImVycm9yIiwic2V0RXJyb3IiLCJvbkNoYW5nZUhhbmRsZXIiLCJldmVudCIsIm5hbWUiLCJ2YWx1ZSIsImN1cnJlbnRUYXJnZXQiLCJzZW5kUmVzZXRFbWFpbCIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUVBLE1BQU1BLGFBQWEsR0FBRyxNQUFNO0FBQzFCLFFBQU0sQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLElBQW9CLHFCQUFTLEVBQVQsQ0FBMUI7QUFDQSxRQUFNLENBQUNDLGdCQUFELEVBQW1CQyxtQkFBbkIsSUFBMEMscUJBQVMsS0FBVCxDQUFoRDtBQUNBLFFBQU0sQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLElBQW9CLHFCQUFTLElBQVQsQ0FBMUI7O0FBQ0EsUUFBTUMsZUFBZSxHQUFJQyxLQUFELElBQVc7QUFDakMsVUFBTTtBQUFFQyxNQUFBQSxJQUFGO0FBQVFDLE1BQUFBO0FBQVIsUUFBa0JGLEtBQUssQ0FBQ0csYUFBOUI7O0FBQ0EsUUFBSUYsSUFBSSxLQUFLLFdBQWIsRUFBMEI7QUFDeEJQLE1BQUFBLFFBQVEsQ0FBQ1EsS0FBRCxDQUFSO0FBQ0Q7QUFDRixHQUxEOztBQU1BLFFBQU1FLGNBQWMsR0FBSUosS0FBRCxJQUFXO0FBQ2hDQSxJQUFBQSxLQUFLLENBQUNLLGNBQU47QUFDRCxHQUZEOztBQUdBLHNCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFJLElBQUEsU0FBUyxFQUFDO0FBQWQsMkJBREYsZUFJRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBTSxJQUFBLE1BQU0sRUFBQztBQUFiLEtBQ0dWLGdCQUFnQixpQkFDZjtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsc0NBRkosRUFNR0UsS0FBSyxLQUFLLElBQVYsaUJBQ0M7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0dBLEtBREgsQ0FQSixlQVdFO0FBQU8sSUFBQSxPQUFPLEVBQUMsV0FBZjtBQUEyQixJQUFBLFNBQVMsRUFBQztBQUFyQyxjQVhGLGVBY0U7QUFDRSxJQUFBLElBQUksRUFBQyxPQURQO0FBRUUsSUFBQSxJQUFJLEVBQUMsV0FGUDtBQUdFLElBQUEsRUFBRSxFQUFDLFdBSEw7QUFJRSxJQUFBLEtBQUssRUFBRUosS0FKVDtBQUtFLElBQUEsV0FBVyxFQUFDLGtCQUxkO0FBTUUsSUFBQSxRQUFRLEVBQUVNLGVBTlo7QUFPRSxJQUFBLFNBQVMsRUFBQztBQVBaLElBZEYsZUF1QkU7QUFBUSxJQUFBLFNBQVMsRUFBQztBQUFsQiw0QkF2QkYsQ0FERixlQTRCRSw2QkFBQyxvQkFBRDtBQUNFLElBQUEsRUFBRSxFQUFDLEdBREw7QUFFRSxJQUFBLFNBQVMsRUFBQztBQUZaLG1DQTVCRixDQUpGLENBREY7QUEwQ0QsQ0F2REQ7O2VBd0RlUCxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY29uc3QgUGFzc3dvcmRSZXNldCA9ICgpID0+IHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2VtYWlsSGFzQmVlblNlbnQsIHNldEVtYWlsSGFzQmVlblNlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBvbkNoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChuYW1lID09PSBcInVzZXJFbWFpbFwiKSB7XG4gICAgICBzZXRFbWFpbCh2YWx1ZSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBzZW5kUmVzZXRFbWFpbCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC04XCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LWNlbnRlciBmb250LWJvbGQgbWItM1wiPlxuICAgICAgICBSZXNldCB5b3VyIFBhc3N3b3JkXG4gICAgICA8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWJsdWUtMzAwIG14LWF1dG8gdy0xMS8xMiBtZDp3LTIvNCByb3VuZGVkIHB5LTggcHgtNCBtZDpweC04XCI+XG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiPlxuICAgICAgICAgIHtlbWFpbEhhc0JlZW5TZW50ICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMyBiZy1ncmVlbi00MDAgdy1mdWxsIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgbWItM1wiPlxuICAgICAgICAgICAgICBBbiBlbWFpbCBoYXMgYmVlbiBzZW50IHRvIHlvdSFcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAge2Vycm9yICE9PSBudWxsICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMyBiZy1yZWQtNjAwIHctZnVsbCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIG1iLTNcIj5cbiAgICAgICAgICAgICAge2Vycm9yfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJFbWFpbFwiIGNsYXNzTmFtZT1cInctZnVsbCBibG9ja1wiPlxuICAgICAgICAgICAgRW1haWw6XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBuYW1lPVwidXNlckVtYWlsXCJcbiAgICAgICAgICAgIGlkPVwidXNlckVtYWlsXCJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5wdXQgeW91ciBlbWFpbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItMyB3LWZ1bGwgcHgtMSBweS0yXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsdWUtNDAwIHRleHQtd2hpdGUgcHktM1wiPlxuICAgICAgICAgICAgU2VuZCBtZSBhIHJlc2V0IGxpbmtcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIHRvPVwiL1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXktMiB0ZXh0LWJsdWUtNzAwIGhvdmVyOnRleHQtYmx1ZS04MDAgdGV4dC1jZW50ZXIgYmxvY2tcIlxuICAgICAgICA+XG4gICAgICAgICAgJmxhcnI7IGJhY2sgdG8gc2lnbiBpbiBwYWdlXG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFBhc3N3b3JkUmVzZXQ7XG4iXX0=