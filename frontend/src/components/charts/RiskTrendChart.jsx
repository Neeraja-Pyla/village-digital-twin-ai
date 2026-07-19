import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";

export default function RiskTrendChart({
  villages,
  selectedVillage,
}) {
  const chartData = villages.map((village) => ({
    name: village.name,
    risk: village.risk,
  }));

  const highestRisk = Math.max(...villages.map(v => v.risk));
  const averageRisk = (
    villages.reduce((s, v) => s + v.risk, 0) /
    villages.length
  ).toFixed(1);

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-lg p-6 h-full">

      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-2xl font-bold text-white">
            📈 AI Risk Analytics
          </h2>

          <p className="text-slate-400">
            Risk comparison across all villages
          </p>

        </div>

        <div className="flex gap-4">

          <div className="bg-slate-800 rounded-xl px-4 py-3">

            <p className="text-slate-400 text-sm">
              Highest
            </p>

            <p className="text-red-400 font-bold text-xl">
              {highestRisk}
            </p>

          </div>

          <div className="bg-slate-800 rounded-xl px-4 py-3">

            <p className="text-slate-400 text-sm">
              Average
            </p>

            <p className="text-yellow-400 font-bold text-xl">
              {averageRisk}
            </p>

          </div>

        </div>

      </div>

      <ResponsiveContainer width="100%" height={360}>

        <BarChart data={chartData}>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#334155"
          />

          <XAxis
            dataKey="name"
            hide
          />

          <YAxis
            stroke="#94a3b8"
            domain={[0,100]}
          />

          <Tooltip
            contentStyle={{
              background:"#0f172a",
              border:"1px solid #334155",
              borderRadius:"10px"
            }}
          />

          <Bar
            dataKey="risk"
            radius={[5,5,0,0]}
          >

            {chartData.map((entry,index)=>{

              let color="#22c55e";

              if(entry.risk>=80)
                color="#ef4444";
              else if(entry.risk>=60)
                color="#facc15";

              if(selectedVillage &&
                 selectedVillage.name===entry.name)
                color="#06b6d4";

              return (
                <Cell
                  key={index}
                  fill={color}
                />
              );

            })}

          </Bar>

        </BarChart>

      </ResponsiveContainer>

      <div className="grid grid-cols-4 gap-4 mt-6">

        <div className="bg-slate-800 rounded-xl p-4">

          <p className="text-slate-400 text-sm">
            Selected
          </p>

          <p className="text-cyan-400 font-bold">
            {selectedVillage.name}
          </p>

        </div>

        <div className="bg-slate-800 rounded-xl p-4">

          <p className="text-slate-400 text-sm">
            Risk
          </p>

          <p className="text-red-400 font-bold">
            {selectedVillage.risk}/100
          </p>

        </div>

        <div className="bg-slate-800 rounded-xl p-4">

          <p className="text-slate-400 text-sm">
            District
          </p>

          <p className="text-white font-bold">
            {selectedVillage.district}
          </p>

        </div>

        <div className="bg-slate-800 rounded-xl p-4">

          <p className="text-slate-400 text-sm">
            State
          </p>

          <p className="text-green-400 font-bold">
            {selectedVillage.state}
          </p>

        </div>

      </div>

      <div className="flex gap-3 mt-6 flex-wrap">

        <span className="px-3 py-2 rounded-full bg-red-500/20 text-red-400">
          🔴 Critical
        </span>

        <span className="px-3 py-2 rounded-full bg-yellow-500/20 text-yellow-300">
          🟡 Moderate
        </span>

        <span className="px-3 py-2 rounded-full bg-green-500/20 text-green-400">
          🟢 Low
        </span>

        <span className="px-3 py-2 rounded-full bg-cyan-500/20 text-cyan-400">
          🔵 Selected Village
        </span>

      </div>

    </div>
  );
}