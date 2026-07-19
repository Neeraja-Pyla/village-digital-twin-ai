export default function DashboardCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-lg hover:border-cyan-500 transition">

      <div className="flex justify-between items-center">

        <div>
          <p className="text-slate-400 text-sm">
            {title}
          </p>

          <h2 className={`text-3xl font-bold mt-2 ${color}`}>
            {value}
          </h2>
        </div>

        <div className="text-5xl">
          {icon}
        </div>

      </div>

    </div>
  );
}