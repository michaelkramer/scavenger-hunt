import React, { useContext } from "react";
import { useRoutes } from "hookrouter";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Layout } from "antd";
import { withStyles, StyleProvider } from "../theme/Style";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Routes from "../router";
import UserProvider from "../contexts/UserProvider";
import PageNotFound from "../components/PageNotFound";

const AppLayout = ({ classes }) => {
  const { Content } = Layout;
  //const { user } = useContext(UserProvider.context);
  const routeResult = useRoutes(Routes.routesAuthorized);
  const { theme } = React.useContext(StyleProvider.context);
  return (
    <Layout>
      <Layout.Header className={classNames(classes.header, classes.layout)}>
        <Header />
      </Layout.Header>

      <Content className={classNames(classes.layout, classes.container)}>
        {routeResult || <PageNotFound />}
      </Content>

      <Layout.Footer className={classNames(classes.footer, classes.layout)}>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
};

const styles = (_theme) => ({
  layout: {
    padding: "0 24px",
    [`@media (min-width: ${_theme.breakpoints.values.md}px)`]: {
      padding: "0 96px",
    },
  },
  header: {
    backgroundColor: _theme.palette.white,
    borderBottom: "1px solid #f0f0f0",
    height: "66px",
  },
  container: {
    color: "#f00",
    backgroundColor: _theme.palette.white,
    paddingTop: "24px",
    paddingBottom: "50px",
  },
  footer: {
    marginTop: "50px",
  },
});
export default withStyles(styles)(AppLayout);
