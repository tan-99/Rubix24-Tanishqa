import { Route, Routes } from "react-router-dom";
import './App.css';

//pages imported
import Home from "./pages/Home";
import UserRegistration from "./pages/UserRegistration";
import BusinessRegistration from "./pages/BusinessRegistration";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/userRegister" element={<UserRegistration />}></Route>
        <Route path="/businessRegister" element={<BusinessRegistration />}></Route>
      </Routes>
    </div>
  );
}

export default App;
