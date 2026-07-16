export default function RiskScoreCard() {
  return (
    <div className="rounded-xl bg-gradient-to-br from-red-700 to-red-900 p-6 shadow-lg">
      <h2 className="text-xl font-bold text-white">
        AI Risk Score
      </h2>

      <div className="mt-6 flex items-center justify-between">
        <h1 className="text-6xl font-extrabold text-white">
          84
        </h1>

        <span className="rounded-full bg-red-500 px-4 py-2 text-sm font-semibold">
          HIGH
        </span>
      </div>

      <div className="mt-6 h-3 rounded-full bg-red-300">
        <div className="h-3 w-[84%] rounded-full bg-white"></div>
      </div>

      <p className="mt-4 text-red-100">
        Flood probability is high due to heavy rainfall prediction.
      </p>
    </div>
  );
}