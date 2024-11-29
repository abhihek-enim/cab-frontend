import { useRef, useState } from "react";
import "remixicon/fonts/remixicon.css";
import LocatioSearchPanel from "../components/LocatioSearchPanel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedVehicle from "../components/ConfirmedVehicle";
const Home = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmedPanel, setConfirmedPanel] = useState(false);
  const confirmedPanelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  async function onSubmitHandler(e) {
    e.preventDefault();
  }
  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
          duration: "0.3",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
          duration: "0.3",
        });
      }
    },
    [vehiclePanel]
  );
  useGSAP(
    function () {
      if (confirmedPanel) {
        gsap.to(confirmedPanelRef.current, {
          transform: "translateY(0)",
          duration: "0.3",
        });
      } else {
        gsap.to(confirmedPanelRef.current, {
          transform: "translateY(100%)",
          duration: "0.3",
        });
      }
    },
    [confirmedPanel]
  );

  return (
    <div className="h-screen relative">
      <img
        className="w-16  absolute left-5 top-5 "
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="h-screen w-screen ">
        <img
          className="h-full w-full object-cover "
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div
        className={`bg-white absolute bottom-0 w-full p-5 transition-all duration-300 ${
          isInputFocused ? "h-[90vh]" : "h-auto"
        }`}
      >
        {isInputFocused && (
          <div className="relative">
            <h5
              onClick={() => {
                setIsInputFocused(false);
              }}
              className="absolute right-6 top-1 text-2xl font-bold"
            >
              <i className="ri-arrow-down-wide-line"></i>
            </h5>
          </div>
        )}
        <h4 className="text-2xl font-medium">Find a ride</h4>
        <form onSubmit={onSubmitHandler} className="mt-3  relative">
          {!isInputFocused && (
            <div className="line absolute h-16 w-[2px] top-[15%] left-2 bg-black rounded-lg"></div>
          )}
          <input
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-xm"
            type="text"
            placeholder="Add a pick-up location"
            required
            onFocus={() => setIsInputFocused(true)}
            // onBlur={() => setIsInputFocused(false)}
          />
          <input
            value={drop}
            onChange={(e) => setDrop(e.target.value)}
            className="bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-xm"
            type="text"
            placeholder="Add a drop location"
            required
            onFocus={() => setIsInputFocused(true)}
            // onBlur={() => setIsInputFocused(false)}
          />
        </form>
        {isInputFocused && (
          <div>
            <LocatioSearchPanel
              vehiclePanel={vehiclePanel}
              setVehiclePanel={setVehiclePanel}
              setIsInputFocused={setIsInputFocused}
            />
          </div>
        )}
      </div>
      <div
        ref={vehiclePanelRef}
        className=" fixed z-10 bottom-0 translate-y-full bg-white px-3 py-6"
      >
        <VehiclePanel
          setConfirmedPanel={setConfirmedPanel}
          setVehiclePanel={setVehiclePanel}
        />
      </div>
      <div
        ref={confirmedPanelRef}
        className=" fixed z-10 bottom-0 translate-y-full bg-white px-3 py-6"
      >
        <ConfirmedVehicle
          confirmedPanel={confirmedPanel}
          setConfirmedPanel={setConfirmedPanel}
        />
      </div>
    </div>
  );
};

export default Home;
