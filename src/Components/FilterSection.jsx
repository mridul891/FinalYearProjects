const disasterTypes = [
  "Flood",
  "Earthquake",
  "Cyclone",
  "Forest Fire",
  "Landslides",
  "Avalanche",
  "Heatwaves",
];
const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "West Bengal",
  // Add all states here...
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const FiltersSection = ({
  type,
  setType,
  selectedState,
  setSelectedState,
  selectedMonth,
  setSelectedMonth,
  date,
  setDate,
  navigate,
}) => (
  <div className="bg-white shadow-lg rounded-xl p-6 mb-8 border border-gray-200">
    <div className="grid grid-cols-3 md:grid-cols-6 gap-5">
      <select
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        {disasterTypes.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>

      <input
        type="date"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <select
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
      >
        {states.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <select
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      >
        {months.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>

      <button
        className="w-full bg-green-600 text-white font-semibold rounded-lg px-4 py-2 hover:bg-green-700 transition"
        onClick={() => {
          /* Add your handler */
        }}
      >
        Miscellaneous
      </button>

      <button
        className="w-full bg-gray-700 text-white font-semibold rounded-lg px-4 py-2 hover:bg-gray-800 transition"
        onClick={() => navigate("/archieve")}
      >
        Archive
      </button>
    </div>
  </div>
);

export default FiltersSection;
