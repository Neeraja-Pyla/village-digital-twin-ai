import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-4xl font-bold">
        Dashboard
      </h1>

      <p className="mt-4 text-slate-300">
        Welcome to Village Digital Twin AI
      </p>

      <Link
        to="/"
        className="inline-block mt-8 rounded-lg bg-blue-600 px-5 py-2 hover:bg-blue-700"
      >
        Back Home
      </Link>
    </main>
  );
}