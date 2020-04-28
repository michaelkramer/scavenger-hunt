import React from "react";
//import { BrowserRouter } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
const Google = () => {
  const user = null;
  return user ? (
    <ProfilePage />
  ) : (
    <div>
      <SignUp />
      <SignIn />
      <PasswordReset />
    </div>
  );
};
export default Google;
