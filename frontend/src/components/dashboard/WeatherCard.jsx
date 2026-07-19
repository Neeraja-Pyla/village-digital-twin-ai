export default function WeatherCard({ village }) {
  const weatherIcons = {
    Sunny: "☀️",
    Cloudy: "☁️",
    Rain: "🌧️",
    Storm: "⛈️",
  };

  const weather = village.weather || "Sunny";

  const condition =
    village.temperature >= 38
      ? "Heatwave"
      : village.temperature >= 34
      ? "Hot"
      : village.temperature >= 28
      ? "Pleasant"
      : "Cool";

  const humidity =
    weather === "Rain"
      ? 88
      : weather === "Cloudy"
      ? 72
      : 48;

  const wind =
    weather === "Rain"
      ? 22
      : weather === "Cloudy"
      ? 15
      : 10;

  const rainChance =
    weather === "Rain"
      ? 90
      : weather === "Cloudy"
      ? 60
      : 15;

  const cropImpact =
    village.risk >= 80
      ? "High"
      : village.risk >= 60
      ? "Medium"
      : "Low";

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-lg p-6 h-full">

      <div className="flex justify-between items-center">

        <div>
          <h2 className="text-2xl font-bold text-white">
            🌦 Weather Intelligence
          </h2>

          <p className="text-slate-400">
            AI Environmental Monitoring
          </p>
        </div>

        <div className="text-6xl">
          {weatherIcons[weather]}
        </div>

      </div>

      <div className="text-center mt-8">

        <h1 className="text-6xl font-bold text-cyan-400">
          {village.temperature}°
        </h1>

        <p className="text-xl text-white mt-2">
          {weather}
        </p>

        <p className="text-slate-400">
          {condition}
        </p>

      </div>

      <div className="grid grid-cols-2 gap-4 mt-8">

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-slate-400">💧 Humidity</p>
          <p className="text-2xl font-bold text-blue-400 mt-2">
            {humidity}%
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-slate-400">🌧 Rain Chance</p>
          <p className="text-2xl font-bold text-cyan-400 mt-2">
            {rainChance}%
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-slate-400">💨 Wind</p>
          <p className="text-2xl font-bold text-green-400 mt-2">
            {wind} km/h
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-slate-400">🌾 Crop Impact</p>
          <p className="text-xl font-bold text-yellow-400 mt-2">
            {cropImpact}
          </p>
        </div>

      </div>

      <div className="mt-6 bg-slate-800 rounded-xl p-5">

        <p className="text-slate-400 mb-2">
          AI Weather Insight
        </p>

        <p className="text-white leading-7">

          {village.risk >= 80
            ? `Heavy environmental stress detected in ${village.name}. AI recommends immediate monitoring due to elevated disaster probability.`
            : village.risk >= 60
            ? `Weather conditions remain moderately stable. AI recommends preventive monitoring and crop inspections.`
            : `Current climatic conditions are favorable. Continue routine agricultural monitoring.`}

        </p>

      </div>

    </div>
  );
}