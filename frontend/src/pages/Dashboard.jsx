import StatsCard from "../components/dashboard/StatsCard";
import RiskScoreCard from "../components/dashboard/RiskScoreCard";
import RecommendationCard from "../components/dashboard/RecommendationCard";
import WeatherCard from "../components/dashboard/WeatherCard";
import RiskTrendChart from "../components/charts/RiskTrendChart";
import VillageMap from "../components/map/VillageMap";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Village Dashboard</h1>
        <p className="text-slate-400 mt-2">
          AI-Powered Decision Intelligence
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
  <StatsCard
    title="Population"
    value="12,540"
    color="text-emerald-400"
  />

  <StatsCard
    title="Households"
    value="3,180"
    color="text-blue-400"
  />

  <StatsCard
    title="Schools"
    value="18"
    color="text-yellow-400"
  />

  <StatsCard
    title="Hospitals"
    value="4"
    color="text-pink-400"
  />
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RiskScoreCard />
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