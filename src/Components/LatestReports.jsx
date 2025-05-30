import img from "../assets/image.png";
import NewsCard from "./NewsCards.jsx";

const LatestReports = ({ newsdata, handleTranslate, handleTimeline, timeline, isTimeline }) => (
  <div className="md:col-span-2 bg-white shadow-md rounded-lg p-6">
    <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
      <img src={img} alt="" className="h-8 w-8 mr-3" />
      Latest Reports
    </h2>
    <div className="space-y-4 max-h-96 overflow-y-auto">
      {newsdata.map((el) => (
          <NewsCard
            key={el._id}
            data={el}
            handleTranslate={handleTranslate}
            handleTimeline={handleTimeline}
            timeline={timeline}
            isTimeline={isTimeline}
          />
        ))}
    </div>
  </div>
);

export default LatestReports;
