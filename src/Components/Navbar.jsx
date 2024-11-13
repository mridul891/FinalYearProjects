import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="w-full py-3 font-semibold bg-[#FEFBFB] sticky top-0 ">
      <div className=" flex justify-around items-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo Image" className="w-14" />
          <p>RescueNet</p>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-10 items-center">
            <li>
              <a></a>About
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>RescueNet</li>
            <li>DashBoard</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
