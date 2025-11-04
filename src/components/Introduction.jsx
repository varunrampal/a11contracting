export default function Introduction() {
  return (
<div className="max-w-6xl mx-auto px-4 py-16">
  {/* heading block */}
  <div className="inline-flex items-center gap-2 rounded-full bg-[#2596be]/10 px-3 py-1 mb-4">
    <span className="h-2 w-2 rounded-full bg-[#2596be]" />
    <span className="text-xs font-semibold tracking-wide text-[#0f4f66] uppercase">
      About A11 Contracting
    </span>
  </div>

  <div className="grid md:grid-cols-2 gap-10 items-start">
    <div>
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
        Serving the Langley, Metro Vancouver area and the rest of the Fraser Valley.
      </h1>
      <p className="text-slate-600 mb-5 leading-relaxed">
        We’re a BC-based contracting & Farming company focused on farming, landscaping and labour outsourcing.
        Our background in nurseries and restoration projects means we understand timelines,
        plant handling, and working with government and private clients during busy planting seasons.
      </p>
      <p className="text-sm text-slate-500 flex items-center gap-2">
        <span className="inline-block h-1 w-6 rounded-full bg-[#2596be]" />
        Reliable crews • Clear communication • Local to Lower Mainland
      </p>
    </div>

    {/* highlights */}
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
        <p className="text-xs font-semibold text-[#2596be] mb-1 uppercase tracking-wide">
          Landscaping
        </p>
        <p className="text-sm text-slate-700">
          Site cleanup, planting, mulch, edging — done to spec.
        </p>
      </div>
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
        <p className="text-xs font-semibold text-[#2596be] mb-1 uppercase tracking-wide">
          Labour Outsourcing
        </p>
        <p className="text-sm text-slate-700">
          Crews for builders, nurseries, and property managers.
        </p>
      </div>
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 col-span-2">
        <p className="text-xs font-semibold text-[#2596be] mb-1 uppercase tracking-wide">
          BC & Lower Mainland
        </p>
        <p className="text-sm text-slate-700">
          Local team, quick dispatch, we speak your project language.
        </p>
      </div>
    </div>
  </div>
</div>

  );
}
