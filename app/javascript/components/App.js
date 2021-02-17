import React, { useState, useEffect } from "react";
import axios from "axios";

import Posts from "./post/Posts";
import Fade from "react-reveal/Fade";
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
      <Fade top>
        <div className="container root">
          <Posts posts={posts} />
        </div>
      </Fade>
    </PostsContext.Provider>
  );
};

export default App;
