
const Card = ({ src, name, position }) => {
  return (
    <div className="flex flex-row item-center justify-center gap-10 lg:flex-col lg:px-10 pt-10 lg:gap-2 ">
      {/* character image */}
      <div className="bg-yellow-400 rounded-full overflow-hidden w-[5rem] ">
        <img src={src} alt="" className="h-[5rem]" />
      </div>
      {/* Person information */}
      <div className="mt-3 w-[10rem] lg:w-[20rem]">
        <h1 className="font-semibold">{name}</h1>
        <p className="text-violet-700">{position}</p>
      </div>
    </div>
  );
};

export default Card;
