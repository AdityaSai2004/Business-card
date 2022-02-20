import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Top from "./top";
import Content from "./content";
import Footer from "./footer";
function Page() {
  return (
    <div>
      <Top />
      <Content />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
