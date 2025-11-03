export default function Services() {
  const services = [
    {
      title: "Soft Landscaping",
      desc: "Planting, bed prep, topsoil, mulch, rock, turf.",
    },
    {
      title: "Property Cleanups",
      desc: "Spring/fall cleanups, pruning, hedge trimming, disposal.",
    },
    {
      title: "Restoration Projects",
      desc: "Native plants, erosion control, site rehab.",
    },
    {
      title: "Skilled Labour Supply",
      desc: "Landscape labourers, equipment helpers, yard workers.",
    },
    {
      title: "Seasonal / Temporary Workers",
      desc: "Short-term staffing for busy seasons.",
    },
    {
      title: "Driver / Delivery Helpers",
      desc: "Assist with loading, unloading, site deliveries.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-bold mb-3">Our Services</h1>
      <p className="text-slate-600 mb-8">
        We combine landscaping operations with human outsourcing, so you don’t have to manage
        multiple vendors.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-white rounded-xl border p-5 shadow-sm">
            <h2 className="font-semibold mb-1">{s.title}</h2>
            <p className="text-sm text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
