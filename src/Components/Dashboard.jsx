import axios from "axios";
import { useEffect, useState, useSyncExternalStore } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import LeftSideDashBoard from "./LeftSideDashBoard";

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [isLoaded, setLoaded] = useState(false);
  // const [newData, setNewData] = useState([]);
  const [type, setType] = useState("Flood");
  const [info, setInfo] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      types: "Flood",
      news: "Mumbai have floods",
    },
    {
      id: 2,
      types: "Earthquake",
      news: "Delhi have Earthquake of 6.4 frequency",
    },
    {
      id: 3,
      types: "Cyclone",
      news: "Cyclone in telanga",
    }, {
      id: 4,
      types: "Forest Fire",
      news: "Forest Fire in Uttrakhand",
    },
  ]);

  const disasterType = [
    {
      id: 1,
      disasterTypes: "Flood",
    },
    {
      id: 2,
      disasterTypes: "Earthquake",
    },
    {
      id: 3,
      disasterTypes: "Cyclone",
    },
    {
      id: 4,
      disasterTypes: "Forest Fire",
    },
    // {
    //   id: 5,
    //   disasterTypes: "Landslide",
    // },
    // {
    //   id: 6,
    //   disasterTypes: "Tsunami",
    // },
    // {
    //   id: 7,
    //   disasterTypes: "Heat wave",
    // },
    // {
    //   id: 8,
    //   disasterTypes: "Avalanche",
    // },
    // {
    //   id: 9,
    //   disasterTypes: "Miscellaneous",
    // },
  ];

  const handleFetch = async () => {
    const response = await axios.get(
      "https://webscrapper-bmoc.onrender.com/info"
    );
    console.log(response.data);
    let newData = [];
    // console.log(response.data);
    await response.data.map(async (elem) => {
      const value1 = await axios.post("http://localhost:5001/translate",{
        message : elem.title
      })
      const value = await axios.post("http://localhost:3001/analyze", {
        text: value1.title,
      });

      
      console.log({
        title: value1.message,
        result: value.data.result,
        score: value.data.score,
      });
      newData = [
        ...newData,
        {
          title: value1.message,
          result: value.data.result,
          score: value.data.score,
        },
      ];
      console.log(newData);
      setData(newData);
    });
  };

  useEffect(() => {
    handleFetch();
  }, []);

  // useEffect(() => {
  //   const dbRef = ref(database, "message");

  //   // Listen for data changes

  //   // Get the dataF
  //   get(dbRef)
  //     .then((snapshot) => {
  //       if (snapshot.exists()) {
  //         // Convert Firebase snapshot to an array of objects
  //         const data = snapshot.val();
  //         const reportsArray = Object.keys(data).map((key) => ({
  //           id: key,
  //           ...data[key],
  //         }));
  //         console.log(reportsArray);
  //         setData(reportsArray);
  //       } else {
  //         console.log("No data available");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error reading data: ", error);
  //     });
  // }, []);

  const [timelineData, setTimelineData] = useState([
    {
      id: 2,
      news: [
        {
          title: "Fuck ",
        },
        {
          title: "this game",
        },
      ],
    },
  ]);

  return (
    <section className="h-screen w-screen  bg-gray-200 overflow-hidden">
      {/* Heading */}
      <div className="h-full flex flex-col">
        {/* Top Section */}
        <div className="flex justify-between items-center p-5 border-b bg-white shadow">
          {/* Title */}
          <div className="relative">
            <h1 className="text-6xl font-semibold">Dashboard</h1>
            <h2
              onClick={() => setLoaded((prev) => !prev)}
              className="mt-2 cursor-pointer text-lg text-blue-500 underline"
            >
              Toggle Calendar
            </h2>

            {/* Calendar */}
            {isLoaded && (
              <div className="mt-4 absolute bg-white p-2 border shadow rounded z-10">
                <Calendar
                  value={date}
                  onChange={setDate}
                  className="rounded-md border shadow"
                />
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="flex gap-10 items-center">
            <div>
              <h1 className="text-4xl font-semibold">7052</h1>
              <p className="font-semibold text-gray-400">EOI Sent</p>
            </div>
            <div>
              <h1 className="text-4xl font-semibold">34</h1>
              <p className="font-semibold text-gray-400">New Requests</p>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex-grow flex gap-4 p-4 overflow-hidden">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 flex-1 overflow-y-auto">
            <div className="p-4  rounded flex-1">
              <h2 className="text-lg font-semibold mb-3">Recent Incidents</h2>
              <select
                onChange={(e) => setType(e.target.value)}
                className="mb-4 rounded-lg p-2"
              >
                {disasterType.map((elem) => (
                  <option key={elem.id}>{elem.disasterTypes}</option>
                ))}
              </select>

              {data
                .filter((el) => el.types === type)
                .map((elem, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 mb-4 rounded-xl shadow text-gray-700"
                  >
                    <strong>
                      {elem.news}
                      {/* <button
                        className="bg-blue-500 ml-10"
                        onClick={() => setInfo((info) => !info)}
                      >
                        {"<"}
                      </button> */}
                    </strong>

                    {info && (
                      <div>
                        {timelineData.map((el) => {
                          el.news[0];
                        })}
                      </div>
                    )}
                    <div className="flex gap-10 mt-3">
                      <button className="bg-black text-white px-5 py-2 rounded-xl">
                        Send to Rescue Team
                      </button>
                      <button className="bg-black text-white px-5 py-2 rounded-xl">
                        Send to Police Team
                      </button>
                      <button className="bg-black text-white px-5 py-2 rounded-xl">
                        Ignore
                      </button>
                      <button className="bg-black text-white px-5 py-2 rounded-xl">
                        Summarize
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Column 2 */}
          <LeftSideDashBoard />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
