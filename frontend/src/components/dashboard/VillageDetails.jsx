export default function VillageDetails({ village }) {
  const riskColor =
    village.risk >= 80
      ? "text-red-400"
      : village.risk >= 60
      ? "text-yellow-400"
      : "text-green-400";

  const riskStatus =
    village.risk >= 80
      ? "Critical"
      : village.risk >= 60
      ? "Moderate"
      : "Low";

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-lg p-6 h-full">

      <div className="flex justify-between items-center">

        <div>
          <h2 className="text-2xl font-bold text-white">
            📍 Village Intelligence
          </h2>

          <p className="text-slate-400">
            Administrative & Geographic Information
          </p>
        </div>

        <div
          className={`px-4 py-2 rounded-full bg-slate-800 font-bold ${riskColor}`}
        >
          {riskStatus}
        </div>

      </div>

      <div className="grid grid-cols-2 gap-4 mt-8">

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-slate-400 text-sm">Village</p>
          <p className="text-white text-lg font-semibold">
            {village.name}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-slate-400 text-sm">District</p>
          <p className="text-cyan-400 text-lg font-semibold">
            {village.district}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-slate-400 text-sm">State</p>
          <p className="text-green-400 font-semibold">
            {village.state}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-slate-400 text-sm">Primary Crop</p>
          <p className="text-yellow-400 font-semibold">
            🌾 {village.crop}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-slate-400 text-sm">Population</p>
          <p className="text-white font-bold">
            👥 {village.population.toLocaleString()}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-slate-400 text-sm">Households</p>
          <p className="text-white font-bold">
            🏠 {village.households.toLocaleString()}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-slate-400 text-sm">Temperature</p>
          <p className="text-orange-400 font-bold">
            🌡 {village.temperature}°C
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-slate-400 text-sm">Weather</p>
          <p className="text-blue-400 font-bold">
            {village.weather}
          </p>
        </div>

      </div>

      {/* Coordinates */}

      <div className="mt-6 bg-slate-800 rounded-xl p-5">

        <h3 className="text-white font-semibold mb-4">
          🌍 Geographic Coordinates
        </h3>

        <div className="grid grid-cols-2 gap-4">

          <div>
            <p className="text-slate-400 text-sm">
              Latitude
            </p>

            <p className="text-cyan-400">
              {village.lat}
            </p>
          </div>

          <div>
            <p className="text-slate-400 text-sm">
              Longitude
            </p>

            <p className="text-cyan-400">
              {village.lng}
            </p>
          </div>

        </div>

      </div>

      {/* AI Summary */}

      <div className="mt-6 bg-slate-800 rounded-xl p-5">

        <h3 className="text-white font-semibold mb-3">
          🤖 AI Summary
        </h3>

        <p className="text-slate-300 leading-7">

          <span className="text-cyan-400 font-semibold">
            {village.name}
          </span>{" "}
          in{" "}
          <span className="text-yellow-400">
            {village.district}
          </span>
          , {village.state}, has a population of{" "}
          <span className="text-green-400">
            {village.population.toLocaleString()}
          </span>{" "}
          with{" "}
          <span className="text-blue-400">
            {village.households.toLocaleString()}
          </span>{" "}
          households. Current AI risk score is{" "}
          <span className={riskColor}>
            {village.risk}/100
          </span>
          . The dominant agricultural crop is{" "}
          <span className="text-yellow-400">
            {village.crop}
          </span>
          . The platform recommends continuous monitoring based on live weather and machine learning analysis.

        </p>

      </div>

      {/* Data Sources */}

      <div className="mt-6 flex flex-wrap gap-3">

        <span className="bg-green-600/20 text-green-400 px-3 py-2 rounded-full text-sm">
          🌾 Agriculture
        </span>

        <span className="bg-blue-600/20 text-blue-400 px-3 py-2 rounded-full text-sm">
          🛰 GIS
        </span>

        <span className="bg-yellow-600/20 text-yellow-300 px-3 py-2 rounded-full text-sm">
          🌦 Weather
        </span>

        <span className="bg-purple-600/20 text-purple-300 px-3 py-2 rounded-full text-sm">
          🤖 Machine Learning
        </span>

        <span className="bg-red-600/20 text-red-400 px-3 py-2 rounded-full text-sm">
          📊 Risk Analytics
        </span>

      </div>

    </div>
  );
}