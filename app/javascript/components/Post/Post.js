import React, { useState } from "react";

const Post = ({ item }) => {
  const [show, setShow] = useState(false);
  const handlerClick = () => {
    setShow(!show);
  };

  return (
    <>
      <a
        onClick={() => {
          handlerClick();
        }}
      >
        <h2>{item.attributes.title}</h2>
      </a>
      {show && <h2>{(item.id, item.type)}</h2>}
    </>
  );
};

export default Post;
