import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import { Signin } from "./Components/Signin";
import { Signup } from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import { Toaster } from "react-hot-toast";
import News from "./Components/News";
import FinalDashboard from "./Components/FinalDashboard";

const App = () => {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            theme: {
              primary: "#4aed88",
            },
          },
        }}
      />
      <div className="h-max w-screen bg-[#FEFBFB]">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/news" element={<News />} />
          <Route path="/finaldashboard" element={<FinalDashboard />} />

        </Routes>
      </div>
    </>
  );
};

export default App;
