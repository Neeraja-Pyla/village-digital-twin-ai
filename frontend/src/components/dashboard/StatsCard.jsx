function StatsCard({ title, value }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
      <h2 className="text-slate-400 text-sm">{title}</h2>

      <p className="text-3xl font-bold mt-2 text-emerald-400">
        {value}
      </p>
    </div>
  );
}

export default StatsCard;