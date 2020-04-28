"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Google = _interopRequireDefault(require("./auths/Google"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { Switch, Route } from "react-router";
//import { Link } from "react-router-dom";
//import database from 'firebase-database';
class App extends _react.default.Component {
  constructor(props) {
    super(props); // check to see if we have existing server-rendered data
    // sets the state if we do, otherwise initialize it to an empty state

    if (props.state) {
      this.state = props.state;
    } else {
      this.state = {
        employees: {},
        currentEmployee: {}
      };
    }
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", null, "Hi mom Are you cool?", this.props.state.name, /*#__PURE__*/_react.default.createElement(_Google.default, null));
  }

}

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93ZWIvdmlld3MvdGVtcC1BcHAudHN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiZW1wbG95ZWVzIiwiY3VycmVudEVtcGxveWVlIiwicmVuZGVyIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUlBOzs7O0FBSEE7QUFDQTtBQUNBO0FBT2UsTUFBTUEsR0FBTixTQUFrQkMsZUFBTUMsU0FBeEIsQ0FBMEM7QUFDdkRDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFnQjtBQUN6QixVQUFNQSxLQUFOLEVBRHlCLENBRXpCO0FBQ0E7O0FBQ0EsUUFBSUEsS0FBSyxDQUFDQyxLQUFWLEVBQWlCO0FBQ2YsV0FBS0EsS0FBTCxHQUFhRCxLQUFLLENBQUNDLEtBQW5CO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsV0FBS0EsS0FBTCxHQUFhO0FBQ1hDLFFBQUFBLFNBQVMsRUFBRSxFQURBO0FBRVhDLFFBQUFBLGVBQWUsRUFBRTtBQUZOLE9BQWI7QUFJRDtBQUNGOztBQUVEQyxFQUFBQSxNQUFNLEdBQUc7QUFDUCx3QkFDRSxrRUFDdUIsS0FBS0osS0FBTCxDQUFXQyxLQUFYLENBQWlCSSxJQUR4QyxlQUVFLDZCQUFDLGVBQUQsT0FGRixDQURGO0FBTUQ7O0FBdEJzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcbi8vaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG4vL2ltcG9ydCBkYXRhYmFzZSBmcm9tICdmaXJlYmFzZS1kYXRhYmFzZSc7XG5pbXBvcnQgR29vZ2xlIGZyb20gXCIuL2F1dGhzL0dvb2dsZVwiO1xuXG50eXBlICRQcm9wcyA9IHtcbiAgc3RhdGU6IGFueTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDwkUHJvcHM+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6ICRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICAvLyBjaGVjayB0byBzZWUgaWYgd2UgaGF2ZSBleGlzdGluZyBzZXJ2ZXItcmVuZGVyZWQgZGF0YVxuICAgIC8vIHNldHMgdGhlIHN0YXRlIGlmIHdlIGRvLCBvdGhlcndpc2UgaW5pdGlhbGl6ZSBpdCB0byBhbiBlbXB0eSBzdGF0ZVxuICAgIGlmIChwcm9wcy5zdGF0ZSkge1xuICAgICAgdGhpcy5zdGF0ZSA9IHByb3BzLnN0YXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBlbXBsb3llZXM6IHt9LFxuICAgICAgICBjdXJyZW50RW1wbG95ZWU6IHt9LFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIEhpIG1vbSBBcmUgeW91IGNvb2w/e3RoaXMucHJvcHMuc3RhdGUubmFtZX1cbiAgICAgICAgPEdvb2dsZSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19