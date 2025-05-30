import Blog from "./Blog";
import Features from "./Features";
import Footer from "./Footer";
import MyMap from "./Map";

import GoogleTrendsWidget from "./Map";
import Navbar from "./Navbar";
import Team from "./Team";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Blog />
      <MyMap/>
      <Team/>
    </div>
  );
};

export default LandingPage;
