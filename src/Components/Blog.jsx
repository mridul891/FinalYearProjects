import img1 from "../assets/d1.png";
import img2 from "../assets/d2.png";
import Team from "./Team";

const Blog = () => {
  return (
    <div className="flex flex-col overflow-hidden py-10 ">
      {/* First Section */}
      <div className="flex flex-col md:flex-row flex-1 p-4 items-center justify-center md:justify-between">
        {/* Left Column (Text and Image Side-by-Side) */}
        <div className="flex flex-1 items-center justify-center flex-col gap-2 md:flex-row md:gap-[5rem]">
          <div className="flex flex-col items-left  max-w-sm gap-5">
            <h1 className="text-2xl md:text-3xl font-bold ">RescueNet</h1>
            <p className="text-base text-gray-600 md:text-lg">
              RescueNet is a smart disaster response system that displays
              real-time alerts for floods, earthquakes, and lightning on an
              interactive map. It helps authorities quickly assess and respond
              to emergencies.
            </p>
          </div>
          <div>
            <img
              src={img1}
              alt="image1"
              className="max-w-full max-h-64 md:max-h-80 object-cover ml-2 md:ml-4"
            />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col md:flex-row flex-1 p-4 items-center justify-center md:justify-between">
        {/* Right Column (Text and Image Side-by-Side) */}
        <div className="flex flex-1 items-center justify-center gap-4 md:gap-[7rem] flex-col-reverse md:flex-row lg:flex-row">
          {/* image */}
          <div>
            <img
              src={img2}
              alt="image2"
              className="max-w-full max-h-64 md:max-h-80 object-cover mr-2 md:mr-4 "
            />
          </div>
          {/* data */}
          <div className="flex flex-col items-left gap-5 max-w-sm">
            <h1 className="text-2xl md:text-3xl font-bold">RescueNet</h1>
            <p className="text-base md:text-lg text-gray-600">
              The platform also includes graphs and filters for analyzing
              disaster trends, making it easier to plan and coordinate rescue
              efforts efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
