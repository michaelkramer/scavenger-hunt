// @ts-nocheck
import React from "react";
import { auth, provider } from "../Firebase";
import withFirebaseAuth from "react-with-firebase-auth";
import { Button } from "antd";
import "antd/dist/antd.css";
//import { Link } from "react-router-dom";

const SignIn = ({
  user,
  error,
  loading,
  setError,
  signOut,
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithGoogle,
  signInWithGithub,
  createUserWithEmailAndPassword,
}) => {
  return (
    <div>
      <Button type="primary">Test</Button>
    </div>
  );
};

const firebaseAppAuth = auth;
const providers = { googleProvider: provider };

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(SignIn);
