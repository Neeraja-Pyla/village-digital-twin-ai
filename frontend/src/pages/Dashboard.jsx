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




export default function Dashboard() {

const [villages, setVillages] = useState([]);
const [selectedVillage, setSelectedVillage] = useState(null);
const [prediction, setPrediction] = useState(null);
 useEffect(() => {
  console.log("Fetching villages...");

  api.get("/villages")
    .then((response) => {
      console.log("API Response:", response.data);

      setVillages(response.data);
      setSelectedVillage(response.data[0]);
    })
    .catch((error) => {
      console.error("API Error:", error);
    });
}, []);



useEffect(() => {
  if (!selectedVillage) return;

  api.post("/predict", {
    risk: selectedVillage.risk,
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
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Village Dashboard</h1>
        <p className="text-slate-400 mt-2">
          AI-Powered Decision Intelligence
        </p>
      </div>


<VillageSelector
  villages={villages}
  selectedVillage={selectedVillage}
  setSelectedVillage={setSelectedVillage}
/>




      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

  <StatsCard
    title="Population"
    value={selectedVillage.population}
    color="text-emerald-400"
  />

  <StatsCard
    title="Households"
    value={selectedVillage.households}
    color="text-blue-400"
  />

  <StatsCard
    title="Crop"
    value={selectedVillage.crop}
    color="text-yellow-400"
  />

  <StatsCard
    title="Risk"
    value={selectedVillage.risk}
    color="text-red-400"
  />

</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RiskScoreCard village={selectedVillage} />
        <WeatherCard village={selectedVillage} />
      </div>

      <RecommendationCard prediction={prediction} />

      <VillageDetails village={selectedVillage} />

      <div className="mt-8">
  <RiskTrendChart />
  <div className="mt-8">

  <VillageMap
  villages={villages}
  selectedVillage={selectedVillage}
  setSelectedVillage={setSelectedVillage}
/>
</div>
</div>
    </div>
  );
}