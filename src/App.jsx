// Library
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import InfoCountry from "./components/InfoCountry";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<InfoCountry />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
