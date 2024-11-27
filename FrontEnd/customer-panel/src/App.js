import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Dashboard Route */}
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
