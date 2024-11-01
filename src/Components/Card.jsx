const Card = ({ src, name, Info }) => {
  return (
    <div className="flex flex-col items-center gap-4 max-w-sm bg-white p-10 shadow-[0_3px_10px_rgb(0,0,0,1)] rounded-lg border-2 border-black text-center">
      <img src={src} alt="" className="w-[10rem]" />
      <div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="font-lg"> {Info}</p>
      </div>
    </div>
  );
};

export default Card;
