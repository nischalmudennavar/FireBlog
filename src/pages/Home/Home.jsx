import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../../firebase-config";

const Home = ({ isAuth }) => {
  const [postLists, setPostLists] = useState([]);
  const postCollectionRef = collection(db, "posts");
  const [loading, setLoading] = useState(true);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    setPostLists(postLists.filter((post) => post.id !== id));
    // id is the id of the post that we want to delete, if post.id and id match the post will be deleted the rest will be kept
  };

  useEffect(() => {
    setLoading(true);

    const getposts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostLists(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };

    getposts();
    setLoading(false);
  }, [postCollectionRef]);

  const posts = postLists.map((post, index) => {
    return (
      <div className={styles.post} key={index}>
        <h2>
          <span>{post.title} </span>
          {isAuth && post.author.id === auth.currentUser.uid && (
            <span className={styles.delete} onClick={() => deletePost(post.id)}>
              {"❌"}
            </span>
          )}
        </h2>
        <p>{post.postText}</p>
        <div className={styles.postFooter}>
          <span className={styles.name}>{post.author.name}</span>
          <span className={styles.date}>
            {post.date.toDate().toLocaleDateString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </span>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.home}>
      {/* {loading && <h2>Loading...</h2>}
      {postLists.length === 0 && !loading && <h3>No posts yet :( </h3>} */}

      {/*  add loading text with state
       */}
      {loading && <h2>Loading...</h2>}
      {postLists.length === 0 && !loading && <h3>No posts yet :( </h3>}
      {postLists.length > 0 && loading && posts}

      {posts}
    </div>
  );
};

export default Home;
