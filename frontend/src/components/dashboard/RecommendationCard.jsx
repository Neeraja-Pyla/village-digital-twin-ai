export default function RecommendationCard({ village }) {

  let recommendation = "";

  if (village.risk >= 80) {
    recommendation =
      "Deploy emergency response teams. Increase healthcare support and monitor rainfall continuously.";
  } else if (village.risk >= 60) {
    recommendation =
      "Increase irrigation monitoring and conduct awareness campaigns.";
  } else {
    recommendation =
      "Village conditions are stable. Continue routine monitoring.";
  }

  return (
    <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
      <h2 className="text-xl font-bold text-emerald-400 mb-4">
        AI Recommendation
      </h2>

      <p className="text-slate-300 leading-8">
        {recommendation}
      </p>
    </div>
  );
}