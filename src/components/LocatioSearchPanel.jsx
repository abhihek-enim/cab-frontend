/* eslint-disable react/prop-types */
const locationSearchResults = [
  {
    id: 1,
    locationText: "Central Park, New York, NY",
    locationType: {
      type: "Park",
      icon: "ri-tree-line", // Icon class from Remix Icon
    },
  },
  {
    id: 2,
    locationText: "Times Square, New York, NY",
    locationType: {
      type: "Tourist",
      icon: "ri-map-pin-line", // Icon class from Remix Icon
    },
  },
  {
    id: 3,
    locationText: "John F. Kennedy International Airport, Queens, NY",
    locationType: {
      type: "Airport",
      icon: "ri-flight-takeoff-line", // Icon class from Remix Icon
    },
  },
  {
    id: 4,
    locationText: "Penn Station, New York, NY",
    locationType: {
      type: "Train",
      icon: "ri-train-line", // Icon class from Remix Icon
    },
  },
  {
    id: 5,
    locationText: "Brooklyn Bridge, Brooklyn, NY",
    locationType: {
      type: "Landmark",
      icon: "ri-building-line", // Icon class from Remix Icon
    },
  },
  {
    id: 6,
    locationText: "Starbucks, 5th Avenue, New York, NY",
    locationType: {
      type: "Eatery",
      icon: "ri-cup-line", // Icon class from Remix Icon
    },
  },
  {
    id: 7,
    locationText: "New York University, New York, NY",
    locationType: {
      type: "University",
      icon: "ri-school-line", // Icon class from Remix Icon
    },
  },
];

const LocatioSearchPanel = ({ setVehiclePanel, setIsInputFocused }) => {
  //   console.log(vehiclePanel);
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {locationSearchResults.map((location) => (
        <div
          onClick={() => {
            // console.log("clicked");
            setVehiclePanel(true);
            setIsInputFocused(false);
          }}
          key={location.id}
          className="flex items-center justify-between p-3 border-b last:border-none hover:bg-gray-50 transition"
        >
          <div className="flex items-center gap-3 flex-shrink-0">
            <i
              className={`${location.locationType.icon} text-xl text-gray-800`}
            ></i>
            <p className="text-sm font-bold text-gray-800">
              {location.locationType.type}
            </p>
          </div>
          <p className="text-sm text-gray-600 truncate max-w-[60%] text-right">
            {location.locationText}
          </p>
        </div>
      ))}
    </div>
  );
};

export default LocatioSearchPanel;
