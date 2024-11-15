import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("sihToken")) {
      navigate("/signin");
    }
  });
  return <div>Dashboard</div>;
};

export default Dashboard;
