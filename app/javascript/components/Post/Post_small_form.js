import React, { useState, useContext } from "react";
import axios from "axios";

import { PostsContext } from "../context/Post_context";

const PostSmallForm = ({ id }) => {
  const PostContext = useContext(PostsContext);
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .patch(`/api/v1/posts/${id}`, { title: value })
      .then((resp) => PostContext.onFormSubmit([]))
      .catch((resp) => console.log(resp));
    setValue("");
  };

  return (
    <div class="d-flex align-items-center">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            value={value}
            className="form-control"
            placeholder="New post.."
            onChange={(event) => setValue(event.target.value)}
          ></input>
        </label>
        <button className="btn btn-primary ml-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostSmallForm;
