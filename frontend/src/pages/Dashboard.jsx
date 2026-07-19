import { useEffect, useState } from "react";
import api from "../services/api";

import DashboardCard from "../components/dashboard/DashboardCard";
import SearchVillage from "../components/dashboard/SearchVillage";
import VillageSelector from "../components/dashboard/VillageSelector";

import RiskScoreCard from "../components/dashboard/RiskScoreCard";
import WeatherCard from "../components/dashboard/WeatherCard";
import RecommendationCard from "../components/dashboard/RecommendationCard";
import VillageDetails from "../components/dashboard/VillageDetails";

import RiskTrendChart from "../components/charts/RiskTrendChart";
import ExecutiveSummary from "../components/dashboard/ExecutiveSummary";
import VillageMap from "../components/map/VillageMap";

export default function Dashboard() {
  const [villages, setVillages] = useState([]);
  const [selectedVillage, setSelectedVillage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    api
      .get("/villages")
      .then((res) => {
        setVillages(res.data);
        setSelectedVillage(res.data[0]);
        console.log(res.data[0]);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!selectedVillage) return;

    api
      .post("/predict", {
        population: selectedVillage.population,
        households: selectedVillage.households,
        temperature: selectedVillage.temperature,
        risk: selectedVillage.risk,
      })
      .then((res) => setPrediction(res.data))
      .catch(console.error);
  }, [selectedVillage]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!selectedVillage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-cyan-500 border-t-transparent mx-auto"></div>

          <p className="text-white mt-6 text-xl">
            Loading Village Digital Twin AI...
          </p>
        </div>
      </div>
    );
  }

  const totalPopulation = villages.reduce(
    (sum, village) => sum + village.population,
    0
  );

  const totalHouseholds = villages.reduce(
    (sum, village) => sum + village.households,
    0
  );

const averageRisk =
  villages.length > 0
    ? (
        villages.reduce((sum, village) => sum + village.risk, 0) /
        villages.length
      ).toFixed(1)
    : "0.0";



  const criticalVillages = villages.filter(
    (village) => village.risk >= 80
  ).length;


