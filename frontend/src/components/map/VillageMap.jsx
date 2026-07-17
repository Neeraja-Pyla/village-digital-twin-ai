import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


export default function VillageMap({
  villages,
  selectedVillage,
  setSelectedVillage,
}) {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      <h2 className="bg-slate-900 text-white text-2xl font-bold p-5">
        Village Digital Twin Map
      </h2>

      <MapContainer
        center={[14.4426, 79.9865]}
        zoom={11}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {villages.map((village) => (
 <Marker
  key={village.id}
  position={[village.lat, village.lng]}
  eventHandlers={{
    click: () => setSelectedVillage(village),
  }}
>
    <Popup>
  <strong>
    {village.name}
    {selectedVillage.id === village.id ? " ⭐" : ""}
  </strong>

  <br />

  Population: {village.population}

  <br />

  Risk: {village.risk}
</Popup>
  </Marker>
))}
      </MapContainer>
    </div>
  );
}