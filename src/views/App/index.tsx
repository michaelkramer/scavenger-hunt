import React from "react";
import { StyleProvider } from "../theme/Style";
import UserProvider from "../contexts/UserProvider";
import AppLayout from "../layout";
import "antd/dist/antd.css";

const App = () => {
  return (
    <StyleProvider>
      <UserProvider>
        <AppLayout></AppLayout>
      </UserProvider>
    </StyleProvider>
  );
};

export default App;
