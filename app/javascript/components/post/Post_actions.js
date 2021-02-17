import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import Bounce from "react-reveal/Bounce";

import { PostsContext } from "../context/Post_context";
import PostSmallForm from "./Post_small_form";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostActions = ({ id }) => {
  const { posts, onFormSubmit } = useContext(PostsContext);
  const [form, setForm] = useState(false);
  console.log("urlll", posts);

  const handlerClickDelete = (id) => {
    axios
      .delete(`/api/v1/posts/${id}`)
      .then(() => {
        const newArr = posts.filter((item) => item.id !== id);
        onFormSubmit(newArr);
      })
      .catch((resp) => console.log(resp));
  };

  const formEdit = () => {
    setForm(!form);
  };
  const handleForm = () => {
    setForm(!form);
  };

  return (
    <div className="d-flex flex-row justify-content-between align-items-start">
      <div className="d-flex align-items-center mb-3">
        <button className="btn btn-primary mr-2" onClick={formEdit}>
          {form ? "Hide" : "Show"} Edit
        </button>
      </div>
      <CSSTransition in={form} timeout={600} classNames="small-form">
        <div>
          {form && (
            <div className="d-flex align-items-start">
              <PostSmallForm id={id} handleForm={handleForm} />
              <button
                className="btn btn-danger ml-2"
                onClick={() => {
                  handlerClickDelete(id);
                }}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </CSSTransition>
    </div>
  );
};

export default PostActions;
