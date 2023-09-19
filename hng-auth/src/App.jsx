// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Gallery from "./page/Gallery";
import Login from "./page/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
