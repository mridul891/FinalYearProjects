import { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export function Signin() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    if (localStorage.getItem("sihToken")) {
      toast.success("Sign in Completed");
      navigate("/dashboard");
    }
  }, []);

  const handleSubmit = async () => {
    const response = await axios.post(
      `http://localhost:3000/api/v1/user/signin`,
      { username, password }
    );
    if (response.status === 200) {
      const token = await response.data.token;
      localStorage.setItem("sihToken", token);
      toast.success("Sign in Completed");
      navigate("/dashboard");
    } else {
      toast.error("Error while Sign in");
    }
  };

  return (
    <div className="w-full bg-black text-white h-full flex justify-center items-center ">
      <div className=" p-10 flex flex-col justify-center w-full gap-2 lg:gap-4 lg:w-[40%] ">
        <div>
          <h1 className="text-3xl font-bold text-center mb-10 lg:text-left">
            Sign In
          </h1>
        </div>
        <div className="flex flex-col gap-3">
          <Label className="text-2xl">Username</Label>
          <input
            placeholder="JohnDoe"
            className="text-md rounded-xl px-5 py-2 font-semibold text-black"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Label className="text-2xl">Password</Label>
          <input
            placeholder="JohnDoe@123"
            type="password"
            className="text-md rounded-xl px-5 py-2 font-semibold text-black"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button
            onClick={handleSubmit}
            className="bg-white text-black w-[10rem] rounded-xl text-lg py-2 font-semibold "
          >
            Submit
          </button>
        </div>
        <div>
          <p className="font-semibold">
            Doesn&apos;t have an account ?
            <span className="text-blue-400 ml-3">
              <Link to="/signup">Register</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
