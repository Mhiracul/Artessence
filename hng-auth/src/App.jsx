// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Gallary from "./page/Gallary";
import Signup from "./page/Signup";
import VerifyEmail from "./page/VerifyEmail";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route path="/" element={<Gallary />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
