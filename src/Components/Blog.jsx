import img1 from "../assets/ndrf1.jpeg";
import img2 from "../assets/ndrf2.jpeg";

const Blog = () => {
  return (
    <div className="flex flex-col overflow-hidden py-10 " id="about">
      {/* First Section */}
      <div className="flex flex-col md:flex-row flex-1 p-4 items-center justify-center md:justify-between">
        {/* Left Column (Text and Image Side-by-Side) */}
        <div className="flex flex-1 items-start justify-center flex-col gap-2 md:flex-row md:gap-[5rem]">
          <div className="flex flex-col items-left  max-w-sm gap-5">
            <h1 className="text-2xl md:text-xl text-center font-bold ">
              National Disaster Response Force
            </h1>
            <p className="text-base text-justify text-gray-600 md:text-lg w-[27rem] ">
              The National Disaster Response Force (NDRF) is a specialized
              disaster response agency in India, formed in 2006 under the
              Disaster Management Act. It functions under the Ministry of Home
              Affairs and plays a critical role in managing natural and man-made
              disasters. The NDRF's highly trained personnel are equipped to
              handle disasters like floods, earthquakes, cyclones, and
              industrial accidents. Key responsibilities include search and
              rescue operations, evacuation, medical aid, and disaster
              preparedness programs. The force also specializes in Chemical,
              Biological, Radiological, and Nuclear (CBRN) emergencies. Through
              community awareness and capacity-building initiatives, the NDRF
              significantly enhances disaster resilience across the nation.
            </p>
          </div>
          <div className="flex justify-center items-center h-[60vh]">
            <img
              src={img1}
              alt="image1"
              className="max-w-full max-h-[20rem] md:h-[23rem] object-cover ml-2 md:ml-4"
            />
          </div>
        </div>
      </div>

      {/* Second Section */}
    </div>
  );
};

export default Blog;