console.log("Selected Village:", selectedVillage);
console.log("Villages:", villages);





    return (
    <div className="p-6 space-y-6">

      {/* ================= HEADER ================= */}

      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl border border-slate-700 p-5 shadow-xl">

        <div className="flex flex-col xl:flex-row justify-between gap-10">

          <div>

            <h1 className="text-4xl font-extrabold text-white">
              🌍 Village Digital Twin AI
            </h1>

            <p className="text-slate-300 mt-3 text-lg">
              AI Powered Rural Intelligence Platform
            </p>

            <div className="mt-5 text-slate-300 leading-7 max-w-2xl">
  Predict village-level climate and disaster risks using
  Machine Learning, interactive GIS maps, weather insights,
  and AI-powered recommendations for faster rural planning.
</div>

          </div>

          <div className="bg-slate-950 rounded-2xl border border-slate-700 p-6 min-w-[320px]">

            <h3 className="text-xl font-bold text-white mb-5">
              System Status
            </h3>

           <div className="space-y-4">

  <div className="flex justify-between">
    <span className="text-slate-400">Backend</span>
    <span className="text-green-400">● Online</span>
  </div>

  <div className="flex justify-between">
    <span className="text-slate-400">AI Model</span>
    <span className="text-green-400">● Active</span>
  </div>

  <div className="flex justify-between">
    <span className="text-slate-400">Analytics</span>
    <span className="text-green-400">● Running</span>
  </div>

  <div className="flex justify-between">
    <span className="text-slate-400">Villages</span>
    <span className="text-cyan-400">{villages.length}</span>
  </div>

  <div className="flex justify-between">
    <span className="text-slate-400">Population</span>
    <span className="text-cyan-400">
      {totalPopulation.toLocaleString()}
    </span>
  </div>

  <hr className="border-slate-700"/>

  <p className="text-slate-300">
    {currentTime.toLocaleDateString()}
  </p>

  <p className="text-2xl font-bold text-cyan-400">
    {currentTime.toLocaleTimeString()}
  </p>

</div>

          </div>

        </div>

      </div>

      {/* ================= SEARCH ================= */}

      <div className="grid lg:grid-cols-2 gap-4">

        <SearchVillage
          villages={villages}
          setSelectedVillage={setSelectedVillage}
        />

        <VillageSelector
          villages={villages}
          selectedVillage={selectedVillage}
          setSelectedVillage={setSelectedVillage}
        />

      </div>

      {/* ================= KPI ================= */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

        <DashboardCard
          title="Population"
          value={totalPopulation.toLocaleString()}
          icon="👥"
          color="text-green-400"
        />

        <DashboardCard
          title="Households"
          value={totalHouseholds.toLocaleString()}
          icon="🏠"
          color="text-blue-400"
        />

        <DashboardCard
          title="Average Risk"
          value={averageRisk}
          icon="📊"
          color="text-yellow-400"
        />

        <DashboardCard
          title="Critical"
          value={criticalVillages}
          icon="🚨"
          color="text-red-400"
        />

      </div>

      {/* ================= SELECTED VILLAGE ================= */}

      <div className="bg-slate-900 rounded-2xl border border-slate-700
transition-all duration-300
hover:-translate-y-1
hover:shadow-cyan-500/20 p-6">

        <h2 className="text-xl font-bold text-white">
          📍 Selected Village
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mt-5">

          <div>
            <p className="text-slate-400">Village</p>
            <p className="text-white font-semibold">
              {selectedVillage.name}
            </p>
          </div>

          <div>
            <p className="text-slate-400">District</p>
            <p className="text-white font-semibold">
              {selectedVillage.district}
            </p>
          </div>

          <div>
  <p className="text-slate-400">State</p>
  <p className="text-white font-semibold">
    {selectedVillage.state}
  </p>
</div>

<div>
  <p className="text-slate-400">Population</p>
  <p className="text-green-400 font-semibold">
    {selectedVillage.population.toLocaleString()}
  </p>
</div>

<div>
  <p className="text-slate-400">Temperature</p>
  <p className="text-yellow-400 font-semibold">
    {selectedVillage.temperature}°C
  </p>
</div>

          <div>
            <p className="text-slate-400">Risk</p>
            <p className="text-red-400 font-bold">
              {selectedVillage.risk}
            </p>
          </div>

        </div>

      </div>

      {/* ================= RISK ================= */}

      <div className="grid xl:grid-cols-2 gap-5">

        <RiskScoreCard village={selectedVillage} />

        <WeatherCard village={selectedVillage} />

      </div>

      {/* ================= AI ================= */}

      <div className="grid xl:grid-cols-2 gap-5">

        <RecommendationCard
          village={selectedVillage}
          prediction={prediction}
        />

        <VillageDetails village={selectedVillage} />

      </div>

      {/* ================= CHARTS ================= */}

      <div className="grid xl:grid-cols-3 gap-5">

        <div className="xl:col-span-2">

          <RiskTrendChart
            villages={villages}
            selectedVillage={selectedVillage}
          />

        </div>

        <ExecutiveSummary villages={villages} />

      </div>

      {/* ================= MAP ================= */}

      <VillageMap
        villages={villages}
        selectedVillage={selectedVillage}
        setSelectedVillage={setSelectedVillage}
      />

      {/* ================= FOOTER ================= */}

     <div className="text-center border-t border-slate-700 pt-6 text-slate-400">

  <h3 className="text-white text-lg font-bold">
    🌍 Village Digital Twin AI
  </h3>

  <p className="mt-2">
    AI Powered Decision Intelligence Platform
  </p>

  <p className="mt-2">
    IDEA2IMPACT Hackathon 2026
  </p>

  <p className="mt-2">
    React • FastAPI • Machine Learning • Leaflet • Chart.js
  </p>

  <p className="mt-2 text-cyan-400 font-semibold">
    Developed by Neeraja Pyla
  </p>

</div>

    </div>
  );
}