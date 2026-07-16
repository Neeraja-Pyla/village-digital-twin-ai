function StatsCard() {
  return (
    <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
      <p className="text-slate-400 text-sm">Population</p>

      <h2 className="text-3xl font-bold mt-2">
        12,540
      </h2>

      <p className="text-green-400 mt-3">
        ▲ 2.4%
      </p>
    </div>
  );
}

export default StatsCard;