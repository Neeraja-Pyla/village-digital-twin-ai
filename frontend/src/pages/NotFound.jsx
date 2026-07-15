import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white">
      <h1 className="text-7xl font-bold">404</h1>

      <p className="mt-4 text-slate-300">
        Page Not Found
      </p>

      <Link
        to="/"
        className="mt-8 rounded-lg bg-blue-600 px-6 py-3 hover:bg-blue-700"
      >
        Go Home
      </Link>
    </main>
  );
}