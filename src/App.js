import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import SuccessPage from "./component/SuccessPage";
import Register from "./component/Register";

function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/successPage" element={<SuccessPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
