import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line, Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Tooltip,
  Legend
);

export default function RiskTrendChart({ villages }) {






  if (!villages || villages.length === 0) {
  return null;
}



  const trendData = {
    labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    datasets: [
      {
        label: "Risk Score",
        data: [62,68,70,74,72,81,84],
        borderColor: "#22c55e",
        backgroundColor: "#22c55e",
        tension: 0.4,
      },
    ],
  };

const critical = villages.filter(v => v.risk >= 80).length;

const moderate = villages.filter(
  v => v.risk >= 60 && v.risk < 80
).length;

const safe = villages.filter(
  v => v.risk < 60
).length;

const pieData = {
  labels: ["Critical", "Moderate", "Safe"],
  datasets: [
    {
      data: [critical, moderate, safe],
      backgroundColor: [
        "#ef4444",
        "#facc15",
        "#22c55e",
      ],
    },
  ],
};

const topVillages = [...villages]
  .sort((a, b) => b.population - a.population)
  .slice(0, 5);

const populationData = {
  labels: topVillages.map(v => v.name),
  datasets: [
    {
      label: "Population",
      data: topVillages.map(v => v.population),
      backgroundColor: "#3b82f6",
    },
  ],
};

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
      },
    },
  };

  return (

    <div className="space-y-5">

      <div className="bg-slate-900 rounded-xl p-4">

        <h2 className="text-xl font-bold text-white mb-4">
          Weekly Risk Trend
        </h2>

        <div className="h-72">
          <Line
            data={trendData}
            options={options}
          />
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        <div className="bg-slate-900 rounded-xl p-4">

          <h2 className="text-xl font-bold text-white mb-4">
            Risk Distribution
          </h2>

          <div className="h-72">
            <Pie
              data={pieData}
              options={{
                responsive:true,
                maintainAspectRatio:false,
                plugins:{
                  legend:{
                    labels:{
                      color:"white"
                    }
                  }
                }
              }}
            />
          </div>

        </div>

        <div className="bg-slate-900 rounded-xl p-4">

          <h2 className="text-xl font-bold text-white mb-4">
            Population Comparison
          </h2>

          <div className="h-72">

            <Bar
              data={populationData}
              options={options}
            />

          </div>

        </div>

      </div>

    </div>

  );

}