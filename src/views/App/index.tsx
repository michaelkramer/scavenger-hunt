import * as React from "react";
import PropTypes from "prop-types";
// import { Layout } from "antd";
import Style from "../theme/Style";
// import Header from "views/layout/Header";
// import Footer from "views/layout/Footer";
// import UserList from "views/UserList";
// import "antd/dist/antd.css";

const App = ({ classes }) => {
  //const { Sider, Content } = Layout;

  return (
    <div>Something</div>
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
  classes: PropTypes.any,
};

const styles = (_theme) => ({
  layout: {
    color: "white",
  },
  container: {
    color: "#f00",
    padding: "20px",
  },
});
export default Style(styles)(App);
