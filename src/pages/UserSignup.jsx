import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postData } from "../utils/apiService";
import { UserDataContext } from "../context/userContext";

const UserSignup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);

  async function onSubmitHandler(e) {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    };
    const res = await postData("/user/register", newUser);
    if (res.success) {
      setUser(res.user);
      localStorage.setItem("uberToken", res.token);

      navigate("/home");
    }

    // console.log({ firstname, lastname, email, password });
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
          <h3 className="text-lg font-medium mb-2">Full Name</h3>
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

          <button className="bg-[#111111] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg">
            Sign Up
          </button>
          <p className="text-left mb-3 text-xm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login here.
            </Link>
          </p>
        </form>
      </div>
      <p className="text-center text-sm text-gray-500 mt-4">
        By signing up, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  );
};

export default UserSignup;
