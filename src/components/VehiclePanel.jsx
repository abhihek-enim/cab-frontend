/* eslint-disable react/prop-types */
const rideData = [
  {
    id: 1,
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png",
    title: "UberGo",
    seats: 4,
    timeAway: "2 mins away",
    arrivalTime: "15:24",
    description: "Affordable Car",
    price: "$123.99",
  },
  {
    id: 2,
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png",
    title: "UberXL",
    seats: 6,
    timeAway: "4 mins away",
    arrivalTime: "15:28",
    description: "Spacious Car",
    price: "$200.50",
  },
  {
    id: 3,
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png",
    title: "UberBlack",
    seats: 4,
    timeAway: "6 mins away",
    arrivalTime: "15:30",
    description: "Luxury Car",
    price: "$350.75",
  },
];
const VehiclePanel = ({ setVehiclePanel, setConfirmedPanel }) => {
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
        {rideData.map((ride) => (
          <div
            onClick={() => {
              setVehiclePanel(false);
              setConfirmedPanel(true);
            }}
            key={ride.id}
            className="flex justify-between items-center my-4 border-2 active:border-black p-4 mx-2 rounded-xl"
          >
            <img className="h-12" src={ride.image} alt={ride.title} />
            <div className="w-1/2 ml-2">
              <h1 className="text-xl font-semibold">
                {ride.title} <span className="text-sm">{ride.seats}</span>
              </h1>
              <p>
                {ride.timeAway}. {ride.arrivalTime}
              </p>
              <p>{ride.description}</p>
            </div>
            <div className="flex justify-center items-center m-2 px-3 py-6">
              <h2 className="text-lg font-bold">{ride.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehiclePanel;
