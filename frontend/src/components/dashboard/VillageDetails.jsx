export default function VillageDetails({ village }) {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6 shadow-lg h-full">

      <h2 className="text-xl font-bold text-white mb-6">
        📋 Village Details
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between border-b border-slate-700 pb-2">
          <span className="text-slate-400">Village</span>
          <span className="text-white font-semibold">{village.name}</span>
        </div>

        <div className="flex justify-between border-b border-slate-700 pb-2">
          <span className="text-slate-400">District</span>
          <span className="text-white">{village.district}</span>
        </div>

        <div className="flex justify-between border-b border-slate-700 pb-2">
          <span className="text-slate-400">State</span>
          <span className="text-white">{village.state}</span>
        </div>

        <div className="flex justify-between border-b border-slate-700 pb-2">
          <span className="text-slate-400">Population</span>
          <span className="text-white">
            {village.population.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between border-b border-slate-700 pb-2">
          <span className="text-slate-400">Households</span>
          <span className="text-white">
            {village.households.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">Crop</span>
          <span className="text-green-400 font-semibold">
            {village.crop}
          </span>
        </div>

      </div>

    </div>
  );
}