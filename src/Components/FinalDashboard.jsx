import bgimg from "../assets/bg.jpeg";

const FinalDashboard = () => {
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

  const stateName = [
    { id: 1, name: "Andhra Pradesh" },
    { id: 2, name: "Arunachal Pradesh" },
    { id: 3, name: "Assam" },
    { id: 4, name: "Bihar" },
    { id: 5, name: "Chhattisgarh" },
    { id: 6, name: "Goa" },
    { id: 7, name: "Gujarat" },
    { id: 8, name: "Haryana" },
    { id: 9, name: "Himachal Pradesh" },
    { id: 10, name: "Jharkhand" },
    { id: 11, name: "Karnataka" },
    { id: 12, name: "Kerala" },
    { id: 13, name: "Madhya Pradesh" },
    { id: 14, name: "Maharashtra" },
    { id: 15, name: "Manipur" },
    { id: 16, name: "Meghalaya" },
    { id: 17, name: "Mizoram" },
    { id: 18, name: "Nagaland" },
    { id: 19, name: "Odisha" },
    { id: 20, name: "Punjab" },
    { id: 21, name: "Rajasthan" },
    { id: 22, name: "Sikkim" },
    { id: 23, name: "Tamil Nadu" },
    { id: 24, name: "Telangana" },
    { id: 25, name: "Tripura" },
    { id: 26, name: "Uttar Pradesh" },
    { id: 27, name: "Uttarakhand" },
    { id: 28, name: "West Bengal" },
  ];

  const monthName = [
    { id: 1, name: "January" },
    { id: 2, name: "February" },
    { id: 3, name: "March" },
    { id: 4, name: "April" },
    { id: 5, name: "May" },
    { id: 6, name: "June" },
    { id: 7, name: "July" },
    { id: 8, name: "August" },
    { id: 9, name: "September" },
    { id: 10, name: "October" },
    { id: 11, name: "November" },
    { id: 12, name: "December" },
  ];

  return (
    <div className="bg-blue-100 h-screen w-screen text-black font-semibold">
      <div className="">
        <h1 className="text-6xl text-center">Disaster related Dashboard</h1>
      </div>
      {/* second half */}
      <div>
        <div className="text-black flex justify-around mt-4 font-semibold ">
          {/* By type */}
          <select className="px-2">
            {disasterType.map((elem) => (
              <option key={elem.id}>{elem.disasterTypes}</option>
            ))}
          </select>
          {/* Date */}
          <input type="date" name="" id="" />
          {/* Miscellaneous */}
          <button className=" bg-blue-300 px-3">Miscellaneous</button>
          {/* Archieve */}
          <button className=" bg-blue-300 px-3">Archieve</button>
          {/* Statewise */}
          <select>
            {stateName.map((elem) => (
              <option key={elem.id}>{elem.name}</option>
            ))}
          </select>
          {/* By Month */}
          <select>
            {monthName.map((elem) => (
              <option key={elem.id}>{elem.name}</option>
            ))}
          </select>
        </div>

        <div className="flex h-screen">
          <div className="w-[70%] bg-blue-500 p-4 text-white flex justify-center items-center">
            <div className="w-1/3 h-2/3 bg-white"></div>
          </div>

          <div className="w-[30%] bg-green-500 p-4 text-white flex justify-center items-center">
            <div className="w-2/3 h-1/4 bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalDashboard;
