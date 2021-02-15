import React, { useState, useEffect } from "react";
import axios from "axios";

import Posts from "./Post/Posts";
import { PostsContext } from "./context/Post_context";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/posts.json")
      .then((resp) => setPosts(resp.data.data))
      .catch((resp) => console.log(resp));
  }, [posts.length]);

  const handlerSubmit = (val) => {
    setPosts(val);
  };

  return (
    <PostsContext.Provider value={{ posts, onFormSubmit: handlerSubmit }}>
      <div className="container root">
        <Posts posts={posts} />
      </div>
    </PostsContext.Provider>
  );
};

export default App;