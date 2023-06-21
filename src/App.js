import Login from "./Registration/Login/Login";
import Home from "./Home";
import Register from "./Registers/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./index";
// import Header from "./component/Header";
// import Footers from "./footer/Footers";
// import Content from "./Content";
// import "/index.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
export default App;
