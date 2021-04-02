import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../fireBase.config';
import GoogleLogin from '../GoogleLogin/GoogleLogin'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}
const Login = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const [newUser, setNewUser] = useState({
      email: '',
      password: '',
      error: '',
      success: false,
  })

// PassWord Show And Hide Start
  const myFunction = () => {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

// PassWord Show And Hide End


  const handleChange = (e) => {
      let isFormValid
      if (e.target.name === 'email') {
          isFormValid = /\S+@\S+\.\S+/.test(e.target.value);

      }
      if (e.target.name === 'password') {
          const passIsvalid = e.target.value.length > 6;
          const passValidCheck = /\d{1}/.test(e.target.value)
          isFormValid = passIsvalid && passValidCheck;
      }
      if (isFormValid) {
          // console.log('bangladesh');
          const newUserInfo = { ...newUser }
          newUserInfo[e.target.name] = e.target.value;
          setNewUser(newUserInfo)
      }
  }
  const handleSubmit = (e) => {
      if (newUser.email && newUser.password) {
          firebase.auth().signInWithEmailAndPassword(newUser.email, newUser.password)
              .then(res => {
                const {displayName, email, photoURL} = res.user
                const newUser = {
                  name:displayName,
                  email:email,
                  userProfile:photoURL
                }
                  setLoggedInUser(newUser)
                  history.replace(from);

              })
              .catch((error) => {
                  const newUserInfo = { ...newUser }
                  newUserInfo.error = error.message;
                  newUserInfo.success = false;
                  setNewUser(newUserInfo)
              });
      }
      e.preventDefault()
  }
  return (
    <div className="container">
    <div className="main-content-wrap">
        <div className="login-area-wrap">

            <form onSubmit={handleSubmit} className="registetion-form">
                  <h3><span className="title-color">Login</span> Your Account</h3>
                  <input onChange={handleChange} type="email" name='email' placeholder="email" required />
                  <input onChange={handleChange} type="password" name='password' placeholder="Password" id="myInput" required />
                  <i onClick={myFunction}>{eye}</i>{" "}
                  <input type="submit" className='btn btn-primary' value='Login' />
            </form>
          <GoogleLogin></GoogleLogin>
        </div>
    </div>
</div>

 );
};

export default Login;
