import React, { useState, useEffect } from "react";
import styles from "./CreatePost.module.css";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollection = collection(db, "posts");

  let navigate = useNavigate();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handlePostText = (e) => {
    setPostText(e.target.value);
  };
  const handlePost = async () => {
    await addDoc(postsCollection, {
      title,
      postText,
      date: new Date(),
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);
  return (
    <div className={styles.createPost}>
      <div className={styles.postContainer}>
        <h1>Create a post </h1>
        <div className={styles.inputCp}>
          <label htmlFor=""> Title</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Title"
            onChange={handleTitle}
          />
        </div>
        <div className={styles.inputCp}>
          <label htmlFor=""> Post</label>
          <textarea
            className={styles.input}
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Post..."
            onChange={handlePostText}
          ></textarea>
        </div>
        <button className={styles.postBtn} onClick={handlePost}>
          Submit 📥
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
