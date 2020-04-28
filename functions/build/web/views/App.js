"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var firebase = _interopRequireWildcard(require("./Firebase"));

var _reactWithFirebaseAuth = _interopRequireDefault(require("react-with-firebase-auth"));

var _UserForm = _interopRequireDefault(require("./UserForm"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-nocheck
const FormWrapper = ({
  children
}) => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
  style: {
    marginLeft: "1.34em"
  }
}, children), /*#__PURE__*/_react.default.createElement("hr", null));

const Loading = () => /*#__PURE__*/_react.default.createElement("div", {
  style: {
    position: "fixed",
    display: "flex",
    top: 0,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "2.68em",
    background: "green",
    color: "white"
  }
}, "Loading..");

const App = ({
  user,
  error,
  loading,
  setError,
  signOut,
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithGoogle,
  signInWithGithub,
  createUserWithEmailAndPassword
}) => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, loading && /*#__PURE__*/_react.default.createElement(Loading, null), /*#__PURE__*/_react.default.createElement(FormWrapper, null, /*#__PURE__*/_react.default.createElement("h1", null, "react-with-firebase-auth"), /*#__PURE__*/_react.default.createElement("h3", null, "a very simple demo showing it in action"), /*#__PURE__*/_react.default.createElement("h3", null, "see user data and errors in the end of this page")), /*#__PURE__*/_react.default.createElement(FormWrapper, null, /*#__PURE__*/_react.default.createElement("h1", null, "create user"), /*#__PURE__*/_react.default.createElement(_UserForm.default, {
  onSubmit: createUserWithEmailAndPassword
})), /*#__PURE__*/_react.default.createElement(FormWrapper, null, /*#__PURE__*/_react.default.createElement("h1", null, "sign in"), /*#__PURE__*/_react.default.createElement(_UserForm.default, {
  onSubmit: signInWithEmailAndPassword
})), /*#__PURE__*/_react.default.createElement(FormWrapper, null, /*#__PURE__*/_react.default.createElement("h1", null, "sign in with google"), /*#__PURE__*/_react.default.createElement("button", {
  onClick: signInWithGoogle
}, "sign in with google")), /*#__PURE__*/_react.default.createElement(FormWrapper, null, /*#__PURE__*/_react.default.createElement("h1", null, "sign in with github"), /*#__PURE__*/_react.default.createElement("h3", null, "(no provider setup, good to see error message)"), /*#__PURE__*/_react.default.createElement("button", {
  onClick: signInWithGithub
}, "sign in with github")), /*#__PURE__*/_react.default.createElement(FormWrapper, null, /*#__PURE__*/_react.default.createElement("h1", null, "sign in anonymously"), /*#__PURE__*/_react.default.createElement("h3", null, "(failing due to permissions, good to see error message)"), /*#__PURE__*/_react.default.createElement("button", {
  onClick: signInAnonymously
}, "sign in anonymously")), /*#__PURE__*/_react.default.createElement(FormWrapper, null, /*#__PURE__*/_react.default.createElement("h1", null, "sign out"), /*#__PURE__*/_react.default.createElement("button", {
  onClick: signOut
}, "sign out")), /*#__PURE__*/_react.default.createElement(FormWrapper, null, /*#__PURE__*/_react.default.createElement("h1", null, "clear error"), /*#__PURE__*/_react.default.createElement("button", {
  onClick: () => setError(null)
}, "clear error")), /*#__PURE__*/_react.default.createElement(FormWrapper, null, /*#__PURE__*/_react.default.createElement("h1", null, "user data"), /*#__PURE__*/_react.default.createElement("textarea", {
  style: {
    width: 350,
    height: 200
  },
  value: JSON.stringify(user, null, 2)
})), /*#__PURE__*/_react.default.createElement(FormWrapper, null, /*#__PURE__*/_react.default.createElement("h1", null, "error data"), /*#__PURE__*/_react.default.createElement("textarea", {
  style: {
    width: 350,
    height: 200
  },
  value: error
})));

const firebaseAppAuth = firebase.auth; // test

const providers = {
  googleProvider: firebase.provider
};

