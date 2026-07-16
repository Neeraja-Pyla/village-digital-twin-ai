import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Flood Risk",
      data: [30, 42, 38, 55, 70, 84, 65],
      borderColor: "#22c55e",
      backgroundColor: "#22c55e",
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
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

export default function RiskTrendChart() {
  return (
    <div className="rounded-xl bg-slate-900 p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-white">
        Weekly Flood Risk Trend
      </h2>

      <Line data={data} options={options} />
    </div>
  );
}