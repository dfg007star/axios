import React, { useState } from "react";

import PostForm from "./Post_form.js";
import Post from "./Post";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Posts = ({ posts }) => {
  const [newItem, setnewItem] = useState(null);
  const handlerAnim = (id) => {
    setnewItem(id);
  };

  return (
    <div className="row mt-4">
      <div className="col">
        <PostForm handlerAnim={handlerAnim} />
        <ul className="list-group list-group-flush">
          <TransitionGroup>
            {posts.map((item) => (
              <CSSTransition key={item.id} timeout={600} classNames="move" exit>
                <Post item={item} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ul>
      </div>
    </div>
  );
};

export default Posts;
