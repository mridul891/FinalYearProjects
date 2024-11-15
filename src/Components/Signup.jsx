import { useState } from "react";
import { Label } from "./ui/label";
import { Link } from "react-router-dom";

export function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [uniqueId, setUniqueId] = useState("");

  const handleSubmit = async () => {
    const resposne = await axios.post(
      "http://localhost:3000/api/v1/user/signin",
      { username, password }
    );

    const token = await resposne.data.token;
    localStorage.setItem("sihToken", token);
    navigate("/dashboard");
  };

  return (
    <div className="w-full bg-black text-white h-full flex justify-center items-center ">
      <div className=" p-10 flex flex-col justify-center w-full gap-2 lg:gap-4 lg:w-[40%] ">
        <div>
          <h1 className="text-3xl font-bold text-center mb-10 lg:text-left">
            Sign Up
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
            className="text-md rounded-xl px-5 py-2 font-semibold text-black"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Label className="text-2xl">Uniqueid</Label>
          <input
            placeholder="b12de"
            className="text-md rounded-xl px-5 py-2 font-semibold text-black"
            onChange={(e) => setUniqueId(e.target.value)}
          />
        </div>

        <div>
          <button className="bg-white text-black w-[10rem] rounded-xl text-lg py-2 font-semibold ">
            Submit
          </button>
        </div>
        <div>
          <p className="font-semibold">
            Already Have an account ?
            <span className="text-blue-400 ml-3">
              <Link to="/signin">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
