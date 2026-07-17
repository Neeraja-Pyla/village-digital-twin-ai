export default function VillageDetails({ village }) {
  return (
    <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
      <h2 className="text-2xl font-bold mb-5">
        {village.name}
      </h2>

      <p>👥 Population: {village.population}</p>

      <p className="mt-2">
        🏠 Households: {village.households}
      </p>

      <p className="mt-2">
        🌾 Crop: {village.crop}
      </p>

      <p className="mt-2">
        🌦 Weather: {village.weather}
      </p>

      <p className="mt-2">
        ⚠ Risk Score: {village.risk}
      </p>
    </div>
  );
}