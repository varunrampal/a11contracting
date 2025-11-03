import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 lg:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-300 mb-3">
              Landscaping & Labour Services
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Smart Contracting for Outdoor Projects & Skilled Workforce
            </h1>
            <p className="text-slate-200 mb-6">
              We help property managers, builders, and municipalities with reliable landscaping
              crews and on-demand human outsourcing.
            </p>
            <div className="flex gap-3">
              <Link
                to="/contact"
                className="bg-brand text-white px-5 py-2.5 rounded-full font-semibold hover:bg-brand-dark"
              >
                Request a Quote
              </Link>
              <Link
                to="/services"
                className="px-5 py-2.5 rounded-full border border-slate-400 text-white"
              >
                View Services
              </Link>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6">
            <h2 className="text-lg font-semibold mb-4">Why work with us?</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand"></span>
                Full-service landscaping: planting, grading, irrigation, cleanups
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand"></span>
                Human outsourcing: skilled & general labour, seasonal workers
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand"></span>
                Reliable crews, insured, BC-based
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Highlight sections */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold mb-6">What we do</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border p-6 shadow-sm">
            <h3 className="font-semibold mb-2">Landscaping & Site Work</h3>
            <p className="text-sm text-slate-600">
              Planting, lawn install, mulching, softscaping, cleanups, strata maintenance.
            </p>
          </div>
          <div className="bg-white rounded-xl border p-6 shadow-sm">
            <h3 className="font-semibold mb-2">Human Outsourcing</h3>
            <p className="text-sm text-slate-600">
              Temporary labour, seasonal crews, nursery/yard helpers, driver helpers.
            </p>
          </div>
          <div className="bg-white rounded-xl border p-6 shadow-sm">
            <h3 className="font-semibold mb-2">Commercial / Municipal</h3>
            <p className="text-sm text-slate-600">
              We work with government & private contractors for restoration and landscaping.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
