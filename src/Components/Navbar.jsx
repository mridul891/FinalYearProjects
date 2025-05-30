import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="w-full py-5 font-semibold bg-[#FEFBFB] sticky top-0">
      <div className="flex justify-around items-center">
        <Link to="/">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo Image" className="w-14" />
            <p>RescueNet</p>
          </div>
        </Link>
        <div className="hidden lg:block">
          <ul className="flex gap-10 items-center">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/finaldashBoard">DashBoard</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
