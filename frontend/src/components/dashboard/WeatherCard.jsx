export default function WeatherCard() {
  return (
    <div className="rounded-xl bg-gradient-to-br from-sky-600 to-blue-900 p-6 shadow-lg">
      <h2 className="text-xl font-bold text-white">
        Weather Intelligence
      </h2>

      <div className="mt-6 flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-bold text-white">
            31°C
          </h1>

          <p className="mt-2 text-sky-100">
            Sunny
          </p>
        </div>

        <div className="text-6xl">
          ☀️
        </div>
      </div>

      <div className="mt-6 space-y-2 text-sky-100">
        <p>💧 Humidity : 68%</p>
        <p>🌧 Rain Chance : 25%</p>
        <p>💨 Wind : 12 km/h</p>
      </div>
    </div>
  );
}