import { useState } from "react";
import { Link } from "react-router-dom";
import DesktopMenu from "./navbar/DesktopMenu";
import MobileMenu from "./navbar/MobileMenu";

// Make sure ACTIVE_TIER comes from your config
import { ACTIVE_TIER } from "../../config";

export default function Navbar({ enabledFeatures }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center text-xl font-bold tracking-wide">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-700 rounded-full mr-2 shadow-md">
            <span className="text-white">G</span>
          </div>
          <span className="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-300 bg-clip-text text-transparent">
            GlimmerHope
          </span>
        </Link>

        {/* Desktop Menu */}
        <DesktopMenu enabledFeatures={enabledFeatures} activeTier={ACTIVE_TIER} />

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none text-white"
        >
          {open ? "X" : "≡"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <MobileMenu
          enabledFeatures={enabledFeatures}
          activeTier={ACTIVE_TIER}
          closeMenu={() => setOpen(false)}
        />
      )}
    </nav>
  );
}
