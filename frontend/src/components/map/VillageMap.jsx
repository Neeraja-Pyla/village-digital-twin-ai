import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";

const greenIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const yellowIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function FlyToVillage({ village }) {
  const map = useMap();

  useEffect(() => {
    if (village) {
      map.flyTo(
        [village.lat, village.lng],
        10,
        {
          animate: true,
          duration: 1.5,
        }
      );
    }
  }, [village, map]);

  return null;
}

export default function VillageMap({
  villages,
  selectedVillage,
  setSelectedVillage,
}) {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-xl">

      <div className="flex justify-between items-center p-6">

        <div>

          <h2 className="text-2xl font-bold text-white">
            🗺 AI Village Intelligence Map
          </h2>

          <p className="text-slate-400 mt-1">
            GIS Powered Disaster Monitoring Dashboard
          </p>

        </div>

        <div className="bg-slate-800 rounded-xl px-5 py-4">

          <p className="text-slate-400 text-sm">
            Active Monitoring
          </p>

          <p className="text-cyan-400 font-bold text-lg">
            {selectedVillage.name}
          </p>

          <p className="text-slate-400 text-sm">
            {selectedVillage.state}
          </p>

        </div>

      </div>

      {/* Dashboard Statistics */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-6 pb-6">

        <div className="bg-slate-800 rounded-xl p-4">

          <p className="text-slate-400 text-sm">
            Villages
          </p>

          <p className="text-cyan-400 text-3xl font-bold">
            {villages.length}
          </p>

        </div>

        <div className="bg-slate-800 rounded-xl p-4">

          <p className="text-slate-400 text-sm">
            Critical
          </p>

          <p className="text-red-400 text-3xl font-bold">
            {villages.filter(v => v.risk >= 80).length}
          </p>

        </div>

        <div className="bg-slate-800 rounded-xl p-4">

          <p className="text-slate-400 text-sm">
            Moderate
          </p>

          <p className="text-yellow-400 text-3xl font-bold">
            {villages.filter(v => v.risk >= 60 && v.risk < 80).length}
          </p>

        </div>

        <div className="bg-slate-800 rounded-xl p-4">

          <p className="text-slate-400 text-sm">
            Safe
          </p>

          <p className="text-green-400 text-3xl font-bold">
            {villages.filter(v => v.risk < 60).length}
          </p>

        </div>

      </div>

      <MapContainer
        center={[15.9129, 79.7400]}
        zoom={6}
        style={{
          height: "500px",
          width: "100%",
        }}
      >

        <TileLayer
          attribution="© OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <FlyToVillage village={selectedVillage} />








        {villages.map((village) => (
          <Marker
            key={village.id}
            position={[village.lat, village.lng]}
            icon={
              village.risk >= 80
                ? redIcon
                : village.risk >= 60
                ? yellowIcon
                : greenIcon
            }
            eventHandlers={{
              click: () => setSelectedVillage(village),
            }}
          >
            <Popup>

              <div className="w-64">

                <h2 className="text-xl font-bold">
                  {village.name}
                </h2>

                <p className="text-gray-500">
                  {village.district}
                </p>

                <hr className="my-2" />

                <div className="space-y-1">

                  <p>
                    🌍 <strong>State:</strong> {village.state}
                  </p>

                  <p>
                    🌾 <strong>Crop:</strong> {village.crop}
                  </p>

                  <p>
                    🌦 <strong>Weather:</strong> {village.weather}
                  </p>

                  <p>
                    🌡 <strong>Temperature:</strong> {village.temperature}°C
                  </p>

                  <p>
                    👥 <strong>Population:</strong>{" "}
                    {village.population.toLocaleString()}
                  </p>

                  <p>
                    🏠 <strong>Households:</strong>{" "}
                    {village.households.toLocaleString()}
                  </p>

                  <p>
                    📍 <strong>Coordinates:</strong>{" "}
                    {village.lat.toFixed(3)},
                    {village.lng.toFixed(3)}
                  </p>

                </div>

                <hr className="my-3" />

                <div
                  className={`font-bold text-lg ${
                    village.risk >= 80
                      ? "text-red-600"
                      : village.risk >= 60
                      ? "text-yellow-600"
                      : "text-green-600"
                  }`}
                >
                  ⚠ AI Risk Score : {village.risk}/100
                </div>

              </div>

            </Popup>

          </Marker>
        ))}

      </MapContainer>

      {/* Legend */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-slate-950">

        <div className="text-center">

          <div className="w-5 h-5 rounded-full bg-green-500 mx-auto"></div>

          <p className="text-green-400 mt-2 font-medium">
            Low Risk
          </p>

        </div>

        <div className="text-center">

          <div className="w-5 h-5 rounded-full bg-yellow-500 mx-auto"></div>

          <p className="text-yellow-300 mt-2 font-medium">
            Moderate Risk
          </p>

        </div>

        <div className="text-center">

          <div className="w-5 h-5 rounded-full bg-red-500 mx-auto"></div>

          <p className="text-red-400 mt-2 font-medium">
            Critical Risk
          </p>

        </div>

        <div className="text-center">

          <div className="w-5 h-5 rounded-full bg-cyan-500 mx-auto"></div>

          <p className="text-cyan-400 mt-2 font-medium">
            Selected Village
          </p>

        </div>

      </div>

      {/* Footer */}

      <div className="bg-slate-900 border-t border-slate-700 p-5 text-center">

        <p className="text-slate-400">
          🤖 AI continuously monitors
          <span className="text-cyan-400 font-semibold">
            {" "}{villages.length} villages
          </span>
          {" "}across multiple states using GIS, weather intelligence,
          demographic indicators and Machine Learning.
        </p>

      </div>

    </div>
  );
}