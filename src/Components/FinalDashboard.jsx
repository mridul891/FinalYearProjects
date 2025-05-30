import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

import img from "../assets/image.png";
import clock from "../assets/clock.png";

const FinalDashboard = () => {
  const [newsData, setNewsData] = useState([]);
  const [summarizedItems, setSummarizedItems] = useState({});
  const [timelineItems, setTimelineItems] = useState({});

  const [type, setType] = useState("Earthquake");
  const navigate = useNavigate();

  const disasterTypes = [
    "Flood", "Earthquake", "Cyclone", "Forest Fire", "Landslides", "Avalanche", "Heatwaves"
  ];

  const fetchNews = async () => {
    try {
      const res = await axios.post("http://localhost:2000/api/v1/news/news");
      setNewsData(res.data);
    } catch (err) {
      console.error("Error fetching news:", err);
      toast.error("Failed to load news data.");
    }
  };

  const handleTranslate = async (desc, id) => {
    try {
      const res = await axios.post("http://localhost:5001/translate", { message: desc });
      setSummarizedItems(prev => ({ ...prev, [id]: res.data.message.content }));
    } catch (err) {
      toast.error("Translation failed.");
    }
  };

  const handleTimeline = async (desc, id) => {
    try {
      const res = await axios.post("http://localhost:5001/info", { message: desc });
      setTimelineItems(prev => ({ ...prev, [id]: res.data.message.content }));
    } catch (err) {
      toast.error("Timeline generation failed.");
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-emerald-50 to-white p-6 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-emerald-700 mb-10"
        >
          🌍 Disaster Report Dashboard
        </motion.h1>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-2xl rounded-3xl p-6 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SelectInput label="Disaster Type" value={type} setValue={setType} options={disasterTypes} />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ReportSection
            title="Latest Reports"
            icon={img}
            data={newsData.filter(n => n.latest)}
            summarizedItems={summarizedItems}
            timelineItems={timelineItems}
            onSummarize={handleTranslate}
            onTimeline={handleTimeline}
            wide
          />
          <ReportSection
            title="Recent Reports"
            icon={clock}
            data={newsData.filter(n => n.disasterType === type)}
            summarizedItems={summarizedItems}
            timelineItems={timelineItems}
            onSummarize={handleTranslate}
            onTimeline={handleTimeline}
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-emerald-600 text-white px-6 py-3 mt-10 rounded-xl shadow-lg hover:bg-emerald-700 mx-auto block text-lg"
        >
          📅 View All Today's Incidents
        </motion.button>
      </div>
    </motion.div>
  );
};

export default FinalDashboard;

const SelectInput = ({ label, value, setValue, options }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <select
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-sm"
    >
      {options.map((opt, idx) => (
        <option key={idx} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

const ReportSection = ({ title, icon, data, summarizedItems, timelineItems, onSummarize, onTimeline, wide }) => (
  <motion.div
    initial={{ y: 10, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`bg-white shadow-xl rounded-3xl p-6 ${wide ? "lg:col-span-2" : ""}`}
  >
    <h2 className="text-2xl font-bold text-emerald-700 mb-6 flex items-center">
      <img src={icon} alt="icon" className="h-6 w-6 mr-3" />
      {title}
    </h2>
    <div className="space-y-4 max-h-[32rem] overflow-y-auto scrollbar-thin scrollbar-thumb-emerald-300 pr-2">
      {data.map((item) => (
        <motion.div
          key={item._id}
          whileHover={{ scale: 1.01 }}
          className={`p-4 rounded-xl border ${item.latest ? "bg-emerald-50" : "bg-slate-50"} border-slate-200 flex flex-col gap-3`}
        >
          <div className="flex justify-between items-start">
            <div>
              <h1 className="font-semibold text-sm text-gray-500">{item.date}</h1>
              <p className="text-slate-800 font-medium text-sm pr-4">{item.news}</p>
            </div>
            <div className="flex flex-col gap-2 items-end ml-4">
              <a
                href={item.link}
                className="text-emerald-600 text-sm font-bold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
              <button onClick={() => onSummarize(item.desc, item._id)} className="text-xs bg-white border px-3 py-1 rounded-md hover:bg-emerald-100">
                Summarize
              </button>
              <button onClick={() => onTimeline(item.desc, item._id)} className="text-xs bg-white border px-3 py-1 rounded-md hover:bg-slate-100">
                Timeline
              </button>
            </div>
          </div>

          {summarizedItems[item._id] && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 bg-emerald-50 rounded-md p-3">
              <h3 className="font-semibold text-emerald-800 mb-1">Summary:</h3>
              <ul className="list-disc ml-5 text-sm text-slate-800">
                {summarizedItems[item._id].split(". ").map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </motion.div>
          )}

          {timelineItems[item._id] && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 bg-slate-100 rounded-md p-3">
              <h3 className="font-semibold text-slate-800 mb-1">Timeline:</h3>
              <ul className="list-disc ml-5 text-sm text-slate-700">
                {timelineItems[item._id].split(". ").map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  </motion.div>
);