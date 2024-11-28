import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function onSubmitHandler(e) {
    e.preventDefault();
  }
  return (
    <div className="h-screen p-7 flex flex-col justify-between ">
      <div>
        <img
          className="w-16 pb-7 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form onSubmit={onSubmitHandler}>
          <h3 className="text-lg font-medium mb-2">Email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-xm"
            required
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-xm"
            type="password"
            required
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-xm">
            Login
          </button>
          <p className="text-left mb-3 text-xl">
            Give first ride{" "}
            <Link to="/captain-signup" className="text-yellow-500">
              Register as Captain.
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/login"
          className="flex justify-center items-center bg-blue-600 text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg "
        >
          Sign-in as Customer
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
