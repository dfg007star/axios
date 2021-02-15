import React, { useState, useContext } from "react";
import axios from "axios";

import { PostsContext } from "../context/Post_context";

const PostForm = ({ handlerAnim }) => {
  const { posts, onFormSubmit } = useContext(PostsContext);
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`/api/v1/posts`, { title: value })
      .then((resp) => {
        const newArr = [...posts, resp.data.data];
        onFormSubmit(newArr);
        handlerAnim && handlerAnim(resp.data.data.id);
      })
      .catch((resp) => console.log(resp));
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="row g-3">
      <div className="col-auto">
        <label>
          <input
            value={value}
            className="form-control"
            placeholder="New post.."
            onChange={(event) => setValue(event.target.value)}
          ></input>
        </label>
      </div>
      <div className="col-auto">
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default PostForm;
