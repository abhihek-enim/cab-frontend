import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicle, setVehicle] = useState({
    color: "",
    capacity: "",
    plate: "",
    vehicleType: "",
  });

  function onSubmitHandler(e) {
    e.preventDefault();
    console.log({ firstname, lastname, email, password, ...vehicle });
  }

  return (
    <div className="h-screen p-7 flex flex-col justify-between">
      <div>
        <img
          className="w-16 pb-7"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Logo"
        />
        <form onSubmit={onSubmitHandler}>
          <div className="flex gap-4 mb-7">
            <input
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
              required
              type="text"
              placeholder="First Name"
            />
            <input
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
              required
              type="text"
              placeholder="Last Name"
            />
          </div>

          <h3 className="text-lg font-medium mb-2">Email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
            required
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
            required
            type="password"
            placeholder="password"
          />
          <h3 className="text-lg font-medium mb-2">Vehicle Details</h3>
          <div className="grid grid-cols-2 gap-4 mb-7">
            <input
              value={vehicle.color}
              onChange={(e) =>
                setVehicle({ ...vehicle, color: e.target.value })
              }
              className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
              required
              type="text"
              placeholder="Vehicle Color"
            />
            <input
              value={vehicle.capacity}
              onChange={(e) =>
                setVehicle({ ...vehicle, capacity: e.target.value })
              }
              className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
              required
              type="number"
              placeholder="Vehicle Capacity"
            />
            <input
              value={vehicle.plate}
              onChange={(e) =>
                setVehicle({ ...vehicle, plate: e.target.value })
              }
              className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
              required
              type="text"
              placeholder="Plate Number"
            />
            <input
              value={vehicle.vehicleType}
              onChange={(e) =>
                setVehicle({ ...vehicle, vehicleType: e.target.value })
              }
              className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
              required
              type="text"
              placeholder="Vehicle Type"
            />
          </div>

          <button className="bg-[#111111] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg">
            Sign Up
          </button>
          <p className="text-left mb-3 text-[18px]">
            Already have an account?{" "}
            <Link to="/captain-login" className="text-blue-600">
              Login here.
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CaptainSignup;
