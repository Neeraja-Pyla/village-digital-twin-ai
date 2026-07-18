export default function StatsCard({
  title,
  value,
  color,
}) {
  return (

    <div className="bg-slate-900 rounded-2xl border border-slate-700 p-5 shadow-lg hover:scale-105 transition-all duration-300">

      <p className="text-slate-400 text-sm uppercase tracking-wider">
        {title}
      </p>

      <h2 className={`text-4xl font-bold mt-4 ${color}`}>
        {value}
      </h2>

    </div>

  );
}