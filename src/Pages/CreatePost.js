import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../Firebase/firebase-config";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login")
    }
  }, [])


  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGp">
          <label>Title...</label>
          <input
            placeholder="Enter Your Title Here"
            onChange={(event) => {
              setTitle(event.target.value);
              console.log(title);
            }}
          ></input>
        </div>
        <div className="inputGp">
          <label>Post:</label>
          <textarea placeholder="Write Your Blog Here"
            onChange={(event) => {
              setPostText(event.target.value);
              console.log(postText);
            }}
          ></textarea>
          <button onClick={createPost}>Submit Post</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
