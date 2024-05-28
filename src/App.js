import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Dashboard/Home";
import CreateBlog from "./components/Dashboard/CreateBlog";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/create" Component={CreateBlog} />
          <Route exact path="/" Component={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
