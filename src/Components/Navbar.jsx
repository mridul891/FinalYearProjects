import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import logo2 from "../assets/header.png";
const Navbar = () => {
  return (
    <div className="w-full  font-semibold bg-[#FEFBFB] sticky top-0 h-10 ">
      <div className=" flex justify-around items-center mt-5 ">
        <div className="hidden lg:block">
          <ul className="flex gap-10 items-center text-xl font-semibold text-orange-500">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>

            <li>
              <Link to="/finaldashBoard">Disaster Report Dashboard</Link>
            </li>
            <li>
              <Link to={"/team"}>Team</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
