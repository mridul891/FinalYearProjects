import clock from "../assets/clock.png";

const RecentReports = ({ newsdata, type, handleTimeline }) => (
  <div className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
      <img src={clock} alt="" className="h-8 w-8 mr-3" />
      Recent Reports
    </h2>
    <div className="space-y-4 max-h-96 overflow-y-auto">
      {newsdata
        .filter((e) => e.disasterType === type)
        .map((el) => (
          <div key={el._id} className="bg-slate-100 p-4 rounded-md flex justify-between items-center">
            <p className="text-slate-700 flex-grow pr-4">{el.news}</p>
            <div>
              <a href={el.link} className="text-emerald-600 hover:text-emerald-800 font-medium" target="_blank" rel="noopener noreferrer">Source</a>
              <button className="bg-white p-2 rounded-md ml-2" onClick={() => handleTimeline(el.desc)}>Timeline</button>
            </div>
          </div>
        ))}
    </div>
  </div>
);

export default RecentReports;
