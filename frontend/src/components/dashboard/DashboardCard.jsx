export default function DashboardCard({
  title,
  children,
}) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-lg h-full">

      <h2 className="text-xl font-bold text-white mb-5">
        {title}
      </h2>

      {children}

    </div>
  );
}