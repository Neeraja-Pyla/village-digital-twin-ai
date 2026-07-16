import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 border-r border-slate-700 p-6">
      <h2 className="text-xl font-bold text-emerald-400 mb-8">
        Navigation
      </h2>

      <nav className="space-y-4">
        <Link
          to="/"
          className="block rounded-lg p-2 text-slate-300 hover:bg-slate-800 hover:text-white"
        >
          🏠 Home
        </Link>

        <Link
          to="/dashboard"
          className="block rounded-lg p-2 text-slate-300 hover:bg-slate-800 hover:text-white"
        >
          📊 Dashboard
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;