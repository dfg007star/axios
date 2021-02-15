import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App";
import Fade from "react-reveal/Fade";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Fade top>
      <App />
    </Fade>,
    document.body.appendChild(document.createElement("div"))
  );
});
