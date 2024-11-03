import Card from "./Card";
import logo from "../assets/logo.png";
import Box from "./Box";
const Team = () => {
  return (
    <div className=" w-full flex justify-center items-center flex-col">
      <div className="text-4xl font-bold">Team</div>
      <div className="flex flex-col md:flex-row  md:flex-wrap gap-5 mt-10  justify-center">
        <Box>
          <Card
            src={logo}
            name="Mridul Pandey"
            Info={
              "I transform challenges into digital solutions and development is my escape💡✨"
            }
          />
        </Box>
        <Box>
          <Card
            src={logo}
            name="Mridul Pandey"
            Info={
              "I transform challenges into digital solutions and development is my escape💡✨"
            }
          />
        </Box>
        <Box>
          <Card
            src={logo}
            name="Mridul Pandey"
            Info={
              "I transform challenges into digital solutions and development is my escape💡✨"
            }
          />
        </Box>
        <Box>
          <Card
            src={logo}
            name="Mridul Pandey"
            Info={
              "I transform challenges into digital solutions and development is my escape💡✨"
            }
          />
        </Box>
      </div>
    </div>
  );
};

export default Team;
