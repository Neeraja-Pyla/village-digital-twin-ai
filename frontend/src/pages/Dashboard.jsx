import StatsCard from "../components/dashboard/StatsCard";
import RiskScoreCard from "../components/dashboard/RiskScoreCard";
import RecommendationCard from "../components/dashboard/RecommendationCard";
import WeatherCard from "../components/dashboard/WeatherCard";
import RiskTrendChart from "../components/charts/RiskTrendChart";
import VillageMap from "../components/map/VillageMap";
import { useEffect, useState } from "react";
import api from "../services/api";
import VillageSelector from "../components/dashboard/VillageSelector";
import VillageDetails from "../components/dashboard/VillageDetails";

import SearchVillage from "../components/dashboard/SearchVillage";

import ExecutiveSummary from "../components/dashboard/ExecutiveSummary";









export default function Dashboard() {

const [villages, setVillages] = useState([]);
const [selectedVillage, setSelectedVillage] = useState(null);
const [prediction, setPrediction] = useState(null);
 useEffect(() => {
  console.log("Fetching villages...");

  api.get("/villages")
    .then((response) => {
      

      setVillages(response.data);
      setSelectedVillage(response.data[0]);
    })
    .catch((error) => {
      
    });
}, []);



useEffect(() => {
  if (!selectedVillage) return;

  api.post("/predict",{
    population:selectedVillage.population,
    households:selectedVillage.households,
    temperature:selectedVillage.temperature,
    risk:selectedVillage.risk
})
    .then((response) => {
      setPrediction(response.data);
    })
    .catch((error) => {
      console.error(error);
    });

}, [selectedVillage]);













if (!selectedVillage) {
  return (
    <div className="text-white p-10 text-2xl">
      Loading...
    </div>
  );
}



  return (
  <div className="space-y-6">

    {/* Header */}
    <div className="flex flex-col lg:flex-row justify-between items-center gap-4">

  <div>
    <h1 className="text-4xl font-bold text-white">
      Village Digital Twin AI
    </h1>

    <p className="text-slate-400">
      AI Powered Rural Intelligence Dashboard
    </p>
  </div>

  <div className="bg-slate-900 rounded-xl p-4 shadow-lg">
    <p className="text-green-400">
      🟢 Backend Connected
    </p>

    <p className="text-green-400">
      🟢 AI Prediction Active
    </p>

    <p className="text-cyan-400">
      🌍 {villages.length} Villages Loaded
    </p>
  </div>

</div>
    

    {/* Search + Selector */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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

    {/* Stats */}
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">

  <StatsCard
    title="Population"
    value={selectedVillage.population.toLocaleString()}
    color="text-emerald-400"
  />

  <StatsCard
    title="Households"
    value={selectedVillage.households.toLocaleString()}
    color="text-blue-400"
  />

  <StatsCard
    title="Crop"
    value={selectedVillage.crop}
    color="text-yellow-400"
  />

  <StatsCard
    title="Risk Score"
    value={selectedVillage.risk}
    color="text-red-400"
  />

</div>






    {/* Risk + Weather */}
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">

      <RiskScoreCard village={selectedVillage} />

      <WeatherCard village={selectedVillage} />

    </div>

    {/* AI + Details */}
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">

     <RecommendationCard
  village={selectedVillage}
  prediction={prediction}
/>
      <VillageDetails village={selectedVillage} />

    </div>

    {/* Charts */}
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

  <div className="xl:col-span-2">
    <RiskTrendChart villages={villages} />
  </div>

  <ExecutiveSummary villages={villages} />

</div> 




    {/* Map */}
    <VillageMap
      villages={villages}
      selectedVillage={selectedVillage}
      setSelectedVillage={setSelectedVillage}
    />

  </div>
);
}
