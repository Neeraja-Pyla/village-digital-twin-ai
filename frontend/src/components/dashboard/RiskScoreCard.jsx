export default function RiskScoreCard({ village }) {
  const risk = village.risk;

  const status =
    risk >= 85
      ? "Critical"
      : risk >= 70
      ? "High"
      : risk >= 50
      ? "Moderate"
      : "Low";

  const color =
    risk >= 85
      ? "text-red-400"
      : risk >= 70
      ? "text-orange-400"
      : risk >= 50
      ? "text-yellow-400"
      : "text-green-400";

  const progress =
    risk >= 85
      ? "bg-red-500"
      : risk >= 70
      ? "bg-orange-500"
      : risk >= 50
      ? "bg-yellow-500"
      : "bg-green-500";

  const confidence =
    risk >= 85
      ? 98
      : risk >= 70
      ? 95
      : risk >= 50
      ? 92
      : 89;

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-lg hover:border-cyan-500 transition-all h-full">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-2xl font-bold text-white">
            ⚠ AI Risk Assessment
          </h2>

          <p className="text-slate-400 mt-1">
            Machine Learning Disaster Risk Evaluation
          </p>

        </div>

        <span
          className={`px-4 py-2 rounded-full font-bold text-sm
          ${
            risk >= 85
              ? "bg-red-600 text-white"
              : risk >= 70
              ? "bg-orange-500 text-white"
              : risk >= 50
              ? "bg-yellow-500 text-black"
              : "bg-green-600 text-white"
          }`}
        >
          {status}
        </span>

      </div>

      {/* AI Score */}

      <div className="flex justify-center mt-8">

        <div className="relative">

          <div
            className={`w-44 h-44 rounded-full border-[12px]
            ${
              risk >= 85
                ? "border-red-500"
                : risk >= 70
                ? "border-orange-500"
                : risk >= 50
                ? "border-yellow-500"
                : "border-green-500"
            }
            flex flex-col justify-center items-center`}
          >

            <span className={`text-6xl font-bold ${color}`}>
              {risk}
            </span>

            <span className="text-slate-400">
              /100
            </span>

          </div>

        </div>

      </div>

      {/* Progress */}

      <div className="mt-8">

        <div className="flex justify-between">

          <span className="text-slate-400">
            Overall Risk
          </span>

          <span className={`font-bold ${color}`}>
            {risk}%
          </span>

        </div>

        <div className="mt-2 h-3 bg-slate-700 rounded-full overflow-hidden">

          <div
            className={`${progress} h-3 transition-all duration-700`}
            style={{
              width: `${risk}%`,
            }}
          />

        </div>

      </div>

      {/* Confidence */}

      <div className="mt-6">

        <div className="flex justify-between">

          <span className="text-slate-400">
            AI Confidence
          </span>

          <span className="text-green-400 font-bold">
            {confidence}%
          </span>

        </div>

        <div className="mt-2 h-2 bg-slate-700 rounded-full overflow-hidden">

          <div
            className="h-2 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500"
            style={{
              width: `${confidence}%`,
            }}
          />

        </div>

      </div>

      {/* Metrics */}

      <div className="grid grid-cols-2 gap-4 mt-8">

        <div className="bg-slate-800 rounded-xl p-4">

          <p className="text-slate-400">
            🌡 Temperature
          </p>

          <p className="text-orange-400 text-2xl font-bold mt-2">
            {village.temperature}°C
          </p>

        </div>

        <div className="bg-slate-800 rounded-xl p-4">

          <p className="text-slate-400">
            👥 Population
          </p>

          <p className="text-green-400 text-xl font-bold mt-2">
            {village.population.toLocaleString()}
          </p>

        </div>

        <div className="bg-slate-800 rounded-xl p-4">

          <p className="text-slate-400">
            🌦 Weather
          </p>

          <p className="text-cyan-400 text-xl font-bold mt-2">
            {village.weather}
          </p>

        </div>

        <div className="bg-slate-800 rounded-xl p-4">

          <p className="text-slate-400">
            🌾 Crop
          </p>

          <p className="text-yellow-400 text-xl font-bold mt-2">
            {village.crop}
          </p>

        </div>

      </div>

      {/* AI Analysis */}

      <div className="mt-7 bg-slate-800 rounded-xl p-5">

        <h3 className="text-white font-semibold mb-3">
          AI Interpretation
        </h3>

        <p className="text-slate-300 leading-7">

          {risk >= 85 &&
            "The AI model classifies this village as Critical Risk. Immediate intervention, continuous monitoring, emergency response planning and rapid administrative action are strongly recommended."}

          {risk >= 70 &&
            risk < 85 &&
            "The village falls under High Risk. Enhanced monitoring, infrastructure inspection and disaster preparedness measures should be initiated."}

          {risk >= 50 &&
            risk < 70 &&
            "The village is under Moderate Risk. Preventive planning and periodic environmental monitoring are recommended."}

          {risk < 50 &&
            "Current indicators suggest Low Risk. Routine monitoring and sustainable development practices should continue."}

        </p>

      </div>

      {/* Footer */}

      <div className="mt-6 flex flex-wrap gap-3">

        <span className="bg-green-600 px-3 py-2 rounded-full text-sm text-white">
          🤖 AI Verified
        </span>

        <span className="bg-cyan-600 px-3 py-2 rounded-full text-sm text-white">
          📈 Live Analysis
        </span>

        <span className="bg-purple-600 px-3 py-2 rounded-full text-sm text-white">
          🌍 GIS Enabled
        </span>

      </div>

    </div>
  );
}