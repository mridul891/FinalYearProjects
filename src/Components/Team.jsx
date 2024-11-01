import Card from "./Card";
import logo from "../assets/logo.png";
const Team = () => {
  return (
    <div className=" flex justify-center item-center flex-col">
      <div className="text-4xl font-bold">Team</div>
      <div>
        <Card
          src={logo}
          name="Mridul Pandey"
          Info={
            "I transform challenges into digital solutions and development is my escape💡✨"
          }
        />
      </div>
    </div>
  );
};

export default Team;
