import "./App.css";
import React from "react";
import Header from "./Component/Header";
import Main from "./Component/Main";
import { BrowserRouter as Router } from "react-router-dom";
import projectsList from "./data/list_projects";

function App() {
  console.log("list", projectsList);

  return (
    <Router>
      <div className="body">
        <Header />
        <Main projectsList={projectsList} />
      </div>
    </Router>
  );
}

export default App;
