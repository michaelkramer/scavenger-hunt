import React from "react";
import { Styles } from "../../theme/Style";
import User from "../../components/User";

const Login = ({ classes }) => {
  const loginOptions = [
    { title: "Facebook", link: "/auth/facebook" },
    { title: "Goodreads", link: "/auth/goodreads" },
  ];
  return (
    <div>
      <h3>Profile</h3>
      <div>
        <User />
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
export default Styles(styles)(Login);
