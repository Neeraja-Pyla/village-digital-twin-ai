function RecommendationCard() {
  return (
    <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
      <h2 className="text-xl font-bold text-emerald-400 mb-4">
        AI Recommendation
      </h2>

      <p className="text-slate-300 leading-7">
        Prioritize irrigation support for Zone 3 over the next 7 days.
        Increase health awareness campaigns in high-risk villages and
        monitor rainfall forecasts to reduce flood impact.
      </p>
    </div>
  );
}

export default RecommendationCard;