import img1 from "../assets/d1.png";
import img2 from "../assets/d2.png";

const Blog = () => {
  return (
    <div className="flex flex-col overflow-hidden p-4">
      {/* First Section */}
      <div className="flex flex-col md:flex-row flex-1 p-4 items-center justify-center">
        {/* Left Column (Text and Image Side-by-Side) */}
        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-col items-left  max-w-sm gap-5">
            <h1 className="text-2xl md:text-3xl font-bold ">RescueNet</h1>
            <p className="text-base text-gray-600 md:text-lg">
              CerviCare aims to raise awareness and predict cervical cancer. Through education and early detection, it strives to reduce the incidence and impact of this disease, empowering individuals to take proactive steps towards better cervical health.
            </p>
          </div>
          <img src={img1} alt="image1" className="max-w-full max-h-64 md:max-h-80 object-cover ml-2 md:ml-4" />
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col md:flex-row flex-1 p-4 items-center justify-center">
        {/* Right Column (Text and Image Side-by-Side) */}
        <div className="flex flex-1 items-center justify-center gap-5">
          <img src={img2} alt="image2" className="max-w-full max-h-64 md:max-h-80 object-cover mr-2 md:mr-4" />
          <div className="flex flex-col items-left gap-5 max-w-sm">
            <h1 className="text-2xl md:text-3xl font-bold">RescueNet</h1>
            <p className="text-base md:text-lg text-gray-600">
              CerviCare aims to raise awareness and predict cervical cancer. Through education and early detection, it strives to reduce the incidence and impact of this disease, empowering individuals to take proactive steps towards better cervical health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
