import Box from "./Box";
import Card from "./Card";
import img1 from "../assets/reading.png";
import img2 from "../assets/bot.png";
import img3 from "../assets/model.png";

const Features = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col mt-10 md:p-1" id="features">
      {/* Title */}
      <div className="text-4xl font-bold text-center mb-8">Features of RescueNet</div>

      {/* Feature Boxes */}
      <div className="flex flex-col md:flex-row md:flex-wrap gap-8 justify-center items-center">
        <Box className="w-full md:w-1/3 flex flex-col items-center">
          <Card
            src={img1}
            name="Mridul Pandey"
            Info="A predictive model for Disaster Management, uses advanced algorithms to analyze risk factors and Disaster data to forecast likelihood!"
          />
          <button className="mt-4 bg-blue-600 px-6 py-2 rounded-xl text-white font-semibold w-full md:w-auto text-center">
            Try Now
          </button>
        </Box>

        <Box className="w-full md:w-1/3 flex flex-col items-center">
          <Card
            src={img2}
            name="RescueNet Bot"
            Info="A smart chatbot providing instant information on Disaster Management."
          />
          <button className="mt-4 bg-blue-600 px-6 py-2 rounded-xl text-white font-semibold w-full md:w-auto text-center">
            Try Now
          </button>
        </Box>

        <Box className="w-full md:w-1/3 flex flex-col items-center">
          <Card
            src={img3}
            name="RescueNet Model"
            Info="A predictive model for Disaster Management, uses advanced algorithms to analyze risk factors and Disaster data to forecast likelihood!"
          />
          <button className="mt-4 bg-blue-600 px-6 py-2 rounded-xl text-white font-semibold w-full md:w-auto text-center">
            Try Now
          </button>
        </Box>
      </div>
    </div>
  );
};

export default Features;
