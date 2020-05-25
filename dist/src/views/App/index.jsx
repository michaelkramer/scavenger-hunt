"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
// import { Layout } from "antd";
var Style_1 = tslib_1.__importDefault(require("../theme/Style"));
// import Header from "views/layout/Header";
// import Footer from "views/layout/Footer";
// import UserList from "views/UserList";
// import "antd/dist/antd.css";
var App = function (_a) {
    //const { Sider, Content } = Layout;
    var classes = _a.classes;
    return (<div>Something</div>
    // <Layout>
    //   <Layout.Header>
    //     <Header />
    //   </Layout.Header>
    //   <Layout>
    //     <Content className={classes.container}>
    //       Some cool text
    //       <UserList />
    //     </Content>
    //     <Sider>Sider</Sider>
    //   </Layout>
    //   <Layout.Footer>
    //     <Footer />
    //   </Layout.Footer>
    // </Layout>
    );
};
App.propTypes = {
    classes: prop_types_1.default.any,
};
var styles = function (_theme) { return ({
    layout: {
        color: "white",
    },
    container: {
        color: "#f00",
        padding: "20px",
    },
}); };
exports.default = Style_1.default(styles)(App);
//# sourceMappingURL=index.jsx.map