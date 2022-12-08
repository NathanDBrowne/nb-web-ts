import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
