import StatsCard from "../components/dashboard/StatsCard";
import RiskScoreCard from "../components/dashboard/RiskScoreCard";
import RecommendationCard from "../components/dashboard/RecommendationCard";
import WeatherCard from "../components/dashboard/WeatherCard";
import RiskTrendChart from "../components/charts/RiskTrendChart";
import VillageMap from "../components/map/VillageMap";
import villages from "../data/villages";
import { useState } from "react";
import VillageSelector from "../components/dashboard/VillageSelector";


export default function Dashboard() {

const [selectedVillage, setSelectedVillage] = useState(villages[0]);

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
        <WeatherCard />
      </div>

      <RecommendationCard />
      <div className="mt-8">
  <RiskTrendChart />
  <div className="mt-8">
  <VillageMap />

</div>
</div>
    </div>
  );
}