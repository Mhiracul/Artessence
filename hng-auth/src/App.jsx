// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Gallary from "./page/Gallary";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/gallery" element={<Gallary />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
