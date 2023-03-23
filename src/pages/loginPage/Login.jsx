import React from "react";
import styles from "./Login.module.css";
import { auth, provider } from "../../firebase-config";
import { signInWithPopup } from "firebase/auth";

import {useNavigate} from 'react-router-dom' 

const Login = ({ setIsAuth}) => {


  let navigate = useNavigate();

  const signInWithGoogle = () => {


    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("isAuth", true);
        
        setIsAuth(true);
        navigate("/");
        

      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={styles.login}>
      <button className={styles.loginButton} onClick={signInWithGoogle}>
        Login with Google 🎯
      </button>
    </div>
  );
};

export default Login;
