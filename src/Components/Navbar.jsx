import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

const Navbar = ({ isAuth, setIsAuth }) => {
  let navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("isAuth");
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        setIsAuth(false);
        localStorage.clear();

        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.navbar}>
      <Link className={styles.link} to="/">
        Home 🏡
      </Link>

      {!isAuth ? (
        <Link className={styles.link} to="/login">
          Login 🚪
        </Link>
      ) : (
        <>
          <Link className={styles.link} to="/createpost">
            Create Post 📝
          </Link>
          <button className={styles.logout} onClick={logOut}>
            {" "}
            Log Out
          </button>
        </>
      )}
    </div>
  );
};

export default Navbar;
