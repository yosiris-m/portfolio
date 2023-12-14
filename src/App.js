import "./_App.scss";
import React from "react";
import Main from "./Component/main/Main";
import { BrowserRouter as Router } from "react-router-dom";
import projectsList from "./data/list_projects";
import Footer from "./Component/Footer";

function App() {
  return (
    <Router>
      <Main projectsList={projectsList} />
      <Footer />
    </Router>
  );
}

export default App;
