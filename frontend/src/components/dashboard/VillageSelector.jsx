export default function VillageSelector({
  villages,
  selectedVillage,
  setSelectedVillage,
}) {
  return (
    <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
      <h2 className="text-xl font-bold mb-4">
        Select Village
      </h2>

      <select
        value={selectedVillage.id}
        onChange={(e) => {
          const village = villages.find(
            (v) => v.id === Number(e.target.value)
          );
          setSelectedVillage(village);
        }}
        className="w-full rounded-lg bg-slate-800 p-3 text-white"
      >
        {villages.map((village) => (
          <option
  key={village.id}
  value={village.id}
>
  {village.name} - {village.state}
</option>
        ))}
      </select>
    </div>
  );
}