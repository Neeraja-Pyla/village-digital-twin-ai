export default function RiskScoreCard({ village }) {
  const riskLevel =
    village.risk >= 80
      ? "Critical"
      : village.risk >= 60
      ? "Moderate"
      : "Safe";

  const riskColor =
    village.risk >= 80
      ? "text-red-400"
      : village.risk >= 60
      ? "text-yellow-400"
      : "text-green-400";

  const confidence = Math.min(
    99,
    Math.max(85, village.risk + 10)
  );

  const trend =
    village.risk >= 80
      ? "Increasing"
      : village.risk >= 60
      ? "Stable"
      : "Decreasing";

  return (
    <div className="bg-slate-900 rounded-xl p-4 shadow-lg border border-slate-700">

      <h2 className="text-xl font-bold text-white">
        Risk Assessment
      </h2>

      <p className="text-4xl font-bold mt-5 text-red-400">
        {village.risk}
      </p>

      <p className={`mt-3 text-xl font-semibold ${riskColor}`}>
        {riskLevel}
      </p>

      <div className="mt-6 space-y-3 text-slate-300">

        <div className="flex justify-between">
          <span>AI Confidence</span>
          <span className="font-bold">
            {confidence}%
          </span>
        </div>

        <div className="flex justify-between">
          <span>Trend</span>
          <span className="font-bold">
            {trend}
          </span>
        </div>

      </div>

    </div>
  );
}