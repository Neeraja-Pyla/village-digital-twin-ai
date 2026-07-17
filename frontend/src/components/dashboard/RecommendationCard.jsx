export default function RecommendationCard({ prediction }) {
  if (!prediction) {
    return (
      <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
        Loading AI Recommendation...
      </div>
    );
  }

  return (
    <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
      <h2 className="text-2xl font-bold text-emerald-400 mb-4">
        AI Prediction
      </h2>

      <p className="text-xl font-semibold">
        Status: {prediction.prediction}
      </p>

      <p className="mt-4 text-slate-300 leading-8">
        {prediction.recommendation}
      </p>
    </div>
  );
}