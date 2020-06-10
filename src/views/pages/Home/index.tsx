import React, { useContext, useState } from "react";
import isEmpty from "lodash/isEmpty";
import UserProvider from "../../contexts/UserProvider";
import { Styles } from "../../theme/Style";
import { $ReactBaseProps } from "../../../types";

const LoginMsg =
  "Uh oh, there's nothing to show! " +
  "Login to see how much of your invaluable personal " +
  "data tech companies have at their disposal.";

const Home = ({ classes }: $ReactBaseProps) => {
  const { user } = useContext(UserProvider.context);
  const text = isEmpty(user) ? LoginMsg : "Explore Your Data";
  return (
    <div>
      <h3>Home</h3>
      <div>{text}</div>
      <div>
        User,
        <pre>{JSON.stringify(user, null, 4) || "No User Data"}</pre>
      </div>
    </div>
  );
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
export default Styles(styles)(Home);
