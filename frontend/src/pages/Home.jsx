import { Link } from "react-router-dom";

const features = [
  {
    title: "AI Risk Prediction",
    description: "Machine learning predicts village risk levels and recommends priority actions.",
    icon: "🤖",
  },
  {
    title: "Interactive GIS Map",
    description: "Visualize villages on an interactive map with color-coded risk markers.",
    icon: "🗺️",
  },
  {
    title: "Analytics Dashboard",
    description: "Monitor population, weather, crops, and overall village risk through charts.",
    icon: "📊",
  },
];

const technologies = [
  "React",
  "FastAPI",
  "Python",
  "Machine Learning",
  "Leaflet Maps",
  "Chart.js",
  "Tailwind CSS",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center">

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Village Digital Twin AI
          </h1>

          <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto">
            AI-powered decision intelligence platform that helps identify
            vulnerable villages, visualize risks, and recommend timely actions
            for sustainable rural development.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              to="/dashboard"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition"
            >
              Launch Dashboard
            </Link>

            <a
              href="#features"
              className="border border-slate-600 hover:bg-slate-800 px-8 py-4 rounded-xl transition"
            >
              Explore Features
            </a>

          </div>

        </div>

      </section>

      {/* Features */}
      <section
        id="features"
        className="max-w-7xl mx-auto px-6 py-12"
      >

        <h2 className="text-3xl font-bold text-center mb-10">
          Key Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-8 shadow-lg hover:scale-105 transition"
            >

              <div className="text-5xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-300 leading-7">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* Tech Stack */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold text-center mb-10">
          Technology Stack
        </h2>

        <div className="flex flex-wrap justify-center gap-4">

          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-blue-900 text-blue-100 px-5 py-3 rounded-full"
            >
              {tech}
            </span>
          ))}

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-16 py-8 text-center text-slate-400">

        <p className="text-lg">
          Village Digital Twin AI
        </p>

        <p className="mt-2">
          AI for Sustainable Rural Development
        </p>

      </footer>

    </main>
  );
}