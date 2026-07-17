export default function RiskScoreCard({ village }) {
  return (
    <div className="bg-red-900 rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-bold text-white">
        Village Risk Score
      </h2>

      <p className="text-6xl font-bold mt-6 text-white">
        {village.risk}
      </p>

      <p className="mt-2 text-red-200">
        {village.risk >= 80
          ? "High Risk"
          : village.risk >= 60
          ? "Medium Risk"
          : "Low Risk"}
      </p>
    </div>
  );
}