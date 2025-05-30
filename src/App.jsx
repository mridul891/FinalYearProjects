import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import { Signin } from "./Components/Signin";
import { Signup } from "./Components/Signup";
import { Toaster } from "react-hot-toast";
import News from "./Components/News";
import FinalDashboard from "./Components/FinalDashboard";
import logo2 from "./assets/header.png";
import Duties from "./Components/Duties";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Team from "./Components/Team";
import ArchiveBox from "./Components/Archieve";
import Features from "./Components/Features";

const App = () => {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            theme: {
              primary: "#4aed88",
            },
          },
        }}
      />
      <div className="h-screen w-screen bg-[#FEFBFB]">
        <Navbar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<Duties />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/team" element={<Team />} />
          <Route path="/features" element={<Features />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/news" element={<News />} />
          <Route path="/finaldashboard" element={<FinalDashboard />} />
          <Route path="/archieve" element={<ArchiveBox />} />

        </Routes>

        <Footer />
      </div>
    </>
  );
};

export default App;
