import Card from "./Card";
import logo from "../assets/c1.png";
import logo2 from '../assets/c2.png'
import logo3 from '../assets/c3.png'
import logo4 from '../assets/c4.png'
import logo5 from '../assets/c5.png'
import logo6 from '../assets/c6.png'

const Team = () => {
  return (
    <div className="lg:px-[18rem] lg:mx-10" id="team">
      <h1 className="text-3xl font-semibold text-center">
        Let&apos;s Meet Our Team
      </h1>

      <div className="grid grid-col-1 gap-4 md:grid-cols-2 lg:grid-cols-3  ">
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
          name={"Dinesh Kumar"}
          position={"Machine Learning Engineer"}
        />
        <Card
          src={logo6}
          name={"Riya Bisht"}
          position={"Full Stack Developer"}
        />
        <Card
          src={logo}
          name={"Anand Tomar"}
          position={"Full Stack Developer"}
        />
      </div>
    </div>
  );
};

export default Team;
