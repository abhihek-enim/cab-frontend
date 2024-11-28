import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className=" bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1647424825116-fbf8b9415fc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYWZmaWMlMjBsaWdodHxlbnwwfDF8MHx8fDA%3D)] h-screen pt-8  w-full flex flex-col justify-between bg-red-400">
        <img
          className="w-16 ml-8 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <div className="bg-white bg-opacity-50 pb-7 py-5 px-5">
          <h2 className="text-3xl font-medium ">Get Started with Cabby </h2>
          <Link
            to="/login"
            className="flex justify-center items-center bg-black text-white py-3 mt-4 rounded w-full"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
