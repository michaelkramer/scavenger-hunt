import React from "react";
import UserProvider from "./UserProvider";
const context = React.createContext(null);

const Authorization = (Component) => {
  //const history = useHistory();
  //const authorization = (condition) => condition(user);
  //const user = { test: "test" };
  return (props) => {
    const { user } = React.useContext(UserProvider.context);
    console.log("auth User: ", user);
    return <Component {...props} />;
  };

  // return (
  //   <context.Provider value={{ authorization }}>{children}</context.Provider>
  // );
};
//AuthUserProvider.context = context;
export default Authorization;
