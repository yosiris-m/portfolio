import "./App.css";
import React from "react";
import Header from "./Component/Header";
import Main from "./Component/Main";
import { BrowserRouter as Router } from "react-router-dom";
import projectsList from "./data/list_projects";
import Footer from "./Component/Footer";

function App() {
  console.log("list", projectsList);

  return (
    <Router>
      <body className="body">
        <Header />
        <Main projectsList={projectsList} />
        <Footer />
      </body>
    </Router>
  );
}

export default App;
