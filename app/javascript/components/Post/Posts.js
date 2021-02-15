import React, { useContext } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import PostActions from "./Post_actions";
import PostForm from "./Post_form.js";
import Post from "./Post";

const Posts = ({ posts }) => {
  const handlerAnim = () => {};
  const handlerAnimDel = (id) => {
    const idDel = id;
    return idDel;
  };

  return (
    <div className="row mt-4">
      <div className="col">
        <PostForm handlerAnim={handlerAnim} />
        <ul className="list-group list-group-flush">
          {posts.map((item, idx) => {
            {
              if (idx === 0 && handlerAnim) {
                return (
                  <Fade>
                    <li className="list-group-item" key={item.attributes.title}>
                      <Post item={item} />
                      <PostActions id={item.id} />
                    </li>
                  </Fade>
                );
              }
            }
            {
              if (item.id === handlerAnimDel) {
                console.log("delete");
                return (
                  <Slide left>
                    <li className="list-group-item" key={item.attributes.title}>
                      <Post item={item} />
                      <PostActions id={item.id} />
                    </li>
                  </Slide>
                );
              }
            }

            return (
              <li className="list-group-item" key={item.attributes.title}>
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
