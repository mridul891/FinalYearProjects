const Card = ({ src, name, Info }) => {
  return (
    <div className="flex flex-col items-center gap-4 ">
      <img src={src} alt="" className="w-[10rem]" />
      <div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="font-lg"> {Info}</p>
      </div>
    </div>
  );
};

export default Card;
