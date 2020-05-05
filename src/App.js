import React from "react";
import "./App.css";
import Textbox from "./textbox.js";

function App() {
  return (
    <div>
      <h1 align="center">Note-app created using React framework </h1>
      <button className="create-button">Create new note</button>
      <Textbox />
    </div>
  );
}

export default App;
