import img from "../assets/image.png";

import clock from "../assets/clock.png";
import { useEffect, useState } from "react";
import axios from "axios";

import toast from "react-hot-toast";
import sound from "../assets/sound.mp3";
import { useNavigate } from "react-router-dom";
import Map from "./Map";

const FinalDashboard = () => {
  const [isLoaded, setLoaded] = useState(true);
  const [isArchived, setIsArchived] = useState(false);
  const [isSummarized, setIsSummarized] = useState(false);
  const [isTimeline, setIsTimeline] = useState(false);

  const disasterType = [
    { id: 1, disasterTypes: "Flood" },
    { id: 2, disasterTypes: "Earthquake" },
    { id: 3, disasterTypes: "Cyclone" },
    { id: 4, disasterTypes: "Forest Fire" },
    { id: 5, disasterTypes: "Landslides" },
    { id: 6, disasterTypes: "Avalanche" },
    { id: 7, disasterTypes: "Heatwaves" },
  ];

  const stateName = [
    { id: 1, name: "Andhra Pradesh" },
    { id: 2, name: "Arunachal Pradesh" },
    { id: 3, name: "Assam" },
    // ... (rest of the states remain the same)
    { id: 28, name: "West Bengal" },
  ];

  const monthName = [
    { id: 0, name: "January" },
    { id: 1, name: "February" },
    { id: 2, name: "March" },
    { id: 3, name: "April" },
    { id: 4, name: "May" },
    { id: 5, name: "June" },
    { id: 6, name: "July" },
    { id: 7, name: "August" },
    { id: 8, name: "September" },
    { id: 9, name: "October" },
    { id: 10, name: "November" },
    { id: 11, name: "December" },
  ];

  const navigate = useNavigate();
  const [type, setType] = useState("Earthquake");
  const [selectedState, setSelectedState] = useState("Andhra Pradesh");
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [date, setDate] = useState("");
  const [summary, setsummary] = useState("");
  const [timeline, setTimeline] = useState("");
  const [newsdata, setNewsData] = useState([
    {
      id: 1,
      desc: "Asdf",
      link: "https://google.com",
    },
  ]);

  const handleFetch = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3005/api/v1/news/news"
      );
      setNewsData(response.data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };
  const playSound = () => {
    const audio = new Audio(sound);
    audio.play().catch((error) => {
      console.error("Error playing audio:", error);
    });
  };

  const handleTimeline = async (news) => {
    const response = await axios.post("http://localhost:5001/info", {
      message: news,
    });
    setIsTimeline(true)
    setTimeline(response.data.message.content);
  };

  useEffect(() => {
    handleFetch();

    const timeout = setTimeout(async () => {
      playSound();
      toast.error("EarthQuake ALert", {
        duration: 15000,
      });
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  const handleTranslate = async (desc) => {
    console.log(desc);
    const response = await axios.post("http://localhost:5001/translate", {
      message: desc,
    });
    setIsSummarized(true);
    setTimeline(response.data.message.content);
  };

  return (
    <div className="bg-slate-50 min-h-screen p-6 font-sans">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-slate-800 mb-8">
          Disaster Report Dashboard
        </h1>

        {/* Filters Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            <div className="col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Disaster Type
              </label>
              <select
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                {disasterType.map((elem) => (
                  <option key={elem.id} value={elem.disasterTypes}>
                    {elem.disasterTypes}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Date
              </label>
              <input
                onChange={(e) => setDate(e.target.value)}
                type="date"
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                State
              </label>
              <select
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                {stateName.map((elem) => (
                  <option key={elem.id} value={elem.name}>
                    {elem.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Month
              </label>
              <select
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                {monthName.map((elem) => (
                  <option key={elem.id} value={elem.name}>
                    {elem.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-span-1 flex items-end">
              <button className="w-full px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                Miscellaneous
              </button>
            </div>

            <div className="col-span-1 flex items-end">
              <button
                onClick={() => navigate("/archieve")}
                className="w-full px-4 py-2 bg-slate-600 text-white rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500"
              >
                Archive
              </button>
            </div>
          </div>
        </div>
        {/* is archieved  */}
        

        {/* Reports Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Latest Reports */}
          <div className="md:col-span-2 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
              <img src={img} alt="" className="h-8 w-8 mr-3" />
              Latest Reports
            </h2>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {isLoaded &&
                newsdata
                  .filter(
                    (e) => e.latest === true
                    // e.disasterType === type ||
                    // e.date === date
                  )
                  .map((el) => (
                    <div
                      key={el._id}
                      className={`${
                        el.latest == true ? "bg-green-200" : "bg-slate-100"
                      } p-4 rounded-md border border-slate-200 flex justify-between items-center `}
                    >
                      <div className="">
                        <h1 className="font-bold">{el.date}</h1>
                        <p className="text-slate-700 flex-grow pr-4">
                          {el.news}

                          {isSummarized && (
                            <div>
                              <h1 className="font-bold text-xl mt-1 ">
                                Summary :{" "}
                              </h1>
                              <p className="font-semibold">{summary}</p>
                            </div>
                          )}

                          {isTimeline && (
                            <div>
                              <h1 className="font-bold text-xl mt-1 ">
                                Timeline :{" "}
                              </h1>
                              <p className="font-semibold">{timeline}</p>
                            </div>
                          )}
                        </p>
                      </div>
                      <div>
                        <a
                          href={el.link}
                          className="text-emerald-600 font-bold hover:text-emerald-800 mr-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Source
                        </a>

                        <button
                          className="bg-white p-2 rounded-md"
                          onClick={() => handleTranslate(el.desc)}
                        >
                          Summarize
                        </button>

                        <button
                          className="bg-white p-2 rounded-md ml-2"
                          onClick={() => handleTimeline(el.desc)}
                        >
                          Timeline
                        </button>
                      </div>
                    </div>
                  ))}
            </div>
          </div>

          {/* Recent Reports */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
              <img src={clock} alt="" className="h-8 w-8 mr-3" />
              Recent Reports
            </h2>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {isLoaded &&
                newsdata
                  .filter(
                    (e) => e.disasterType === type
                    // e.date === date
                  )
                  .map((el) => (
                    <div
                      key={el._id}
                      className="bg-slate-100 p-4 rounded-md border border-slate-200 flex justify-between items-center"
                    >
                      <p className="text-slate-700 flex-grow pr-4">{el.news}</p>

                      <div>
                        <a
                          href={el.link}
                          className="text-emerald-600 hover:text-emerald-800 font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Source
                        </a>
                        <button
                          className="bg-white p-2 rounded-md"
                          onClick={() => handleTimeline(el.desc)}
                        >
                          Summarize
                        </button>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
        <button className="bg-blue-400 text-white p-2 mt-2">
          Today all incidence
        </button>
      </div>
    </div>
  );
};

export default FinalDashboard;
