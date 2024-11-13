import img1 from "../assets/d1.png";
import img2 from "../assets/d2.png";

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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
              necessitatibus ratione exercitationem quod. Debitis maiores a
              minus suscipit ipsam dignissimos optio sapiente dolore iusto quae,
              odit sed architecto, reprehenderit fuga!.
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              error eveniet nisi, repellendus quasi repudiandae, praesentium ab
              aperiam beatae nostrum voluptatum iste ipsam consequatur debitis
              esse accusamus, nihil magni veritatis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
