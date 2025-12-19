export default function Services() {
  const services = [
  {
    title: "Contruction",
    desc: [
      "Hardscaping: patios, walkways, retaining walls & driveways.",
      "Fencing, decks, pergolas & outdoor living spaces",
      "Drainage, grading & site preparation",
      "Concrete work: sidewalks, curbs, foundations",
      "Retaining walls & erosion control",
      "Custom stonework & masonry",
    ]
  },
  {
    title: "Landscaping & Site Work",
    desc: [
      "Professional softscaping and material installation for residential and commercial properties",
      "Planting & transplanting",
      "Lawn install (sod or seed)",
      "Mulching & bark installation",
      "Garden bed prep",
      "Edging, soil installation",
      "Property cleanups & strata maintenance"
    ]
  },
   {
    title: "Labour Support (Human Outsourcing)",
    desc: [
      "Reliable seasonal and project-based workers for:",
      "Plant handling crews",
      "General landscaping labour",
      "Driver/helpers for deliveries",
      "Temporary staffing for peak seasons",
      
    ]
  },
 {
    title: "Commercial / Municipal Projects",
    desc: [
      "We partner with government and private contractors for:",
      "Riparian & environmental restoration",
      "Erosion control & slope planting",
      "Wetland and habitat enhancement projects",
      "Our experienced crews understand municipal specs and environmental requirements.",
      
    ]
  }
];
  return (
    <div className="max-w-8xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-bold mb-3">Our Services</h1>
      <p className="text-slate-600 mb-8">
        We combine landscaping operations with human outsourcing, so you don’t have to manage
        multiple vendors.
      </p>
   <div className="grid md:grid-cols-5 gap-6">
  {services.map((s) => (
    <div key={s.title} className="bg-white rounded-xl border p-5 shadow-sm">
      <h2 className="font-semibold mb-1">{s.title}</h2>

      <ul className="text-sm text-slate-600 list-disc pl-5 space-y-1">
        {s.desc.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  ))}
</div>
    </div>
  );
}
