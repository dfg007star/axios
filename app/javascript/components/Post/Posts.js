import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

import PostActions from "./Post_actions";
import PostForm from "./Post_form.js";
import Post from "./Post";

const Posts = ({ posts }) => {
  const [animDel, setAnimDel] = useState(null);
  const [newItem, setnewItem] = useState(null);

  useEffect(() => {
    setnewItem(null);
    setAnimDel(null);
  }, [animDel, animDel]);
  const handlerAnim = (id) => {
    setnewItem(id);
  };
  const handlerAnimDel = (id) => {
    setAnimDel(id);
  };

  return (
    <div className="row mt-4">
      <div className="col">
        <PostForm handlerAnim={handlerAnim} />
        <ul className="list-group list-group-flush">
          {posts.map((item, idx) => {
            {
              if (item.id === newItem && !animDel) {
                return (
                  <Fade>
                    <li className="list-group-item" key={item.id}>
                      <Post item={item} />
                      <PostActions
                        id={item.id}
                        handlerAnimDel={handlerAnimDel}
                      />
                    </li>
                  </Fade>
                );
              }
            }
            {
              if (item.id === animDel) {
                console.log("del");
                <Bounce left>
                  <li className="list-group-item" key={item.id}>
                    <Post item={item} />
                    <PostActions id={item.id} handlerAnimDel={handlerAnimDel} />
                  </li>
                </Bounce>;
              }
            }
            return (
              <li className="list-group-item" key={item.id}>
                <Post item={item} />
                <PostActions id={item.id} handlerAnimDel={handlerAnimDel} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Posts;
