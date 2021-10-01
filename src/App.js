import "./App.css";
import React from "react";
import Header from "./Component/Header";
import Main from "./Component/Main";
import { BrowserRouter as Router } from "react-router-dom";
import projectsList from "./data/list_projects";
import Footer from "./Component/Footer";
import NavBar from "./Component/nav/NavBar";

function App() {
  console.log("list", projectsList);

  return (
    <Router>
      <NavBar />
      <Header />
      <Main projectsList={projectsList} />
      <Footer />
    </Router>
  );
}

export default App;
