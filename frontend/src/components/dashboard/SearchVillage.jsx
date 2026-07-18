export default function SearchVillage({
  villages,
  setSelectedVillage
}) {
  return (
    <input
      className="w-full p-3 rounded-lg bg-slate-800 text-white"
      placeholder="Search village..."
      onChange={(e) => {
        const village = villages.find(v =>
          v.name.toLowerCase().includes(
            e.target.value.toLowerCase()
          )
        );

        if (village) setSelectedVillage(village);
      }}
    />
  );
}