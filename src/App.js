import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Title</h2>
      <label htmlFor="input">Input</label>
      <input id="input"></input>
      <a className="article__link" href="https://www.neuefische.de">
        Link
      </a>
    </article>
  );
}
