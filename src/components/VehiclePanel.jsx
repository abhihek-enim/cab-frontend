/* eslint-disable react/prop-types */
const VehiclePanel = ({ setVehiclePanel }) => {
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-2xl font-semibold ml-3">Choose a ride:</h3>
        <div className="relative">
          <h5
            onClick={() => {
              setVehiclePanel(false);
            }}
            className="absolute right-6 top-1 text-2xl font-bold"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center my-4 border-2 active:border-black p-4 mx-2 rounded-xl">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png"
            alt=""
          />
          <div className="w-1/2 ml-2">
            <h1 className="text-xl font-semibold">
              UberGo <span className="text-xm"> 4</span>
            </h1>
            <p>2 mins away. 15:24</p>
            <p>Affordable Card</p>
          </div>
          <div className="flex justify-center items-center m-2 px-3 py-6">
            <h2 className="text-lg font-bold">$123.99</h2>
          </div>
        </div>
        <div className="flex justify-between items-center my-4 border-2 active:border-black p-4 mx-2 rounded-xl">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png"
            alt=""
          />
          <div className="w-1/2 ml-2">
            <h1 className="text-xl font-semibold">
              UberGo <span className="text-xm"> 4</span>
            </h1>
            <p>2 mins away. 15:24</p>
            <p>Affordable Card</p>
          </div>
          <div className="flex justify-center items-center m-2 px-3 py-6">
            <h2 className="text-lg font-bold">$123.99</h2>
          </div>
        </div>
        <div className="flex justify-between items-center my-4 border-2 active:border-black p-4 mx-2 rounded-xl">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png"
            alt=""
          />
          <div className="w-1/2 ml-2">
            <h1 className="text-xl font-semibold">
              UberGo <span className="text-xm"> 4</span>
            </h1>
            <p>2 mins away. 15:24</p>
            <p>Affordable Card</p>
          </div>
          <div className="flex justify-center items-center m-2 px-3 py-6">
            <h2 className="text-lg font-bold">$123.99</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehiclePanel;
