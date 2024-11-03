const Card = ({ src, name, Info }) => {
  return (
    <div className="flex flex-col items-center gap-4 justify-between text-center">
      <img src={src} alt="" className="w-[20rem] h-[15rem]" />
      <div className="">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="font-lg text-gray-600"> {Info}</p>
      </div>
    </div>
  );
};

export default Card;
