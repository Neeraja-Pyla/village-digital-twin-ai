export default function ExecutiveSummary({ villages }) {
  if (!villages?.length) return null;

  const totalPopulation = villages.reduce(
    (sum, v) => sum + v.population,
    0
  );

  const totalHouseholds = villages.reduce(
    (sum, v) => sum + v.households,
    0
  );

  const avgRisk = (
    villages.reduce((sum, v) => sum + v.risk, 0) /
    villages.length
  ).toFixed(1);

  const critical = villages.filter(v => v.risk >= 80).length;
  const moderate = villages.filter(v => v.risk >= 60 && v.risk < 80).length;
  const safe = villages.filter(v => v.risk < 60).length;

  const states = [...new Set(villages.map(v => v.state))].length;

  const highestRisk = villages.reduce((a, b) =>
    a.risk > b.risk ? a : b
  );

  const lowestRisk = villages.reduce((a, b) =>
    a.risk < b.risk ? a : b
  );

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-lg p-6 h-full">

      <h2 className="text-2xl font-bold text-white">
        📊 Executive Dashboard
      </h2>

      <p className="text-slate-400">
        AI Portfolio Overview
      </p>

      {/* KPIs */}

      <div className="grid grid-cols-2 gap-4 mt-6">

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-slate-400 text-sm">Villages</p>
          <p className="text-cyan-400 text-3xl font-bold">
            {villages.length}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-slate-400 text-sm">States</p>
          <p className="text-green-400 text-3xl font-bold">
            {states}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-slate-400 text-sm">Population</p>
          <p className="text-white text-xl font-bold">
            {totalPopulation.toLocaleString()}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-slate-400 text-sm">Households</p>
          <p className="text-blue-400 text-xl font-bold">
            {totalHouseholds.toLocaleString()}
          </p>
        </div>

      </div>

      {/* Average */}

      <div className="mt-6 bg-slate-800 rounded-xl p-4">

        <div className="flex justify-between">

          <span className="text-slate-400">
            Average Risk
          </span>

          <span className="text-yellow-400 font-bold">
            {avgRisk}/100
          </span>

        </div>

        <div className="mt-3 h-3 bg-slate-700 rounded-full">

          <div
            className="bg-yellow-500 h-3 rounded-full"
            style={{
              width: `${avgRisk}%`,
            }}
          />

        </div>

      </div>

      {/* Risk Distribution */}

      <div className="mt-7">

        <h3 className="text-white font-semibold mb-4">
          Risk Distribution
        </h3>

        <div className="space-y-4">

          <div>

            <div className="flex justify-between mb-2">

              <span className="text-red-400">
                🔴 Critical
              </span>

              <span>{critical}</span>

            </div>

            <div className="bg-slate-700 h-2 rounded-full">

              <div
                className="bg-red-500 h-2 rounded-full"
                style={{
                  width: `${critical / villages.length * 100}%`,
                }}
              />

            </div>

          </div>

          <div>

            <div className="flex justify-between mb-2">

              <span className="text-yellow-400">
                🟡 Moderate
              </span>

              <span>{moderate}</span>

            </div>

            <div className="bg-slate-700 h-2 rounded-full">

              <div
                className="bg-yellow-500 h-2 rounded-full"
                style={{
                  width: `${moderate / villages.length * 100}%`,
                }}
              />

            </div>

          </div>

          <div>

            <div className="flex justify-between mb-2">

              <span className="text-green-400">
                🟢 Safe
              </span>

              <span>{safe}</span>

            </div>

            <div className="bg-slate-700 h-2 rounded-full">

              <div
                className="bg-green-500 h-2 rounded-full"
                style={{
                  width: `${safe / villages.length * 100}%`,
                }}
              />

            </div>

          </div>

        </div>

      </div>

      {/* Highlights */}

      <div className="mt-7 bg-slate-800 rounded-xl p-5">

        <h3 className="text-white font-semibold mb-4">
          🎯 AI Highlights
        </h3>

        <div className="space-y-3 text-sm">

          <div>
            🔴 Highest Risk :
            <span className="text-red-400 font-semibold">
              {" "}
              {highestRisk.name} ({highestRisk.risk})
            </span>
          </div>

          <div>
            🟢 Lowest Risk :
            <span className="text-green-400 font-semibold">
              {" "}
              {lowestRisk.name} ({lowestRisk.risk})
            </span>
          </div>

          <div>
            🌍 Coverage :
            <span className="text-cyan-400 font-semibold">
              {" "}
              {states} States • {villages.length} Villages
            </span>
          </div>

        </div>

      </div>

      {/* AI Insight */}

      <div className="mt-6 bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-5">

        <h3 className="text-cyan-400 font-semibold mb-3">
          🤖 AI Recommendation
        </h3>

        <p className="text-slate-300 leading-7">

          The platform continuously analyzes environmental,
          demographic and weather indicators across{" "}
          <span className="text-cyan-400 font-semibold">
            {villages.length} villages
          </span>
          . AI recommends immediate intervention for{" "}
          <span className="text-red-400 font-semibold">
            {critical} critical villages
          </span>{" "}
          while maintaining preventive monitoring for the
          remaining locations.

        </p>

      </div>

    </div>
  );
}