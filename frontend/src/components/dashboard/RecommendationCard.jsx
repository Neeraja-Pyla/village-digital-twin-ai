export default function RecommendationCard() {
  return (
    <div className="rounded-xl border border-emerald-700 bg-slate-900 p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-emerald-400">
        🤖 AI Recommendations
      </h2>

      <div className="mt-6 space-y-4">

        <div className="rounded-lg bg-slate-800 p-4">
          🌾 Increase irrigation support in Zone 3.
        </div>

        <div className="rounded-lg bg-slate-800 p-4">
          🚑 Deploy one mobile medical camp this week.
        </div>

        <div className="rounded-lg bg-slate-800 p-4">
          🌧 Monitor rainfall for possible flood alerts.
        </div>

        <div className="rounded-lg bg-slate-800 p-4">
          📚 Allocate additional teachers to Village School.
        </div>

      </div>
    </div>
  );
}