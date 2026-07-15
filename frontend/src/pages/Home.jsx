import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
      <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-10 text-center shadow-2xl">
        <h1 className="text-5xl font-bold text-white">
          Village Digital Twin AI
        </h1>

        <p className="mt-4 text-slate-300">
          AI-Powered Decision Intelligence Platform
        </p>

        <Link
          to="/dashboard"
          className="inline-block mt-8 rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
        >
          Launch Dashboard
        </Link>
      </div>
    </main>
  );
}