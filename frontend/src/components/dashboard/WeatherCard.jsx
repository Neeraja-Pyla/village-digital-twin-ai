export default function WeatherCard({ village }) {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6 shadow-lg h-full">

      <h2 className="text-xl font-bold text-white mb-6">
        🌤 Weather Overview
      </h2>

      <div className="grid grid-cols-2 gap-5">

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-slate-400 text-sm">Condition</p>
          <p className="text-2xl font-bold text-yellow-400 mt-2">
            {village.weather}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-slate-400 text-sm">Temperature</p>
          <p className="text-2xl font-bold text-red-400 mt-2">
            {village.temperature}°C
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-slate-400 text-sm">Crop</p>
          <p className="text-xl font-bold text-green-400 mt-2">
            {village.crop}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-slate-400 text-sm">Risk</p>
          <p className="text-xl font-bold text-cyan-400 mt-2">
            {village.risk}
          </p>
        </div>

      </div>

    </div>
  );
}