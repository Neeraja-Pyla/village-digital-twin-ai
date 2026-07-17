export default function WeatherCard({ village }) {
  return (
    <div className="bg-sky-900 rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-bold text-white">
        Weather Forecast
      </h2>

      <p className="mt-6 text-5xl font-bold text-white">
        {village.temperature}°C
      </p>

      <p className="mt-2 text-sky-200">
        {village.weather}
      </p>

      <div className="mt-6">
        <p className="text-sm text-sky-300">
          Crop
        </p>

        <p className="text-xl font-semibold text-white">
          {village.crop}
        </p>
      </div>
    </div>
  );
}