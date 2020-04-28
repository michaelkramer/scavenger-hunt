import React from "react";
import { Layout } from "antd";
import SignIn from "./auths/SignIn";
import Style from "./theme/Style";

const App = ({ classes }) => {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Content className={classes.container}>
          Some cool text
          <SignIn />
        </Content>
        <Sider>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};
const styles = (theme) => ({
  container: {
    color: "#f00",
  },
});
export default Style(styles)(App);
