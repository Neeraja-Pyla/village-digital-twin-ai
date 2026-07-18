export default function WeatherCard({ village }) {

  const humidity =
    village.temperature >= 33
      ? 48
      : village.temperature >= 30
      ? 61
      : 76;

  const wind =
    village.temperature >= 33
      ? 12
      : village.temperature >= 30
      ? 9
      : 6;

  const rainChance =
    village.weather === "Rain"
      ? 90
      : village.weather === "Cloudy"
      ? 45
      : 15;

  return (
    <div className="bg-slate-900 rounded-xl p-4 shadow-lg border border-slate-700">

      <h2 className="text-xl font-bold text-white">
        Weather
      </h2>

      <div className="mt-5 space-y-4 text-slate-300">

        <div className="flex justify-between">
          <span>Condition</span>
          <span className="font-semibold">
            {village.weather}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Temperature</span>
          <span className="font-semibold">
            {village.temperature}°C
          </span>
        </div>

        <div className="flex justify-between">
          <span>Humidity</span>
          <span className="font-semibold">
            {humidity}%
          </span>
        </div>

        <div className="flex justify-between">
          <span>Wind Speed</span>
          <span className="font-semibold">
            {wind} km/h
          </span>
        </div>

        <div className="flex justify-between">
          <span>Rain Chance</span>
          <span className="font-semibold">
            {rainChance}%
          </span>
        </div>

      </div>

    </div>
  );
}