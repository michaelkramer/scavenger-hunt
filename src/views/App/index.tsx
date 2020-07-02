import React from "react";
import { StyleProvider } from "../theme/Style";
import UserProvider from "../contexts/UserProvider";
import EbayProvider from "../contexts/EbayProvider";
//import AuthUserProvider from "../contexts/AuthProvider";
import AppLayout from "../layout";
import "antd/dist/antd.css";

const App = () => {
  return (
    <StyleProvider>
      <UserProvider>
        {/* <AuthUserProvider> */}
        <EbayProvider>
          <AppLayout></AppLayout>
        </EbayProvider>
        {/* </AuthUserProvider> */}
      </UserProvider>
    </StyleProvider>
  );
};

export default App;
