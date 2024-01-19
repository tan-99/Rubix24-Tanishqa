import { Route, Routes } from "react-router-dom";
import './App.css';

//pages imported
import Home from "./pages/Home";
import UserRegistration from "./pages/UserRegistration";
import BusinessRegistration from "./pages/BusinessRegistration";
import BusinessDashboard from "./pages/BusinessDashboard";
import ComparePg from "./pages/ComparePg";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/userRegister" element={<UserRegistration />}></Route>
        <Route path="/businessRegister" element={<BusinessRegistration />}></Route>
        <Route path="/businessDashboard" element={<BusinessDashboard />}></Route>
        <Route path="/compare" element={<ComparePg />}></Route>
      </Routes>
    </div>
  );
}

export default App;
