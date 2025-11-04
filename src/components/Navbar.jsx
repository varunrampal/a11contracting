import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/A11-Contracting-Logo.png"; 

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/landscaping", label: "Landscaping" },
  { to: "/staffing", label: "Human Outsourcing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-brand flex items-center justify-center text-white font-bold text-lg">
            C
          </div>
          {/* <span className="text-lg font-bold tracking-tight">A11 Contracting</span> */}
          <img
  src={logo}
  alt="A11 Contracting"
  className="h-10 w-auto object-contain"
/>
        </Link>
        <button
          className="md:hidden rounded-md border px-2 py-1"
          onClick={() => setOpen((p) => !p)}
        >
          <span className="sr-only">Toggle menu</span>
          ☰
        </button>
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium hover:text-brand ${isActive ? "text-brand" : "text-slate-700"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-black hover:bg-brand-dark"
          >
            Get Quote
          </Link>
        </nav>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <nav className="flex flex-col px-4 py-3 gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-700"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
