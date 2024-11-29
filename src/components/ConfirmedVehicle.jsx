/* eslint-disable react/prop-types */
const ConfirmedVehicle = ({ confirmedPanel, setConfirmedPanel }) => {
  console.log(confirmedPanel);
  return (
    <div className="">
      {" "}
      <div className=" w-[93%] flex justify-between">
        <h3 className="text-2xl font-semibold ml-3">Chosen Ride</h3>
        <div className="relative">
          <h5
            onClick={() => {
              console.log("clicked");
              setConfirmedPanel(false);
            }}
            className="absolute right-6 top-1 text-2xl font-bold"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
        </div>
      </div>{" "}
      <div className="pulsing-line bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-opacity-80 h-1  w-full mx-auto mt-4 rounded-md"></div>
      <div className="flex flex-col justify-between items-center ">
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png"
          alt=""
        />
        <div className="w-full flex flex-col items-center gap-5 p-6">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-xl ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-2xl font-semibold">345/24 1-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Bodla road, Agra</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-xl ri-map-pin-3-fill"></i>
            <div>
              <h3 className="text-2xl font-semibold">345/24 1-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Bodla road, Agra</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-xl ri-cash-line"></i>
            <div>
              <h3 className="text-2xl font-semibold">$123.99</h3>
              <p className="text-sm -mt-1 text-gray-600">Payment via cash</p>
            </div>
          </div>
        </div>
        <button className="w-full px-6 py-3 bg-black text-white text-xl font-semibold rounded-xl">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmedVehicle;
