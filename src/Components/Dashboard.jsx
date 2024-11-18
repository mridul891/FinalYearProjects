import axios from "axios";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import { SimpleLineChart } from "./SimpleLineChart";

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([
    {
      title:
        "Severe Flood Hits Dhemaji District, Assam, displacing over 120,000 residents, causing 125 fatalities, and destroying 60% of the district's agricultural fields. Emergency teams are providing relief supplies as water levels remain high.",
    },
    {
      title:
        "Massive Earthquake of magnitude 7.5 strikes Ankara Region, Turkey, leaving over 500 dead, 1,500 injured, and thousands homeless. Rescue operations are ongoing as aftershocks continue to shake the region.",
    },
    {
      title:
        "Cyclone Vayu devastates coastal Odisha with winds reaching 150 km/h, causing 30 fatalities, power outages in over 500 villages, and disrupting transportation networks. Relief shelters are accommodating 50,000 evacuees.",
    },
    {
      title:
        "Raging Wildfire spreads rapidly across Los Angeles suburbs, destroying 500 homes, displacing 20,000 residents, and leading to hazardous air quality across the city. Firefighters are battling to control the blaze amid strong winds.",
    },
    {
      title:
        "Heavy Rain Triggers Landslide in Pokhara, Nepal, burying 25 homes, blocking major highways, and leaving 50 residents missing. Rescue teams are using heavy machinery to clear debris and search for survivors.",
    },
    {
      title:
        "Tsunami Hits Indonesian Coast after a 7.8 magnitude earthquake, affecting 200,000 people, destroying coastal villages, and leading to a death toll of over 800. International aid has been mobilized to assist in recovery efforts.",
    },
    {
      title:
        "Hurricane Laura ravages Louisiana, USA, with sustained winds of 140 mph, causing widespread flooding, power outages for 1.5 million residents, and damages estimated at $15 billion. FEMA teams are on the ground assisting survivors.",
    },
  ]);
  const [date, setDate] = useState(new Date());
  const [isLoaded, setLoaded] = useState(true);

  // useEffect(() => {
  //   if (!localStorage.getItem("sihToken")) {
  //     navigate("/signin");
  //   }
  // }, [navigate]);

  return (
    <section className="h-screen w-screen border-2 border-lime-500 bg-gray-200 overflow-hidden">
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
              {data.map((elem, index) => (
                <div
                  key={index}
                  className="bg-white p-4 mb-4 rounded-xl shadow text-gray-700"
                >
                  {elem.title}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 flex-1 overflow-hidden">
            <div className="p-4 bg-green-200 rounded flex-1">
              <h2 className="text-lg font-semibold mb-3">Overview</h2>
              <p>
                This section can contain summary details or quick-access widgets
                for relevant insights.
              </p>
            </div>
            <div className="p-4 bg-white rounded flex-1 overflow-hidden">
              <h2 className="text-lg font-semibold mb-3">Analytics</h2>
              <SimpleLineChart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
