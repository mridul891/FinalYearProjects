import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="w-full py-3 font-semibold bg-[#FEFBFB]  px-10 sticky top-0   ">
      <div className=" flex justify-around items-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo Image" className="w-14" />
          <p>RescueNet</p>
        </div>
        <div className="">
          <ul className="flex gap-10 items-center">
            <li>About</li>
            <li>Features</li>
            <li>Team</li>
            <li>RescueNet</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
