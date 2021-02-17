import React, { useState } from "react";
import PostActions from "./Post_actions";

const Post = ({ item }) => {
  const [show, setShow] = useState(false);
  const handlerClick = () => {
    setShow(!show);
  };

  return (
    <li className="list-group-item" key={item.id}>
      <h2
        onClick={() => {
          handlerClick();
        }}
      >
        {item.attributes.title}
      </h2>
      {show && <h2>{(item.id, item.type)}</h2>}
      <PostActions id={item.id} />
    </li>
  );
};

export default Post;
