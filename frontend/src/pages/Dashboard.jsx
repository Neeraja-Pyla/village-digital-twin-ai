import StatsCard from "../components/dashboard/StatsCard";
import RiskScoreCard from "../components/dashboard/RiskScoreCard";
import RecommendationCard from "../components/dashboard/RecommendationCard";
import WeatherCard from "../components/dashboard/WeatherCard";

function Dashboard() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          Village Dashboard
        </h1>

        <p className="text-slate-400 mt-2">
          AI-Powered Decision Intelligence
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <StatsCard />
        <StatsCard />
        <StatsCard />
        <StatsCard />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <RiskScoreCard />
        <WeatherCard />
      </div>

      <RecommendationCard />

    </div>
  );
}

export default Dashboard;