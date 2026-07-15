function App() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
      <div className="rounded-3xl border border-white/10 bg-white/10 p-10 backdrop-blur-xl shadow-2xl text-center">
        <h1 className="text-5xl font-bold text-white">
          Village Digital Twin AI
        </h1>

        <p className="mt-4 text-lg text-slate-300">
          AI-Powered Decision Intelligence Platform
        </p>

        <button className="mt-8 rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold transition hover:bg-blue-500">
          Launch Dashboard
        </button>
      </div>
    </main>
  );
}

export default App;