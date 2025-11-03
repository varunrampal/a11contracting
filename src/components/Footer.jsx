export default function Footer() {
  return (
    <footer className="border-t bg-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} A11 Contracting. All rights reserved.</p>
        <p className="text-xs">Landscaping • Site Maintenance • Skilled Labour Supply</p>
      </div>
    </footer>
  );
}
