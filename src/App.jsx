// Library
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Home from "./components/Home";
import InfoCountry from "./components/InfoCountry";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":country" element={<InfoCountry />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
