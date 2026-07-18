export default function RecommendationCard({
  village,
  prediction,
}) {

  if (!prediction) {
    return (
      <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
        <h2 className="text-2xl font-bold text-white">
          🤖 AI Recommendation
        </h2>

        <p className="mt-6 text-slate-300">
          Loading AI prediction...
        </p>
      </div>
    );
  }

  const priority =
    prediction.prediction === "Critical"
      ? "HIGH"
      : prediction.prediction === "Moderate"
      ? "MEDIUM"
      : "LOW";

  const priorityColor =
    priority === "HIGH"
      ? "text-red-400"
      : priority === "MEDIUM"
      ? "text-yellow-400"
      : "text-green-400";

  return (
    <div className="bg-slate-900 rounded-xl p-6 shadow-lg border border-slate-700">

      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-bold text-white">
          🤖 AI Recommendation
        </h2>

        <span
          className={`font-bold ${priorityColor}`}
        >
          {priority}
        </span>

      </div>

      <div className="mt-6 space-y-5">

        <div>

          <p className="text-slate-400">
            Selected Village
          </p>

          <p className="text-white font-semibold">
            {village.name}
          </p>

        </div>

        <div>

          <p className="text-slate-400">
            AI Prediction
          </p>

          <p className="text-cyan-400 text-2xl font-bold">
            {prediction.prediction}
          </p>

        </div>

        <div>

          <p className="text-slate-400">
            Recommendation
          </p>

          <p className="text-white mt-2 leading-7">
            {prediction.recommendation}
          </p>

        </div>

        <div>

          <p className="text-slate-400 mb-2">
            Suggested Actions
          </p>

          <ul className="space-y-2 text-slate-200 list-disc ml-5">

            <li>Monitor weather conditions</li>

            <li>Inspect crop health</li>

            <li>Alert village administration</li>

            <li>Prepare emergency response if needed</li>

          </ul>

        </div>

      </div>

    </div>
  );
}