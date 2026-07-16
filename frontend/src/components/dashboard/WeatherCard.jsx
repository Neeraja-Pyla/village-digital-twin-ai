function WeatherCard() {
  return (
    <div className="bg-sky-900 rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-bold text-white">
        Weather Forecast
      </h2>

      <p className="mt-6 text-5xl font-bold text-white">
        31°C
      </p>

      <p className="mt-2 text-sky-200">
        Sunny • Humidity 68%
      </p>
    </div>
  );
}

export default WeatherCard;