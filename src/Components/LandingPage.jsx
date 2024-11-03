import Blog from "./Blog";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Team from "./Team";

const LandingPage = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      {/* <Blog /> */}
      <Team />
      <Footer />
    </div>
  );
};

export default LandingPage;
