import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import axios from "axios";
import { useState, useCallback, useEffect } from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 20.5937,
  lng: 78.9629,
};

const iconMap = {
  Lightining: "https://i.ibb.co/CsWFL8zd/rainy.png",
  flood: "https://cdn-icons-png.flaticon.com/512/685/685655.png",
  earthquake: "https://cdn-icons-png.flaticon.com/512/252/252035.png",
};

const MyMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = useState(null);
  const [alerts, setAlerts] = useState([]);

  const onLoad = useCallback((mapInstance) => setMap(mapInstance), []);
  const onUnmount = useCallback(() => setMap(null), []);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await axios.get("http://localhost:2000/news");
        setAlerts(response.data.data);
      } catch (error) {
        console.error("Error fetching alerts:", error);
      }
    };
    fetchAlerts();
  }, []);

  return isLoaded ? (
    <div className="flex flex-col lg:grid lg:grid-cols-2 h-[80vh] w-full py-6 px-10 gap-6 bg-gray-50 font-sans">
      {/* Map Section */}
      <div className="h-1/2 lg:h-full border border-gray-300 rounded-lg">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={5.1}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {alerts.map(({ disaster_type, centroid }, index) => (
            <Marker
              key={index}
              position={{
                lat: Number(centroid.split(",")[0]),
                lng: Number(centroid.split(",")[1]),
              }}
              title={disaster_type}
              icon={{
                url: iconMap[disaster_type] || "",
                scaledSize: new window.google.maps.Size(30, 30),
              }}
            />
          ))}
        </GoogleMap>
      </div>

      {/* Info Section */}
      <div className="bg-white border border-gray-200 rounded-xl h-full overflow-y-auto">
        {/* Sticky Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-5 z-10">
          <h2 className="text-2xl font-bold text-blue-700 tracking-wide">
            Disaster Alerts
          </h2>
          <p className="text-sm text-gray-500">
            Latest reported incidents across the region
          </p>
        </div>

        {/* Alert Cards */}
        <div className="p-5 space-y-4">
          {alerts.map(
            ({ disaster_type, area_description, severity_color ,centroid}, index) => (
              <div
                key={index}
                className="rounded-lg p-4 border border-gray-100 transition duration-300 ease-in-out transform hover:scale-[1.01]"
                style={{
                  backgroundColor: severity_color,
                  // Ensures text is readable on colored backgrounds
                }}
              >
                <h3 className="text-lg font-semibold capitalize">
                  {disaster_type}
                </h3>
                <p className="text-sm font-medium opacity-90">
                  {area_description}
                </p>
                  {/* {Number(centroid.split(",")[0])} 
                  {" "}
                  {Number(centroid.split(",")[1])} */}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  ) : (
    <p className="text-center mt-10 text-lg text-gray-600">Loading map...</p>
  );
};

export default MyMap;
