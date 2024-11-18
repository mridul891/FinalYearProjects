import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  const getData = async () => {
    const response = await axios.get(
      "https://webscrapper-bmoc.onrender.com/info"
    );

    setData(response.data);
    setLoaded(true);

    
  };

  useEffect(() => {
    if (!localStorage.getItem("sihToken")) {
      navigate("/signin");
    }
    getData();
  }, [navigate]);

  return (
    <div>
      {isLoaded &&
        data.map((elem, index) => {
          return (
            <>
              <h1 key={index}>{elem.title}</h1>
              <hr className="h-3 bg-black"></hr>
            </>
          );
        })}
    </div>
  );
};

export default Dashboard;
