import { useState } from "react";

export default function SearchVillage({
  villages,
  setSelectedVillage,
}) {
  const [query, setQuery] = useState("");

  const filtered =
    query === ""
      ? []
      : villages.filter((v) =>
          v.name.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="relative w-full">

      <input
        type="text"
        value={query}
        placeholder="🔍 Search village..."
        className="w-full p-3 rounded-xl bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        onChange={(e) => setQuery(e.target.value)}
      />

      {filtered.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-slate-900 border border-slate-700 rounded-xl max-h-64 overflow-y-auto shadow-xl">

          {filtered.map((village) => (
            <button
              key={village.id}
              className="w-full text-left px-4 py-3 hover:bg-slate-700 text-white"
              onClick={() => {
                setSelectedVillage(village);
setQuery(village.name);

// Close suggestions
setTimeout(() => {
  setQuery("");
}, 200);
              }}
            >
              <div className="font-semibold">
                {village.name}
              </div>

              <div className="text-sm text-slate-400">
                {village.district}, {village.state}
              </div>
            </button>
          ))}

        </div>
      )}

    </div>
  );
}