import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";




const greenIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const yellowIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const redIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});




export default function VillageMap({
  villages,
  selectedVillage,
  setSelectedVillage,
}) {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg border border-slate-700">
      <h2 className="bg-slate-900 text-white text-2xl font-bold p-5">
        Village Digital Twin Map
      </h2>

      <MapContainer
        center={[selectedVillage.lat, selectedVillage.lng]}
        zoom={11}
        style={{ height: "360px", width: "100%" }}
      >
        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

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
  <div className="space-y-2">

    <h3 className="font-bold text-lg">
      {village.name}
    </h3>

    <p>
      📍 {village.district}, {village.state}
    </p>

    <p>
      👥 Population: {village.population.toLocaleString()}
    </p>

    <p>
      🏠 Households: {village.households.toLocaleString()}
    </p>

    <p>
      🌾 Crop: {village.crop}
    </p>

    <p>
      🌡 Temperature: {village.temperature}°C
    </p>

    <p>
      ⚠ Risk Score:
      <strong> {village.risk}</strong>
    </p>

  </div>
</Popup>




  </Marker>
))}
      </MapContainer>



<div className="bg-slate-900 text-white p-4 flex flex-wrap gap-6 justify-center">

  <div className="flex items-center gap-2">
    <div className="w-4 h-4 rounded-full bg-green-500"></div>
    <span>Safe (&lt;60)</span>
  </div>

  <div className="flex items-center gap-2">
    <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
    <span>Moderate (60–79)</span>
  </div>

  <div className="flex items-center gap-2">
    <div className="w-4 h-4 rounded-full bg-red-500"></div>
    <span>Critical (80+)</span>
  </div>

</div>








    </div>
  );
}