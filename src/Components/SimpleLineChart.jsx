import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const States = ["Bihar","Uttarakhand"];
const DisasterTypes = ["Heatwave", "Flood"];

export const SimpleLineChart = () => {
  const [state, setState] = useState("Bihar");
  const [disasterType, setDisasterType] = useState("Heatwave");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.post(
          "https://maximum-sweeping-sloth.ngrok-free.app/chart",
          {
            state,
            disaster_type: disasterType,
          }
        );
        setData(response.data);
      } catch (err) {
        setError("Failed to fetch data. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [state, disasterType]);

  return (
    <div className="w-full max-w-4xl mt-8 mx-auto p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">
        Disaster Death Trends
      </h2>
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex-1">
          <label
            htmlFor="state-select"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Select State
          </label>
          <select
            id="state-select"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Select a state"
          >
            {States.map((elem, index) => (
              <option key={index} value={elem}>
                {elem}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex-1">
          <label
            htmlFor="disaster-select"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Select Disaster Type
          </label>
          <select
            id="disaster-select"
            value={disasterType}
            onChange={(e) => setDisasterType(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Select a disaster type"
          >
            {DisasterTypes.map((elem, index) => (
              <option key={index} value={elem}>
                {elem}
              </option>
            ))}
          </select>
        </div>
      </div>

      {loading && (
        <div className="text-center text-gray-600 dark:text-gray-400">
          Loading data...
        </div>
      )}
      
      {error && (
        <div className="text-center text-red-600 dark:text-red-400">
          {error}
        </div>
      )}

      {!loading && !error && data.length > 0 && (
        <div className="w-full h-[300px] sm:h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="year"
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                label={{
                  value: "Deaths",
                  angle: -90,
                  position: "insideLeft",
                  offset: -5,
                  fill: "#6b7280",
                }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "4px",
                }}
              />
              <Legend verticalAlign="top" height={36} />
              <Line
                type="monotone"
                dataKey="deaths_count"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {!loading && !error && data.length === 0 && (
        <div className="text-center text-gray-600 dark:text-gray-400">
          No data available for the selected state and disaster type.
        </div>
      )}
    </div>
  );
};