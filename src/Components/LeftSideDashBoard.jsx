import React, { useState } from "react";
import { SimpleLineChart } from "./SimpleLineChart";
import axios from "axios";

const LeftSideDashBoard = () => {
  const [data, setData] = useState([]);
  const handleFetch = async () => {
    const response = await axios.get(
      "https://webscrapper-bmoc.onrender.com/info"
    );
    console.log(response.data);
    let newData = [];
    // console.log(response.data);
    await response.data.map(async (elem) => {
      const value = await axios.post("http://localhost:3000/predict", {
        text: elem.title,
      });
      console.log({
        title: elem.title,
        result: value.data.result,
        score: value.data.score,
      });
      newData = [
        ...newData,
        {
          title: elem.title,
          result: value.data.result,
          score: value.data.score,
        },
      ];
      console.log(newData);
      setData(newData);
    });
  };

  return (
    <div className="flex flex-col gap-4 flex-1 overflow-hidden">
      <div className="p-4 bg-green-200 rounded flex-1">
        <h2 className="text-lg font-semibold mb-3">Overview</h2>
        <button onClick={handleFetch}>Fetch</button>
      </div>
      <div className="p-4 bg-white rounded flex-1 overflow-hidden">
        <h2 className="text-lg font-semibold mb-3">Analytics</h2>
        <SimpleLineChart />
      </div>
    </div>
  );
};

export default LeftSideDashBoard;
