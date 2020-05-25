"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_jss_1 = tslib_1.__importDefault(require("react-jss"));
var theme_1 = require("./theme");
var Styles = function (styles) { return function (Component) {
    return react_jss_1.default(styles(theme_1.themeConfig))(Component);
}; };
exports.default = Styles;
//# sourceMappingURL=Style.jsx.map