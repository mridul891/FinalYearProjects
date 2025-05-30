import Card from "./Card";

import logo2 from "../assets/c2.png";
import logo3 from "../assets/c3.png";
import logo4 from "../assets/c4.png";
import logo5 from "../assets/c5.png";


const Team = () => {
  return (
    <div className="px-4 py-10 lg:px-32" id="team">
      <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
        Meet the Team
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          src={logo4}
          name={"Mridul Pandey"}
          position={"Full Stack Developer"}
        />
        <Card
          src={logo2}
          name={"Anuj Negi"}
          position={"Machine Learning Engineer"}
        />
        <Card
          src={logo3}
          name={"Harshit Singh"}
          position={"Full Stack Developer"}
        />
        <Card
          src={logo5}
          name={"Deepak Kumar"}
          position={"Machine Learning Engineer"}
        />
      </div>

      <h1 className="mt-16 text-2xl font-semibold text-center text-slate-600">
        Dronacharya Group Of Institutions <br />
        Greater Noida, UP
      </h1>
    </div>
  );
};

export default Team;
