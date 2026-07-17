import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


export default function VillageMap() {
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

        <Marker position={[14.4426, 79.9865]}>
          <Popup>
            <strong>Village Alpha</strong>
            <br />
            Risk Score: 84
            <br />
            Population: 12,540
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}