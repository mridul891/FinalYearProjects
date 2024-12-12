import axios from "axios";
import { useEffect, useState } from "react";

const ArchiveBox = () => {
  const [data, setData] = useState([]);

  const handleFetch = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3005/api/v1/news/news"
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="w-2/3 flex flex-1 flex-col items-center justify-center">
      {data.map((el) => {
        return (
          <div
            key={el._id}
            className={`bg-slate-100 p-4 rounded-md border border-slate-200 flex justify-between items-center text-white w-full`}
          >
            <p className="text-slate-700 flex-grow pr-4">{el.news}</p>
            <a
              href={el.link}
              className="text-emerald-600 hover:text-emerald-800 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default ArchiveBox;
