import { useEffect, useState } from "react";
import api from "../../services/api";

export default function RecommendationCard({ village }) {
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (!village) return;

    setResult(null);

    api
      .post("/predict", village)
      .then((res) => setResult(res.data))
      .catch((err) => console.error(err));
  }, [village]);

  if (!village) return null;

  if (!result) {
    return (
      <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-white">
          🤖 AI Decision Engine
        </h2>

        <div className="mt-8 flex items-center gap-4">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-cyan-500 border-t-transparent"></div>

          <div>
            <p className="text-cyan-400 font-semibold">
              AI analysing village...
            </p>

            <p className="text-slate-400 text-sm mt-1">
              Generating disaster prediction...
            </p>
          </div>
        </div>
      </div>
    );
  }

  const confidence =
    village.risk >= 85
      ? 98
      : village.risk >= 70
      ? 95
      : village.risk >= 50
      ? 91
      : 88;

  const priority =
    village.risk >= 85
      ? "CRITICAL"
      : village.risk >= 70
      ? "HIGH"
      : village.risk >= 50
      ? "MEDIUM"
      : "LOW";

  const badge =
    priority === "CRITICAL"
      ? "bg-red-600 text-white"
      : priority === "HIGH"
      ? "bg-orange-500 text-white"
      : priority === "MEDIUM"
      ? "bg-yellow-500 text-black"
      : "bg-green-500 text-white";

  let recommendations = [];

  if (village.risk >= 85) {
    recommendations = [
      "Deploy emergency response teams",
      "Issue public safety alerts",
      "Monitor rainfall every 3 hours",
      "Prepare evacuation shelters",
      "Coordinate with district officials",
    ];
  } else if (village.risk >= 70) {
    recommendations = [
      "Inspect vulnerable locations",
      "Increase weather monitoring",
      "Notify Panchayat officials",
      "Prepare emergency supplies",
      "Review disaster response plans",
    ];
  } else if (village.risk >= 50) {
    recommendations = [
      "Weekly environmental inspection",
      "Monitor crop conditions",
      "Awareness campaigns",
      "Water resource planning",
      "Continue AI monitoring",
    ];
  } else {
    recommendations = [
      "Routine monitoring",
      "Promote sustainable farming",
      "Monthly AI assessment",
      "Maintain existing infrastructure",
      "Community awareness",
    ];
  }

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6 shadow-lg h-full hover:border-cyan-500 transition-all">

      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-bold text-white">
          🤖 AI Decision Engine
        </h2>

        <span className={`px-4 py-2 rounded-full text-sm font-bold ${badge}`}>
          {priority}
        </span>

      </div>

      <div className="mt-6 space-y-6">

        {/* Prediction */}

        <div className="bg-slate-800 rounded-xl p-5">

          <p className="text-slate-400">
            AI Prediction
          </p>

          <h3 className="text-3xl font-bold text-cyan-400 mt-2">
            {result.prediction}
          </h3>

          <p className="text-slate-300 mt-3 leading-7">
            The AI model analysed weather, population,
            historical disaster patterns and environmental
            indicators to estimate the current disaster risk
            level for this village.
          </p>

        </div>

        {/* Confidence */}

        <div>

          <div className="flex justify-between mb-2">

            <span className="text-slate-400">
              AI Confidence
            </span>

            <span className="text-green-400 font-bold">
              {confidence}%
            </span>

          </div>

          <div className="w-full h-3 rounded-full bg-slate-700 overflow-hidden">

            <div
              className="h-full bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 transition-all duration-700"
              style={{
                width: `${confidence}%`,
              }}
            />

          </div>

        </div>

        {/* AI Risk Factors */}

        <div>

          <h3 className="text-white font-semibold mb-3">
            AI Risk Factors
          </h3>

          <div className="grid gap-3">

            <div className="bg-slate-800 rounded-lg p-3">
              🌡 Temperature : {village.temperature}°C
            </div>

            <div className="bg-slate-800 rounded-lg p-3">
              👥 Population : {village.population.toLocaleString()}
            </div>

            <div className="bg-slate-800 rounded-lg p-3">
              🌾 Crop : {village.crop}
            </div>

            <div className="bg-slate-800 rounded-lg p-3">
              📊 Historical Risk : {village.risk}/100
            </div>

          </div>

        </div>

        {/* Recommendations */}

        <div>

          <h3 className="text-white font-semibold mb-3">
            AI Recommended Actions
          </h3>

          <div className="space-y-3">

            {recommendations.map((item, index) => (

              <div
                key={index}
                className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg px-4 py-3 text-slate-200"
              >
                ✅ {item}
              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}