var _default = (0, _reactWithFirebaseAuth.default)({
  providers,
  firebaseAppAuth
})(App);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93ZWIvdmlld3MvQXBwLnRzeCJdLCJuYW1lcyI6WyJGb3JtV3JhcHBlciIsImNoaWxkcmVuIiwibWFyZ2luTGVmdCIsIkxvYWRpbmciLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJ0b3AiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmQiLCJjb2xvciIsIkFwcCIsInVzZXIiLCJlcnJvciIsImxvYWRpbmciLCJzZXRFcnJvciIsInNpZ25PdXQiLCJzaWduSW5Bbm9ueW1vdXNseSIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbkluV2l0aEdvb2dsZSIsInNpZ25JbldpdGhHaXRodWIiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJKU09OIiwic3RyaW5naWZ5IiwiZmlyZWJhc2VBcHBBdXRoIiwiZmlyZWJhc2UiLCJhdXRoIiwicHJvdmlkZXJzIiwiZ29vZ2xlUHJvdmlkZXIiLCJwcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUpBO0FBTUEsTUFBTUEsV0FBVyxHQUFHLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELGtCQUNsQix5RUFDRTtBQUFLLEVBQUEsS0FBSyxFQUFFO0FBQUVDLElBQUFBLFVBQVUsRUFBRTtBQUFkO0FBQVosR0FBdUNELFFBQXZDLENBREYsZUFFRSx3Q0FGRixDQURGOztBQU9BLE1BQU1FLE9BQU8sR0FBRyxtQkFDZDtBQUNFLEVBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLFFBQVEsRUFBRSxPQURMO0FBRUxDLElBQUFBLE9BQU8sRUFBRSxNQUZKO0FBR0xDLElBQUFBLEdBQUcsRUFBRSxDQUhBO0FBSUxDLElBQUFBLFVBQVUsRUFBRSxRQUpQO0FBS0xDLElBQUFBLGNBQWMsRUFBRSxRQUxYO0FBTUxDLElBQUFBLEtBQUssRUFBRSxNQU5GO0FBT0xDLElBQUFBLE1BQU0sRUFBRSxRQVBIO0FBUUxDLElBQUFBLFVBQVUsRUFBRSxPQVJQO0FBU0xDLElBQUFBLEtBQUssRUFBRTtBQVRGO0FBRFQsZUFERjs7QUFrQkEsTUFBTUMsR0FBRyxHQUFHLENBQUM7QUFDWEMsRUFBQUEsSUFEVztBQUdYQyxFQUFBQSxLQUhXO0FBS1hDLEVBQUFBLE9BTFc7QUFPWEMsRUFBQUEsUUFQVztBQVNYQyxFQUFBQSxPQVRXO0FBV1hDLEVBQUFBLGlCQVhXO0FBYVhDLEVBQUFBLDBCQWJXO0FBZVhDLEVBQUFBLGdCQWZXO0FBaUJYQyxFQUFBQSxnQkFqQlc7QUFtQlhDLEVBQUFBO0FBbkJXLENBQUQsa0JBcUJWLDZCQUFDLGNBQUQsQ0FBTyxRQUFQLFFBQ0dQLE9BQU8saUJBQUksNkJBQUMsT0FBRCxPQURkLGVBR0UsNkJBQUMsV0FBRCxxQkFDRSxvRUFERixlQUVFLG1GQUZGLGVBR0UsNEZBSEYsQ0FIRixlQVNFLDZCQUFDLFdBQUQscUJBQ0UsdURBREYsZUFFRSw2QkFBQyxpQkFBRDtBQUFVLEVBQUEsUUFBUSxFQUFFTztBQUFwQixFQUZGLENBVEYsZUFjRSw2QkFBQyxXQUFELHFCQUNFLG1EQURGLGVBRUUsNkJBQUMsaUJBQUQ7QUFBVSxFQUFBLFFBQVEsRUFBRUg7QUFBcEIsRUFGRixDQWRGLGVBbUJFLDZCQUFDLFdBQUQscUJBQ0UsK0RBREYsZUFFRTtBQUFRLEVBQUEsT0FBTyxFQUFFQztBQUFqQix5QkFGRixDQW5CRixlQXdCRSw2QkFBQyxXQUFELHFCQUNFLCtEQURGLGVBRUUsMEZBRkYsZUFHRTtBQUFRLEVBQUEsT0FBTyxFQUFFQztBQUFqQix5QkFIRixDQXhCRixlQThCRSw2QkFBQyxXQUFELHFCQUNFLCtEQURGLGVBRUUsbUdBRkYsZUFHRTtBQUFRLEVBQUEsT0FBTyxFQUFFSDtBQUFqQix5QkFIRixDQTlCRixlQW9DRSw2QkFBQyxXQUFELHFCQUNFLG9EQURGLGVBRUU7QUFBUSxFQUFBLE9BQU8sRUFBRUQ7QUFBakIsY0FGRixDQXBDRixlQXlDRSw2QkFBQyxXQUFELHFCQUNFLHVEQURGLGVBRUU7QUFBUSxFQUFBLE9BQU8sRUFBRSxNQUFNRCxRQUFRLENBQUMsSUFBRDtBQUEvQixpQkFGRixDQXpDRixlQThDRSw2QkFBQyxXQUFELHFCQUNFLHFEQURGLGVBRUU7QUFDRSxFQUFBLEtBQUssRUFBRTtBQUFFUixJQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxJQUFBQSxNQUFNLEVBQUU7QUFBdEIsR0FEVDtBQUVFLEVBQUEsS0FBSyxFQUFFYyxJQUFJLENBQUNDLFNBQUwsQ0FBZVgsSUFBZixFQUFxQixJQUFyQixFQUEyQixDQUEzQjtBQUZULEVBRkYsQ0E5Q0YsZUFzREUsNkJBQUMsV0FBRCxxQkFDRSxzREFERixlQUVFO0FBQVUsRUFBQSxLQUFLLEVBQUU7QUFBRUwsSUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsSUFBQUEsTUFBTSxFQUFFO0FBQXRCLEdBQWpCO0FBQThDLEVBQUEsS0FBSyxFQUFFSztBQUFyRCxFQUZGLENBdERGLENBckJGOztBQWtGQSxNQUFNVyxlQUFlLEdBQUdDLFFBQVEsQ0FBQ0MsSUFBakMsQyxDQUNBOztBQUNBLE1BQU1DLFNBQVMsR0FBRztBQUFFQyxFQUFBQSxjQUFjLEVBQUVILFFBQVEsQ0FBQ0k7QUFBM0IsQ0FBbEI7O2VBRWUsb0NBQWlCO0FBQzlCRixFQUFBQSxTQUQ4QjtBQUU5QkgsRUFBQUE7QUFGOEIsQ0FBakIsRUFHWmIsR0FIWSxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLW5vY2hlY2tcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gXCIuL0ZpcmViYXNlXCI7XG5pbXBvcnQgd2l0aEZpcmViYXNlQXV0aCBmcm9tIFwicmVhY3Qtd2l0aC1maXJlYmFzZS1hdXRoXCI7XG5pbXBvcnQgVXNlckZvcm0gZnJvbSBcIi4vVXNlckZvcm1cIjtcblxuY29uc3QgRm9ybVdyYXBwZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDw+XG4gICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjEuMzRlbVwiIH19PntjaGlsZHJlbn08L2Rpdj5cbiAgICA8aHIgLz5cbiAgPC8+XG4pO1xuXG5jb25zdCBMb2FkaW5nID0gKCkgPT4gKFxuICA8ZGl2XG4gICAgc3R5bGU9e3tcbiAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIHRvcDogMCxcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIGhlaWdodDogXCIyLjY4ZW1cIixcbiAgICAgIGJhY2tncm91bmQ6IFwiZ3JlZW5cIixcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgfX1cbiAgPlxuICAgIExvYWRpbmcuLlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IEFwcCA9ICh7XG4gIHVzZXIsXG5cbiAgZXJyb3IsXG5cbiAgbG9hZGluZyxcblxuICBzZXRFcnJvcixcblxuICBzaWduT3V0LFxuXG4gIHNpZ25JbkFub255bW91c2x5LFxuXG4gIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuXG4gIHNpZ25JbldpdGhHb29nbGUsXG5cbiAgc2lnbkluV2l0aEdpdGh1YixcblxuICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsXG59KSA9PiAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICB7bG9hZGluZyAmJiA8TG9hZGluZyAvPn1cblxuICAgIDxGb3JtV3JhcHBlcj5cbiAgICAgIDxoMT5yZWFjdC13aXRoLWZpcmViYXNlLWF1dGg8L2gxPlxuICAgICAgPGgzPmEgdmVyeSBzaW1wbGUgZGVtbyBzaG93aW5nIGl0IGluIGFjdGlvbjwvaDM+XG4gICAgICA8aDM+c2VlIHVzZXIgZGF0YSBhbmQgZXJyb3JzIGluIHRoZSBlbmQgb2YgdGhpcyBwYWdlPC9oMz5cbiAgICA8L0Zvcm1XcmFwcGVyPlxuXG4gICAgPEZvcm1XcmFwcGVyPlxuICAgICAgPGgxPmNyZWF0ZSB1c2VyPC9oMT5cbiAgICAgIDxVc2VyRm9ybSBvblN1Ym1pdD17Y3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkfSAvPlxuICAgIDwvRm9ybVdyYXBwZXI+XG5cbiAgICA8Rm9ybVdyYXBwZXI+XG4gICAgICA8aDE+c2lnbiBpbjwvaDE+XG4gICAgICA8VXNlckZvcm0gb25TdWJtaXQ9e3NpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkfSAvPlxuICAgIDwvRm9ybVdyYXBwZXI+XG5cbiAgICA8Rm9ybVdyYXBwZXI+XG4gICAgICA8aDE+c2lnbiBpbiB3aXRoIGdvb2dsZTwvaDE+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NpZ25JbldpdGhHb29nbGV9PnNpZ24gaW4gd2l0aCBnb29nbGU8L2J1dHRvbj5cbiAgICA8L0Zvcm1XcmFwcGVyPlxuXG4gICAgPEZvcm1XcmFwcGVyPlxuICAgICAgPGgxPnNpZ24gaW4gd2l0aCBnaXRodWI8L2gxPlxuICAgICAgPGgzPihubyBwcm92aWRlciBzZXR1cCwgZ29vZCB0byBzZWUgZXJyb3IgbWVzc2FnZSk8L2gzPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaWduSW5XaXRoR2l0aHVifT5zaWduIGluIHdpdGggZ2l0aHViPC9idXR0b24+XG4gICAgPC9Gb3JtV3JhcHBlcj5cblxuICAgIDxGb3JtV3JhcHBlcj5cbiAgICAgIDxoMT5zaWduIGluIGFub255bW91c2x5PC9oMT5cbiAgICAgIDxoMz4oZmFpbGluZyBkdWUgdG8gcGVybWlzc2lvbnMsIGdvb2QgdG8gc2VlIGVycm9yIG1lc3NhZ2UpPC9oMz5cbiAgICAgIDxidXR0b24gb25DbGljaz17c2lnbkluQW5vbnltb3VzbHl9PnNpZ24gaW4gYW5vbnltb3VzbHk8L2J1dHRvbj5cbiAgICA8L0Zvcm1XcmFwcGVyPlxuXG4gICAgPEZvcm1XcmFwcGVyPlxuICAgICAgPGgxPnNpZ24gb3V0PC9oMT5cbiAgICAgIDxidXR0b24gb25DbGljaz17c2lnbk91dH0+c2lnbiBvdXQ8L2J1dHRvbj5cbiAgICA8L0Zvcm1XcmFwcGVyPlxuXG4gICAgPEZvcm1XcmFwcGVyPlxuICAgICAgPGgxPmNsZWFyIGVycm9yPC9oMT5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RXJyb3IobnVsbCl9PmNsZWFyIGVycm9yPC9idXR0b24+XG4gICAgPC9Gb3JtV3JhcHBlcj5cblxuICAgIDxGb3JtV3JhcHBlcj5cbiAgICAgIDxoMT51c2VyIGRhdGE8L2gxPlxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiAzNTAsIGhlaWdodDogMjAwIH19XG4gICAgICAgIHZhbHVlPXtKU09OLnN0cmluZ2lmeSh1c2VyLCBudWxsLCAyKX1cbiAgICAgIC8+XG4gICAgPC9Gb3JtV3JhcHBlcj5cblxuICAgIDxGb3JtV3JhcHBlcj5cbiAgICAgIDxoMT5lcnJvciBkYXRhPC9oMT5cbiAgICAgIDx0ZXh0YXJlYSBzdHlsZT17eyB3aWR0aDogMzUwLCBoZWlnaHQ6IDIwMCB9fSB2YWx1ZT17ZXJyb3J9IC8+XG4gICAgPC9Gb3JtV3JhcHBlcj5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cbmNvbnN0IGZpcmViYXNlQXBwQXV0aCA9IGZpcmViYXNlLmF1dGg7XG4vLyB0ZXN0XG5jb25zdCBwcm92aWRlcnMgPSB7IGdvb2dsZVByb3ZpZGVyOiBmaXJlYmFzZS5wcm92aWRlciB9O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRmlyZWJhc2VBdXRoKHtcbiAgcHJvdmlkZXJzLFxuICBmaXJlYmFzZUFwcEF1dGgsXG59KShBcHApO1xuIl19