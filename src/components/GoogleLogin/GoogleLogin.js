import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../fireBase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
const GoogleLogin = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const provider = new firebase.auth.GoogleAuthProvider();
  // Google Sign In System
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { displayName, email, photoURL } = res.user;
        const newUser = {
          name: displayName,
          email: email,
          userProfile: photoURL,
        };
        setLoggedInUser(newUser);
        history.replace(from);

      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };
  return (
    <div className="social-area">
      <div className="divide-area">
        <span>OR</span>
      </div>
      <div className="social-account-wrap">
        <button onClick={handleGoogleSignIn}>
          <i className="fab fa-google"></i>
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
