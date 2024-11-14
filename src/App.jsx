import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import { Signin } from "./Components/Signin";
import { Signup } from "./Components/Signup";
import Dashboard from "./Components/Dashboard";

const App = () => {
  return (
    <div className="h-screen w-screen bg-[#FEFBFB]">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
