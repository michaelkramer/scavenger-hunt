"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Field = ({
  children
}) => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children, /*#__PURE__*/_react.default.createElement("br", null));

const Input = (_ref) => {
  let {
    value,
    onChange
  } = _ref,
      props = _objectWithoutProperties(_ref, ["value", "onChange"]);

  return /*#__PURE__*/_react.default.createElement("input", _extends({}, props, {
    value: value,
    onChange: event => onChange(event.target.value)
  }));
};

const SubmitButton = props => /*#__PURE__*/_react.default.createElement("button", props, "submit");

const UserForm = ({
  onSubmit
}) => {
  const [email, setEmail] = (0, _react.useState)("");
  const [password, setPassword] = (0, _react.useState)("");
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Field, null, "email: ", /*#__PURE__*/_react.default.createElement(Input, {
    value: email,
    onChange: setEmail
  })), /*#__PURE__*/_react.default.createElement(Field, null, "password:", " ", /*#__PURE__*/_react.default.createElement(Input, {
    value: password,
    onChange: setPassword,
    type: "password"
  })), /*#__PURE__*/_react.default.createElement(SubmitButton, {
    onClick: () => onSubmit(email, password)
  }));
};

var _default = UserForm;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93ZWIvdmlld3MvVXNlckZvcm0udHN4Il0sIm5hbWVzIjpbIkZpZWxkIiwiY2hpbGRyZW4iLCJJbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJwcm9wcyIsImV2ZW50IiwidGFyZ2V0IiwiU3VibWl0QnV0dG9uIiwiVXNlckZvcm0iLCJvblN1Ym1pdCIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBRCxrQkFDWiw2QkFBQyxjQUFELENBQU8sUUFBUCxRQUNHQSxRQURILGVBRUUsd0NBRkYsQ0FERjs7QUFPQSxNQUFNQyxLQUFLLEdBQUc7QUFBQSxNQUFDO0FBQUVDLElBQUFBLEtBQUY7QUFBU0MsSUFBQUE7QUFBVCxHQUFEO0FBQUEsTUFBdUJDLEtBQXZCOztBQUFBLHNCQUNaLG1EQUNNQSxLQUROO0FBRUUsSUFBQSxLQUFLLEVBQUVGLEtBRlQ7QUFHRSxJQUFBLFFBQVEsRUFBR0csS0FBRCxJQUFXRixRQUFRLENBQUNFLEtBQUssQ0FBQ0MsTUFBTixDQUFhSixLQUFkO0FBSC9CLEtBRFk7QUFBQSxDQUFkOztBQVFBLE1BQU1LLFlBQVksR0FBSUgsS0FBRCxpQkFBVyx1Q0FBWUEsS0FBWixXQUFoQzs7QUFFQSxNQUFNSSxRQUFRLEdBQUcsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLENBQUQsS0FBa0I7QUFDakMsUUFBTSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsSUFBb0IscUJBQVMsRUFBVCxDQUExQjtBQUNBLFFBQU0sQ0FBQ0MsUUFBRCxFQUFXQyxXQUFYLElBQTBCLHFCQUFTLEVBQVQsQ0FBaEM7QUFFQSxzQkFDRSw2QkFBQyxjQUFELENBQU8sUUFBUCxxQkFDRSw2QkFBQyxLQUFELGdDQUNTLDZCQUFDLEtBQUQ7QUFBTyxJQUFBLEtBQUssRUFBRUgsS0FBZDtBQUFxQixJQUFBLFFBQVEsRUFBRUM7QUFBL0IsSUFEVCxDQURGLGVBSUUsNkJBQUMsS0FBRCxxQkFDWSxHQURaLGVBRUUsNkJBQUMsS0FBRDtBQUFPLElBQUEsS0FBSyxFQUFFQyxRQUFkO0FBQXdCLElBQUEsUUFBUSxFQUFFQyxXQUFsQztBQUErQyxJQUFBLElBQUksRUFBQztBQUFwRCxJQUZGLENBSkYsZUFRRSw2QkFBQyxZQUFEO0FBQWMsSUFBQSxPQUFPLEVBQUUsTUFBTUosUUFBUSxDQUFDQyxLQUFELEVBQVFFLFFBQVI7QUFBckMsSUFSRixDQURGO0FBWUQsQ0FoQkQ7O2VBa0JlSixRIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLW5vY2hlY2tcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBGaWVsZCA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIHtjaGlsZHJlbn1cbiAgICA8YnIgLz5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cbmNvbnN0IElucHV0ID0gKHsgdmFsdWUsIG9uQ2hhbmdlLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxpbnB1dFxuICAgIHsuLi5wcm9wc31cbiAgICB2YWx1ZT17dmFsdWV9XG4gICAgb25DaGFuZ2U9eyhldmVudCkgPT4gb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgLz5cbik7XG5cbmNvbnN0IFN1Ym1pdEJ1dHRvbiA9IChwcm9wcykgPT4gPGJ1dHRvbiB7Li4ucHJvcHN9PnN1Ym1pdDwvYnV0dG9uPjtcblxuY29uc3QgVXNlckZvcm0gPSAoeyBvblN1Ym1pdCB9KSA9PiB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8RmllbGQ+XG4gICAgICAgIGVtYWlsOiA8SW5wdXQgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17c2V0RW1haWx9IC8+XG4gICAgICA8L0ZpZWxkPlxuICAgICAgPEZpZWxkPlxuICAgICAgICBwYXNzd29yZDp7XCIgXCJ9XG4gICAgICAgIDxJbnB1dCB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtzZXRQYXNzd29yZH0gdHlwZT1cInBhc3N3b3JkXCIgLz5cbiAgICAgIDwvRmllbGQ+XG4gICAgICA8U3VibWl0QnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uU3VibWl0KGVtYWlsLCBwYXNzd29yZCl9IC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJGb3JtO1xuIl19